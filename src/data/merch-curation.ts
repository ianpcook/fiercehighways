export interface MerchCuration {
  slug: string;
  displayName: string;
  kicker: string;
  description: string;
  productType?: string;
  price?: string;
  image?: string;
  imageAlt?: string;
  colors?: string[];
  printfulUrl?: string;
  status?: "live" | "coming-soon";
}

export const quickStoreUrl = "https://fiercehighways.printful.me/";

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

export const quickStoreMerchProducts: MerchCuration[] = [
  {
    slug: "wants-to-run-askuserquestion",
    displayName: "Wants to run AskUserQuestion",
    kicker: "The machine pauses at the edge of action.",
    description:
      "For the moment when the agent knows exactly what it wants to do, but the universe still demands a human hand on the gate.",
    productType: "Trucker Hat",
    price: "$32.00",
    image: "/images/store/wants-to-run-askuserquestion-hat.png",
    imageAlt: "Wants to run AskUserQuestion trucker hat",
    colors: ["White"],
    printfulUrl: quickStoreUrl,
    status: "live",
  },
  {
    slug: "youre-right-to-push-back",
    displayName: "You're right to push back",
    kicker: "A little resistance is how the work gets honest.",
    description:
      "For reviewers, operators, and stubborn friends who know the bad idea is not always wrong, but it is never allowed through unchallenged.",
    productType: "Trucker Hat",
    price: "$32.00",
    image: "/images/store/youre-right-to-push-back-hat.png",
    imageAlt: "You're right to push back trucker hat",
    colors: ["Quick Store"],
    printfulUrl: quickStoreUrl,
    status: "live",
  },
];
