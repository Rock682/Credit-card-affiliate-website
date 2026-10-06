export type Guide = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-credit-card-fees-work",
    shortTitle: "How credit card fees work",
    title: "How credit card fees work in India",
    summary: "Understand joining fees, annual fees, renewal waivers and taxes before applying.",
    intro: "Joining fees, annual fees, renewal waivers and taxes can change the effective cost of a card.",
    sections: [
      { heading: "Joining fee", body: "A joining fee may be charged when a card is issued. Check whether a welcome benefit offsets it and whether taxes apply." },
      { heading: "Annual or renewal fee", body: "This is the recurring fee for keeping a card. Some cards waive or reverse it after a stated annual spending threshold." },
      { heading: "Other charges", body: "Cash advances, foreign transactions, late payments and other services can carry separate charges. Review the issuer's current schedule." },
      { heading: "Before applying", body: "Compare the recurring cost with the benefits you are realistically likely to use rather than relying only on a headline reward rate." }
    ]
  },
  {
    slug: "cashback-credit-cards-guide",
    shortTitle: "How to evaluate cashback credit cards",
    title: "How to evaluate cashback credit cards",
    summary: "Learn how cashback rates, exclusions, caps and statement cycles can affect your actual value.",
    intro: "A headline cashback percentage does not necessarily apply to every transaction.",
    sections: [
      { heading: "Check eligible categories", body: "Issuers may distinguish online, offline, partner, utility, fuel or other transaction types." },
      { heading: "Check caps", body: "A monthly or statement-cycle cashback cap can materially change the value for higher spenders." },
      { heading: "Check exclusions", body: "Certain transactions may earn reduced cashback or no cashback under the issuer's terms." },
      { heading: "Calculate your actual value", body: "Estimate cashback using your own monthly spending pattern and compare it with the annual fee." }
    ]
  },
  {
    slug: "travel-credit-cards-guide",
    shortTitle: "How to evaluate travel credit cards",
    title: "How to evaluate travel credit cards",
    summary: "Understand reward points, lounge access, travel benefits and the terms worth checking.",
    intro: "Travel cards can combine reward points, lounge access and travel-related benefits, but conditions matter.",
    sections: [
      { heading: "Reward structure", body: "Check how many points you earn, which categories qualify and whether there are monthly or annual caps." },
      { heading: "Lounge access", body: "Look for spend requirements, visit limits and domestic versus international access conditions." },
      { heading: "Redemption", body: "Check transfer partners, redemption values, minimum points and expiry rules before assigning a value to rewards." },
      { heading: "International spending", body: "Review foreign-currency charges and dynamic currency conversion terms before using a card abroad." }
    ]
  }
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
