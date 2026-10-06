export type CategorySlug = "cashback" | "travel" | "shopping" | "fuel";

export type Category = {
  slug: CategorySlug;
  label: string;
  name: string;
  icon: string;
  summary: string;
  intro: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "cashback",
    label: "Cashback",
    name: "Cashback Credit Cards",
    icon: "₹",
    summary: "For everyday spending and online purchases",
    intro: "Explore cards designed around cashback and everyday spending. Compare the fee, reward structure and important terms before applying.",
    description: "Cashback cards can be useful when a large part of your spending falls within eligible cashback categories. Always check exclusions, caps and statement-cycle rules."
  },
  {
    slug: "travel",
    label: "Travel",
    name: "Travel Credit Cards",
    icon: "✈",
    summary: "For miles, travel rewards and lounge benefits",
    intro: "Explore travel-focused credit cards for rewards, airport benefits and travel-related spending.",
    description: "Travel benefits can include reward points, airline or hotel partnerships and lounge access. Eligibility, spend thresholds and redemption rules vary by issuer."
  },
  {
    slug: "shopping",
    label: "Shopping",
    name: "Shopping Credit Cards",
    icon: "▣",
    summary: "For shopping rewards and partner benefits",
    intro: "Explore cards built around shopping rewards, partner offers and online purchases.",
    description: "Shopping rewards often depend on the merchant, payment method and offer terms. Check the issuer's current conditions before applying."
  },
  {
    slug: "fuel",
    label: "Fuel",
    name: "Fuel Credit Cards",
    icon: "⛽",
    summary: "For fuel spending and commuting",
    intro: "Explore credit cards that can be relevant to fuel spending and commuting.",
    description: "Fuel cards may offer surcharge waivers or rewards subject to transaction ranges, monthly limits and eligible fuel stations."
  }
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
