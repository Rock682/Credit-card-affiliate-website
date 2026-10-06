export type Bank = {
  slug: string;
  name: string;
};

// `name` must match the `bank` field on cards in lib/cards.ts.
export const banks: Bank[] = [
  { slug: "hdfc-bank", name: "HDFC Bank" },
  { slug: "sbi-card", name: "SBI Card" },
  { slug: "icici-bank", name: "ICICI Bank" },
  { slug: "axis-bank", name: "Axis Bank" },
  { slug: "hsbc", name: "HSBC" }
];

export const getBank = (slug: string) => banks.find((bank) => bank.slug === slug);
