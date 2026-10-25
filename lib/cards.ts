import { banks } from "@/lib/banks";
import type { CategorySlug } from "@/lib/categories";

export type CardNetwork = "Visa" | "Mastercard" | "RuPay" | "American Express" | "Diners Club";

export type CreditCard = {
  slug: string;
  name: string;
  issuer: string;
  bank: string;
  /** Display label. Use `categories` for filtering and category pages. */
  category: string;
  categories: CategorySlug[];
  /** Leave unset until the network has been verified with the issuer. */
  networks?: CardNetwork[];
  bestFor: string;
  annualFee: string;
  joiningFee: string;
  /** Fee in ₹ before taxes; 0 when there is no fee. */
  annualFeeInr: number;
  joiningFeeInr: number;
  renewalWaiver: string;
  reward: string;
  welcomeBenefit: string;
  keyBenefits: string[];
  eligibility: string;
  forexFee: string;
  loungeAccess: string;
  description: string;
  isFeatured?: boolean;
  isLifetimeFree?: boolean;
} & (
  // At least one link is needed for the apply button.
  | { affiliateUrl: string; applicationUrl?: string }
  | { affiliateUrl?: string; applicationUrl: string }
) & (
  // Set both once the details have been checked against the issuer's own page.
  | { sourceUrl: string; lastVerified: string }
  | { sourceUrl?: undefined; lastVerified?: undefined }
);

export const cards: CreditCard[] = [
  {
    slug: "hsbc-platinum",
    name: "HSBC Platinum Credit Card",
    issuer: "HSBC India",
    bank: "HSBC",
    category: "Travel & Lifestyle",
    categories: ["travel", "fuel"],
    networks: ["Visa"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
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
    categories: ["travel"],
    annualFeeInr: 2500,
    joiningFeeInr: 2500,
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
    categories: ["cashback"],
    annualFeeInr: 999,
    joiningFeeInr: 999,
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
    categories: ["shopping", "cashback"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
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
  },
  {
    slug: "sbi-irctc-rupay",
    name: "IRCTC SBI RuPay Credit Card",
    issuer: "SBI Card",
    bank: "SBI Card",
    category: "Travel (Railways)",
    categories: ["travel"],
    networks: ["RuPay"],
    annualFeeInr: 500,
    joiningFeeInr: 500,
    bestFor: "IRCTC train ticket bookings",
    annualFee: "₹500 + applicable taxes (from the second year)",
    joiningFee: "₹500 + applicable taxes",
    renewalWaiver: "No spend-based waiver listed; 500 reward points are credited when the renewal fee is paid.",
    reward: "10% value back as reward points on AC1, AC2, AC3, AC Chair Car and Executive Chair Car bookings on IRCTC; 1 reward point per ₹125 on other eligible retail spends.",
    welcomeBenefit: "350 reward points on a first spend of ₹500 or more within 45 days of card issuance.",
    keyBenefits: [
      "10% value back as reward points on eligible AC and chair-car bookings on IRCTC.",
      "4 complimentary railway lounge visits per year (1 per quarter).",
      "1% IRCTC transaction charge waiver on e-ticket bookings.",
      "1% fuel surcharge waiver on transactions between ₹500 and ₹3,000, up to ₹100 per month.",
      "500 reward points when the renewal fee is paid.",
      "RuPay network, so the card can be linked to UPI apps for eligible payments."
    ],
    eligibility: "Applicants aged 21–65, salaried or self-employed, with a minimum income of ₹30,000 per month and a credit score of 650 or more with no delayed payments in the past 12 months. Applicants without a credit history are considered only if salaried. Approval is decided by SBI Card.",
    forexFee: "Check the current SBI Card fee schedule before international use.",
    loungeAccess: "4 complimentary railway lounge visits per year (1 per quarter), subject to the card terms.",
    description: "A RuPay credit card for regular IRCTC train travellers, with reward points on AC and chair-car tickets and UPI support.",
    affiliateUrl: "https://bitli.in/F8csBOi"
  },
  {
    slug: "au-lit",
    name: "AU LIT Credit Card",
    issuer: "AU Small Finance Bank",
    bank: "AU Small Finance Bank",
    category: "Shopping & Lifestyle",
    categories: ["shopping"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
    bestFor: "Customisable benefits and partner shopping discounts",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee. Optional benefits you add to the card carry their own fee.",
    reward: "Customisable card: you choose the benefits you want and pay a fee only for the features you add. Check AU Small Finance Bank's current feature list for reward rates.",
    welcomeBenefit: "No separate welcome benefit is listed in the current offer summary.",
    keyBenefits: [
      "Lifetime free, with optional benefits you can add for a fee.",
      "10% instant discount on Amazon orders above ₹5,000, up to ₹1,000 per month.",
      "10% instant discount on Flipkart orders above ₹10,000, up to ₹1,500 per month.",
      "Additional 10% off selected styles on Myntra on a minimum purchase of ₹3,999, up to ₹1,000.",
      "15% instant discount on Tata CLiQ orders above ₹500, up to ₹300 per month.",
      "10% off groceries on Blinkit app orders above ₹499, up to ₹100.",
      "Partner discounts are promotional offers and can change or end at any time."
    ],
    eligibility: "Applicants aged 21–60, salaried or self-employed, with a minimum income of ₹25,000 per month, a credit score of 700 or more and no delayed payments in the last 12 months. You also need an existing credit card held for at least 6 months with a credit limit of at least ₹30,000. Approval is decided by AU Small Finance Bank.",
    forexFee: "Check the current AU Small Finance Bank fee schedule before international use.",
    loungeAccess: "No lounge benefit is listed in the current offer summary.",
    description: "A lifetime-free, customisable card from AU Small Finance Bank: add only the benefits you want, plus partner shopping discounts.",
    affiliateUrl: "https://bitli.in/Lu2R5lF",
    isLifetimeFree: true
  },
  {
    slug: "idfc-first",
    name: "IDFC FIRST Credit Card",
    issuer: "IDFC FIRST Bank",
    bank: "IDFC FIRST Bank",
    category: "Rewards & Travel",
    categories: ["travel"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
    bestFor: "Rewards on dining, travel and international spending",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "3X reward points on eligible online and offline spends up to ₹20,000 per statement cycle; 10X on dining, travel, international and birthday spends; 1X on utility, insurance, IDFC FASTag and railway transactions. Fuel, EMI and cash withdrawals earn no points. 1 reward point = ₹0.25.",
    welcomeBenefit: "A ₹500 voucher (choice of partner brands) on spending ₹5,000 within 30 days of card activation, plus 5% cashback (up to ₹1,000) on your first EMI transaction within 30 days of activation.",
    keyBenefits: [
      "Lifetime free, with no joining or annual fee.",
      "0% forex markup on international transactions.",
      "10X reward points on dining, travel, international and birthday spends.",
      "4 complimentary railway lounge visits per quarter (16 a year) when you spend ₹20,000 or more in the previous calendar month.",
      "Complimentary roadside assistance worth ₹1,399, covering towing, flat tyres, battery jump-starts and emergency fuel delivery.",
      "Reward points are valid for 24 months and can be redeemed for flights, hotels, vouchers and merchandise; a ₹99 + GST fee applies per redemption.",
      "Up to 20% off at 1,500+ partner restaurants through the bank's dining programme."
    ],
    eligibility: "Applicants aged 21–65, salaried or self-employed, with a minimum income of ₹25,000 per month (salaried) or ₹3,00,000 per year (self-employed) and a credit score of 720 or more. Approval is decided by IDFC FIRST Bank.",
    forexFee: "0% forex markup on international transactions.",
    loungeAccess: "4 complimentary railway lounge visits per quarter (up to 16 a year), unlocked by spending ₹20,000 or more in the previous calendar month.",
    description: "A lifetime-free IDFC FIRST Bank card with accelerated reward points on dining, travel and international spends, and no forex markup.",
    affiliateUrl: "https://bitli.in/ZcRhNBM",
    isLifetimeFree: true
  },
  {
    slug: "sbm-zet",
    name: "SBM ZET Credit Card",
    issuer: "SBM Bank India",
    bank: "SBM Bank India",
    category: "Secured (FD-backed) & Cashback",
    categories: ["cashback", "shopping"],
    networks: ["RuPay"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
    bestFor: "Building credit with a fixed deposit, plus shopping and UPI cashback",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "5% cashback on Amazon and Flipkart, and up to 15% on Nykaa, Domino's and 80+ brand vouchers; cashback can be transferred to your bank account. 2% cashback on UPI payments via ZET with a ₹99 monthly subscription, capped at ₹500 per month.",
    welcomeBenefit: "No separate welcome benefit is listed in the current offer summary.",
    keyBenefits: [
      "Lifetime free, with no joining or renewal fee.",
      "Secured by a fixed deposit, so no income proof is needed; approval is still decided by the bank.",
      "5% cashback on Amazon and Flipkart, and up to 15% on Nykaa, Domino's and 80+ brand vouchers.",
      "2% cashback on UPI payments via ZET with a ₹99 monthly subscription, capped at ₹500 per month.",
      "Up to 20% off on Swiggy, Zomato, Instamart, BookMyShow and more (up to ₹100, once per month per partner).",
      "Up to 7% interest on the fixed deposit; bank deposits are insured by DICGC up to ₹5 lakh per bank.",
      "Up to 45 days of interest-free credit."
    ],
    eligibility: "Applicants aged 21–65 with a fixed deposit of at least ₹2,000, which secures the card. No income proof is needed because the card is backed by your FD. Approval is decided by SBM Bank India.",
    forexFee: "Check the current SBM Bank India fee schedule before international use.",
    loungeAccess: "No lounge benefit is listed in the current offer summary.",
    description: "A lifetime-free, FD-backed RuPay credit card from SBM Bank India through ZET, useful for building credit, with cashback on shopping and UPI payments.",
    affiliateUrl: "https://bitli.in/tq4AGft",
    isLifetimeFree: true
  },
  {
    slug: "axis-neo-rupay",
    name: "Axis Bank Neo RuPay Credit Card",
    issuer: "Axis Bank",
    bank: "Axis Bank",
    category: "Shopping & Lifestyle",
    categories: ["shopping"],
    networks: ["RuPay", "Visa", "Mastercard"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
    bestFor: "Discounts on everyday lifestyle spending",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "Discount-led card: 10% off on Blinkit (up to ₹250 per month), 10% off BookMyShow movie tickets (up to ₹100 per month), ₹150 off on Myntra on spends above ₹999, plus other partner offers. No general reward rate is listed in the current offer summary.",
    welcomeBenefit: "100% cashback up to ₹300 on your first utility bill payment within 30 days of card issuance.",
    keyBenefits: [
      "Lifetime free, with no joining or annual fee.",
      "Choose your card network: RuPay, Visa or Mastercard.",
      "10% off on Blinkit (up to ₹250 per month) and 10% off BookMyShow movie tickets (up to ₹100 per month).",
      "₹150 off on Myntra on spends above ₹999.",
      "₹120 off Zomato food delivery twice a month on orders above ₹499.",
      "5% off mobile, broadband and DTH recharges via Paytm, up to ₹150 once a month on a minimum transaction of ₹299.",
      "Wednesday offers: 15% off flights and hotels via MakeMyTrip, 10% off on Swiggy and up to ₹1,000 off on Tira.",
      "Partner discounts are promotional offers and can change or end at any time."
    ],
    eligibility: "Applicants aged 21–65, either salaried with a minimum income of ₹25,000 per month or self-employed with an ITR above ₹3,60,000 a year, and a credit score of 736 or more. Applicants without a credit history are not accepted. Approval is decided by Axis Bank.",
    forexFee: "Check the current Axis Bank fee schedule before international use.",
    loungeAccess: "No lounge benefit is listed in the current offer summary.",
    description: "A lifetime-free Axis Bank card for everyday lifestyle spending, with partner discounts on groceries, food delivery, movies and shopping.",
    affiliateUrl: "https://bitli.in/J5G49My",
    isLifetimeFree: true
  },
  {
    slug: "yes-bank-pop-club",
    name: "YES Bank POP-Club RuPay Credit Card",
    issuer: "YES Bank",
    bank: "YES Bank",
    category: "Shopping & Rewards",
    categories: ["shopping"],
    networks: ["RuPay"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
    bestFor: "Online shopping and UPI rewards",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "10 POPcoins per ₹100 spent online and 2 POPcoins per ₹100 spent offline, plus an extra 5% POPcoins on POP UPI payments made with the card. POPcoins can be redeemed for vouchers from Zomato, Blinkit, Cleartrip and PharmEasy; the value of a POPcoin is not listed in the current offer summary.",
    welcomeBenefit: "On card activation: a ₹750 Cleartrip voucher, a 3-month Zomato Gold Mini membership, a 6-month PharmEasy Plus membership and 500 POPcoins.",
    keyBenefits: [
      "Lifetime free, with no joining or annual fee.",
      "10 POPcoins per ₹100 spent online and 2 POPcoins per ₹100 spent offline.",
      "Extra 5% POPcoins on POP UPI payments made with the card.",
      "Joining benefits worth a ₹750 Cleartrip voucher, Zomato Gold Mini (3 months), PharmEasy Plus (6 months) and 500 POPcoins.",
      "1,500 extra POPcoins on annual spends of ₹1.5 lakh.",
      "Redeem POPcoins for vouchers from Zomato, Blinkit, Cleartrip and PharmEasy.",
      "1% fuel surcharge waiver."
    ],
    eligibility: "Applicants aged 21–60, salaried or self-employed, with a CIBIL score of 730 or more. You need an existing credit card from another bank with a limit of at least ₹50,000, held for at least 6 months; no income documents are needed because approval is based on that card. Applicants without a credit history are not accepted. Approval is decided by YES Bank.",
    forexFee: "Check the current YES Bank fee schedule before international use.",
    loungeAccess: "No lounge benefit is listed in the current offer summary.",
    description: "A lifetime-free YES Bank RuPay card with POPcoin rewards on online spends and POP UPI payments, redeemable for partner vouchers.",
    affiliateUrl: "https://bitli.in/HlfWwRE",
    isLifetimeFree: true
  },
  {
    slug: "roarbank-rupay",
    name: "RoarBank RuPay Credit Card",
    issuer: "Unity Small Finance Bank",
    bank: "Unity Small Finance Bank",
    category: "Cashback",
    categories: ["cashback"],
    networks: ["RuPay"],
    annualFeeInr: 0,
    joiningFeeInr: 0,
    bestFor: "Cashback on categories you choose, plus UPI payments",
    annualFee: "No joining or annual fee",
    joiningFee: "No joining fee",
    renewalWaiver: "No annual/renewal fee.",
    reward: "Up to 20% cashback on 2 categories you choose each month (you can change them monthly). Cashback is credited directly and can be used to pay your bill. Category caps are not listed in the current offer summary.",
    welcomeBenefit: "No separate welcome benefit is listed in the current offer summary.",
    keyBenefits: [
      "Lifetime free, with no joining or renewal fee.",
      "Up to 20% cashback on 2 categories you choose, changeable every month.",
      "2-in-1 setup combining a savings account, a RuPay credit card and UPI payments.",
      "A virtual card is issued once approved, with a credit limit of up to ₹3 lakh and up to 62 days of interest-free credit.",
      "Up to 7% interest per year on the savings account.",
      "Cashback is credited directly and can be used to pay your card bill.",
      "Convert purchases into EMIs in the app."
    ],
    eligibility: "Applicants aged 21–65, either salaried with a minimum income of ₹25,000 per month or self-employed with an ITR above ₹3 lakh a year, and a credit score of 700 or more. Applicants without a credit history are not accepted. Approval is decided by Unity Small Finance Bank.",
    forexFee: "Check the current RoarBank fee schedule before international use.",
    loungeAccess: "No lounge benefit is listed in the current offer summary.",
    description: "A lifetime-free RuPay credit card from RoarBank by Unity Small Finance Bank, combining a savings account, UPI payments and cashback on categories you pick.",
    affiliateUrl: "https://bitli.in/mRJ6gIB",
    isLifetimeFree: true
  }
];

export const getCard = (slug: string) => cards.find((card) => card.slug === slug);

export const getCardsByCategory = (slug: CategorySlug) => cards.filter((card) => card.categories.includes(slug));

export const getCardsByBank = (bankName: string) => cards.filter((card) => card.bank === bankName);

/** Banks that currently have at least one card listed. */
export const banksWithCards = () => banks.filter((bank) => getCardsByBank(bank.name).length > 0);

export const formatNetworks = (card: CreditCard) => card.networks?.join(" / ") ?? "";
