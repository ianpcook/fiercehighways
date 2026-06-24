import printfulProducts from "./printful-products.generated.json";
import { merchCurationByPrintfulId } from "./merch-curation";

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

export const merchProducts: MerchProduct[] = printfulProducts.products.map((product) => {
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
    image: product.imageUrl ?? product.thumbnailUrl,
    imageAlt: `${name} product image`,
    printfulUrl: curation?.printfulUrl,
    status: curation?.status ?? "coming-soon",
    colors: product.colors ?? [],
    printfulId: product.id,
  };
});

export const merchSyncedAt = printfulProducts.syncedAt;
