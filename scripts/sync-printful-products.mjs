import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DEFAULT_SECRET_FILE = "/Users/deckard/.openclaw/secrets/printful-hats.env";
const DEFAULT_STORE_ID = "17344061";
const DEFAULT_OUTPUT = "src/data/printful-products.generated.json";

function parseArgs(argv) {
  const args = {
    out: DEFAULT_OUTPUT,
    storeId: process.env.PRINTFUL_STORE_ID || DEFAULT_STORE_ID,
    secretFile: process.env.PRINTFUL_SECRET_FILE || DEFAULT_SECRET_FILE,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];

    if (arg === "--out" && next) {
      args.out = next;
      i += 1;
    } else if (arg === "--store-id" && next) {
      args.storeId = next;
      i += 1;
    } else if (arg === "--secret-file" && next) {
      args.secretFile = next;
      i += 1;
    }
  }

  return args;
}

async function readEnvFile(filePath) {
  try {
    const raw = await readFile(filePath, "utf8");
    return Object.fromEntries(
      raw
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => {
          const index = line.indexOf("=");
          if (index === -1) return [line, ""];
          const key = line.slice(0, index).trim();
          const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
          return [key, value];
        }),
    );
  } catch (error) {
    if (error && error.code === "ENOENT") return {};
    throw error;
  }
}

function uniqueBy(values, keyFn) {
  const seen = new Set();
  const result = [];

  for (const value of values) {
    const key = keyFn(value);
    if (key == null || seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }

  return result;
}

function compact(value) {
  if (Array.isArray(value)) return value.map(compact).filter((item) => item !== undefined);
  if (!value || typeof value !== "object") return value;

  const entries = Object.entries(value)
    .map(([key, item]) => [key, compact(item)])
    .filter(([, item]) => item !== undefined && item !== null && item !== "");

  return Object.fromEntries(entries);
}

function normalizeProduct(detail) {
  const syncProduct = detail.sync_product;
  const variants = detail.sync_variants ?? [];
  const activeVariants = variants.filter((variant) => !variant.is_ignored && variant.synced);
  const prices = activeVariants
    .map((variant) => Number.parseFloat(variant.retail_price))
    .filter((price) => Number.isFinite(price));
  const currencies = uniqueBy(
    activeVariants.map((variant) => variant.currency).filter(Boolean),
    (currency) => currency,
  );

  const normalizedVariants = activeVariants.map((variant) => {
    const previewFile = variant.files?.find((file) => file.type === "preview" && file.preview_url);
    const printFile = variant.files?.find((file) => file.type !== "preview" && file.url);

    return compact({
      id: variant.id,
      externalId: variant.external_id,
      sku: variant.sku,
      name: variant.name,
      color: variant.color,
      size: variant.size,
      retailPrice: variant.retail_price,
      currency: variant.currency,
      availabilityStatus: variant.availability_status,
      catalogVariantId: variant.variant_id,
      catalogProductId: variant.product?.product_id,
      catalogProductName: variant.product?.name,
      catalogProductImage: variant.product?.image,
      previewImageUrl: previewFile?.preview_url ?? previewFile?.thumbnail_url,
      printFileUrl: printFile?.url,
      printFileName: printFile?.filename,
    });
  });

  const previewImages = uniqueBy(
    normalizedVariants
      .map((variant) => variant.previewImageUrl)
      .filter(Boolean)
      .map((url) => ({ url })),
    (image) => image.url,
  );

  return compact({
    id: syncProduct.id,
    externalId: syncProduct.external_id,
    name: syncProduct.name,
    syncedVariantCount: syncProduct.synced,
    variantCount: syncProduct.variants,
    thumbnailUrl: syncProduct.thumbnail_url,
    imageUrl: previewImages[0]?.url ?? syncProduct.thumbnail_url,
    isIgnored: syncProduct.is_ignored,
    price: prices.length
      ? {
          min: Math.min(...prices).toFixed(2),
          max: Math.max(...prices).toFixed(2),
          currency: currencies[0] ?? "USD",
        }
      : undefined,
    colors: uniqueBy(
      normalizedVariants.map((variant) => variant.color).filter(Boolean),
      (color) => color,
    ),
    variants: normalizedVariants,
    previewImages,
  });
}

async function printfulFetch(pathname, token, storeId, searchParams = {}) {
  const url = new URL(pathname, "https://api.printful.com");
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
  });

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-PF-Store-Id": storeId,
    },
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok || body.code >= 400) {
    const message = body.error?.message ?? body.result ?? response.statusText;
    throw new Error(`Printful ${response.status}: ${message}`);
  }

  return body;
}

async function listSyncProducts(token, storeId) {
  const products = [];
  const limit = 100;
  let offset = 0;

  while (true) {
    const body = await printfulFetch("/store/products", token, storeId, { limit, offset });
    products.push(...(body.result ?? []));

    const total = body.paging?.total ?? products.length;
    offset += limit;
    if (products.length >= total) break;
  }

  return products;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const envFile = await readEnvFile(args.secretFile);
  const token = process.env.PRINTFUL_API_TOKEN || envFile.PRINTFUL_API_TOKEN;

  if (!token) {
    throw new Error(
      "Missing PRINTFUL_API_TOKEN. Set it in the environment or in the configured secret file.",
    );
  }

  const listedProducts = await listSyncProducts(token, args.storeId);
  const productDetails = await Promise.all(
    listedProducts
      .filter((product) => !product.is_ignored)
      .map(async (product) => {
        const body = await printfulFetch(`/store/products/${product.id}`, token, args.storeId);
        return normalizeProduct(body.result);
      }),
  );

  const output = {
    source: "printful-api-v1",
    storeId: Number(args.storeId),
    syncedAt: new Date().toISOString(),
    products: productDetails.sort((a, b) => a.name.localeCompare(b.name)),
  };

  const outPath = path.resolve(args.out);
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, `${JSON.stringify(output, null, 2)}\n`);

  console.log(
    `Synced ${output.products.length} Printful product${output.products.length === 1 ? "" : "s"} to ${args.out}`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
