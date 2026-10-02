export type CreditCard = {
  slug: string;
  name: string;
  issuer: string;
  bank: string;
  category: string;
  bestFor: string;
  annualFee: string;
  joiningFee: string;
  renewalWaiver: string;
  reward: string;
  welcomeBenefit: string;
  keyBenefits: string[];
  eligibility: string;
  forexFee: string;
  loungeAccess: string;
  description: string;
  affiliateUrl?: string;
  applicationUrl: string;
  sourceUrl: string;
  lastVerified: string;
  isFeatured?: boolean;
  isLifetimeFree?: boolean;
};

export const cards: CreditCard[] = [
  {
    slug: "hsbc-platinum",
    name: "HSBC Platinum Credit Card",
    issuer: "HSBC India",
    bank: "HSBC",
    category: "Travel & Lifestyle",
    bestFor: "Rewards, travel and lifestyle spending",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "2 reward points for every ₹150 spent, with up to 6X reward points on eligible hotels, flights and car rentals through Travel with Points.",
    welcomeBenefit: "Current HSBC offers include 2,000 reward points after the stated qualifying spend and app-login condition, a 3-month Swiggy One membership, an eligible voucher of up to ₹500, and a ₹250 Amazon eGift Card for qualifying online applications.",
    keyBenefits: [
      "No joining or annual fee.",
      "Convert reward points to air miles with participating airline partners.",
      "Up to 6X reward points on eligible hotels, flights and car rentals through Travel with Points.",
      "Complimentary 12-month Times Prime subscription, subject to the applicable terms.",
      "Complimentary domestic flight seat selection twice a year on eligible MakeMyTrip bookings.",
      "Eligible contactless fuel purchases can earn ₹250 cashback per quarter, with a fuel surcharge waiver subject to the stated monthly limits."
    ],
    eligibility: "HSBC states that salaried applicants must be 18–65 years old with minimum annual income of ₹6 lakh; self-employed applicants must be 25–65 with minimum annual income of ₹12 lakh. Applicants must be Indian residents living in eligible cities listed by HSBC.",
    forexFee: "Check the current HSBC fee schedule and card terms before international use.",
    loungeAccess: "Airport lounge access is not listed among the highlighted benefits on HSBC's current Visa Platinum product page; verify the current terms if lounge access is important to you.",
    description: "A lifetime-free HSBC card focused on everyday rewards, travel-point transfers and lifestyle benefits.",
    affiliateUrl: "https://bitli.in/jzpU9gR",
    applicationUrl: "https://www.hsbc.co.in/credit-cards/products/visa-platinum/",
    sourceUrl: "https://www.hsbc.co.in/credit-cards/products/visa-platinum/",
    lastVerified: "2 October 2026",
    isLifetimeFree: true
  },
  {
    slug: "hdfc-regalia-gold",
    name: "HDFC Bank Regalia Gold Credit Card",
    issuer: "HDFC Bank",
    bank: "HDFC Bank",
    category: "Travel & Lifestyle",
    bestFor: "Travel and lifestyle spending",
    annualFee: "₹2,500 + applicable taxes",
    joiningFee: "₹2,500 + applicable taxes",
    renewalWaiver: "Annual fee can be waived on ₹4 lakh annual spends.",
    reward: "5 Reward Points for every ₹200 spent on eligible categories.",
    welcomeBenefit: "Complimentary Club Vistara Silver Tier and MMT Black membership after meeting the applicable welcome-spend condition.",
    keyBenefits: [
      "3 domestic lounge visits per calendar quarter after ₹60,000 spend in the preceding calendar quarter.",
      "6 international lounge visits per year through Priority Pass.",
      "₹5,000 flight voucher on ₹5 lakh annual spends, plus another ₹5,000 voucher on ₹7.5 lakh annual spends.",
      "5X Reward Points at selected partner merchants, subject to the applicable terms and caps."
    ],
    eligibility: "Eligibility, income requirements and approval are determined by HDFC Bank and can vary by applicant.",
    forexFee: "1.75% DCC markup applies to specified INR transactions at international locations under the updated terms.",
    loungeAccess: "Domestic access is spend-based from 1 July 2026; international Priority Pass access continues subject to the card terms.",
    description: "A premium HDFC Bank card focused on travel, lifestyle rewards and airport benefits.",
    applicationUrl: "https://v.hdfc.bank.in/htdocs/amp/personal/pay/cards/credit-cards/regalia-gold-credit-card.html",
    sourceUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/common/Credit-Cards/Regalia-Gold-Product-feature-change.pdf",
    lastVerified: "2 October 2026",
    isFeatured: true
  },
  {
    slug: "sbi-cashback",
    name: "CASHBACK SBI Card",
    issuer: "SBI Card",
    bank: "SBI Card",
    category: "Cashback",
    bestFor: "Online and everyday cashback",
    annualFee: "₹999 + applicable taxes",
    joiningFee: "₹999 + applicable taxes",
    renewalWaiver: "Renewal fee is reversed if annual spends reach ₹2 lakh in the preceding year.",
    reward: "5% cashback on eligible online spends and 1% cashback on eligible offline spends.",
    welcomeBenefit: "No separate welcome benefit is shown on the current core product page.",
    keyBenefits: [
      "Online cashback is capped at ₹2,000 per statement cycle.",
      "Offline cashback is capped at ₹2,000 per statement cycle.",
      "Aggregate cashback is capped at ₹4,000 per statement cycle.",
      "1% fuel surcharge waiver on eligible transactions between ₹500 and ₹3,000, subject to the monthly cap."
    ],
    eligibility: "Eligibility and approval are determined by SBI Card and can vary by applicant.",
    forexFee: "Check the current SBI Card fee schedule before international use.",
    loungeAccess: "Do not assume lounge access from older reviews; check the current SBI Card terms before applying.",
    description: "A cashback-focused card with higher cashback on eligible online spending and a separate offline cashback rate.",
    applicationUrl: "https://www.sbicard.com/en/personal/credit-cards/cashback-sbi-card.html",
    sourceUrl: "https://www.sbicard.com/en/personal/credit-cards/cashback-sbi-card.html",
    lastVerified: "2 October 2026"
  },
  {
    slug: "icici-amazon-pay",
    name: "Amazon Pay ICICI Bank Credit Card",
    issuer: "ICICI Bank",
    bank: "ICICI Bank",
    category: "Shopping & Cashback",
    bestFor: "Amazon and Amazon Pay spending",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "Up to 5% back on Amazon India for Prime members; 3% for non-Prime cardholders on eligible Amazon purchases, with other category rates subject to terms.",
    welcomeBenefit: "No joining or annual fee; rewards are credited as Amazon Pay balance.",
    keyBenefits: [
      "5% back on eligible Amazon India purchases for Prime members.",
      "3% back on eligible Amazon India purchases for non-Prime cardholders.",
      "2% back on eligible Amazon Pay partner merchants.",
      "1% back on other eligible payments, subject to exclusions and terms.",
      "No expiry date on eligible earnings."
    ],
    eligibility: "ICICI Bank states an age range of 21–65 years; other eligibility and approval criteria apply.",
    forexFee: "Check the current ICICI Bank fee schedule before international use.",
    loungeAccess: "No airport lounge benefit is being highlighted here.",
    description: "A lifetime-free co-branded card for Amazon shoppers, with rewards credited to Amazon Pay balance.",
    applicationUrl: "https://www.icicibank.com/personal-banking/cards/credit-card/amazon-pay-credit-card.html",
    sourceUrl: "https://www.icicibank.com/personal-banking/cards/credit-card/amazon-pay-credit-card/amazon-pay-faq",
    lastVerified: "2 October 2026",
    isLifetimeFree: true
  }
];

export const getCard = (slug: string) => cards.find((card) => card.slug === slug);
