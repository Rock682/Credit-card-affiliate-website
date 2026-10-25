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
  { slug: "hsbc", name: "HSBC" },
  { slug: "au-small-finance-bank", name: "AU Small Finance Bank" },
  { slug: "idfc-first-bank", name: "IDFC FIRST Bank" },
  { slug: "sbm-bank-india", name: "SBM Bank India" },
  { slug: "yes-bank", name: "YES Bank" }
];

export const getBank = (slug: string) => banks.find((bank) => bank.slug === slug);
