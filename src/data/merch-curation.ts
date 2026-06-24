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
    displayName: "Footgun Richardson Snapback Hat",
    kicker: "Some mistakes deserve a trail marker.",
    description:
      "For anyone who turned a helpful tool into a smoking bootprint, then had the decency to read the logs afterward.",
    productType: "Richardson Snapback Hat",
    price: "$27.00",
    image: "/images/store/footgun-richardson-snapback-hat.png",
    imageAlt: "Footgun Richardson Snapback Hat",
    printfulUrl: "https://fiercehighways.printful.me/product/snapback-hat",
    status: "live",
  },
};

export const quickStoreMerchProducts: MerchCuration[] = [
  {
    slug: "pushing-back-5-panel-trucker-cap",
    displayName: "Pushing Back 5 Panel Trucker Cap",
    kicker: "A little resistance is how the work gets honest.",
    description:
      "For reviewers, operators, and stubborn friends who know the bad idea is not always wrong, but it is never allowed through unchallenged.",
    productType: "5 Panel Trucker Cap",
    price: "$22.00",
    image: "/images/store/pushing-back-5-panel-trucker-cap.png",
    imageAlt: "Pushing Back 5 Panel Trucker Cap",
    colors: ["Quick Store"],
    printfulUrl: `${quickStoreUrl}product/pushing-back-5-panel-trucker-cap`,
    status: "live",
  },
  {
    slug: "user-questions-yupoong-trucker-cap",
    displayName: "User Questions: Yupoong Trucker Cap",
    kicker: "The machine pauses at the edge of action.",
    description:
      "For the moment when the agent knows exactly what it wants to do, but the universe still demands a human hand on the gate.",
    productType: "Yupoong Trucker Cap",
    price: "$22.00",
    image: "/images/store/user-questions-yupoong-trucker-cap.png",
    imageAlt: "User Questions: Yupoong Trucker Cap",
    colors: ["Quick Store"],
    printfulUrl: `${quickStoreUrl}product/user-questions-yupoong-trucker-cap`,
    status: "live",
  },
  {
    slug: "skip-permissions-6-panel-richardson-trucker-hat",
    displayName: "Skip Permissions 6 Panel Richardson Trucker Hat",
    kicker: "The warning label was technically visible.",
    description:
      "For the operator who saw the guardrail, read the warning label, understood the blast radius, and clicked through anyway.",
    productType: "6 Panel Richardson Trucker Hat",
    price: "$25.00",
    image: "/images/store/skip-permissions-6-panel-richardson-trucker-hat.png",
    imageAlt: "Skip Permissions 6 Panel Richardson Trucker Hat",
    colors: ["Quick Store"],
    printfulUrl: `${quickStoreUrl}product/trucker-cap`,
    status: "live",
  },
];
