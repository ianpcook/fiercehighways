import printfulProducts from "./printful-products.generated.json";
import { merchCurationByPrintfulId, quickStoreMerchProducts } from "./merch-curation";

export interface MerchProduct {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  productType: string;
  price?: string;
  image: string;
  imageAlt: string;
  printfulUrl?: string;
  status: "live" | "coming-soon";
  colors: string[];
  printfulId: number;
}

type PrintfulProduct = (typeof printfulProducts.products)[number];

function formatPrice(product: PrintfulProduct): string | undefined {
  if (!product.price) return undefined;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.price.currency,
  });

  if (product.price.min === product.price.max) {
    return formatter.format(Number(product.price.min));
  }

  return `${formatter.format(Number(product.price.min))} - ${formatter.format(Number(product.price.max))}`;
}

function fallbackSlug(name: string, id: number): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || `printful-${id}`;
}

const syncedMerchProducts: MerchProduct[] = printfulProducts.products.map((product) => {
  const curation = merchCurationByPrintfulId[product.id];
  const name = curation?.displayName ?? product.name;

  return {
    slug: curation?.slug ?? fallbackSlug(product.name, product.id),
    name,
    kicker: curation?.kicker ?? "Fresh from the warehouse of hard lessons.",
    description:
      curation?.description ??
      "A Fierce Highways field marker synced from Printful and waiting for a sharper description.",
    productType: curation?.productType ?? product.variants[0]?.catalogProductName ?? "Printful product",
    price: curation?.price ?? formatPrice(product),
    image: curation?.image ?? product.imageUrl ?? product.thumbnailUrl,
    imageAlt: curation?.imageAlt ?? `${name} product image`,
    printfulUrl: curation?.printfulUrl,
    status: curation?.status ?? "coming-soon",
    colors: curation?.colors ?? product.colors ?? [],
    printfulId: product.id,
  };
});

const supplementalMerchProducts: MerchProduct[] = quickStoreMerchProducts.map((product, index) => ({
  slug: product.slug,
  name: product.displayName,
  kicker: product.kicker,
  description: product.description,
  productType: product.productType ?? "Printful product",
  price: product.price,
  image: product.image ?? "/images/backgrounds/winding-road.jpg",
  imageAlt: product.imageAlt ?? `${product.displayName} product image`,
  printfulUrl: product.printfulUrl,
  status: product.status ?? "live",
  colors: product.colors ?? [],
  printfulId: -(index + 1),
}));

export const merchProducts: MerchProduct[] = [...syncedMerchProducts, ...supplementalMerchProducts];

export const merchSyncedAt = printfulProducts.syncedAt;
