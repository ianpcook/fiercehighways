export interface MerchCuration {
  slug: string;
  displayName: string;
  kicker: string;
  description: string;
  productType?: string;
  price?: string;
  printfulUrl?: string;
  status?: "live" | "coming-soon";
}

export const merchCurationByPrintfulId: Record<number, MerchCuration> = {
  439929909: {
    slug: "footgun",
    displayName: "footgun",
    kicker: "Some mistakes deserve a trail marker.",
    description:
      "For anyone who turned a helpful tool into a smoking bootprint, then had the decency to read the logs afterward.",
    productType: "Richardson 112 Trucker Hat",
    price: "$32.00",
    printfulUrl: "https://fiercehighways.printful.me/product/snapback-hat",
    status: "live",
  },
};
