import type { Metadata } from "next";
import Link from "next/link";

const guides = {
  "how-credit-card-fees-work": {
    title: "How credit card fees work in India",
    intro: "Joining fees, annual fees, renewal waivers and taxes can change the effective cost of a card.",
    sections: [
      ["Joining fee", "A joining fee may be charged when a card is issued. Check whether a welcome benefit offsets it and whether taxes apply."],
      ["Annual or renewal fee", "This is the recurring fee for keeping a card. Some cards waive or reverse it after a stated annual spending threshold."],
      ["Other charges", "Cash advances, foreign transactions, late payments and other services can carry separate charges. Review the issuer's current schedule."],
      ["Before applying", "Compare the recurring cost with the benefits you are realistically likely to use rather than relying only on a headline reward rate."]
    ]
  },
  "cashback-credit-cards-guide": {
    title: "How to evaluate cashback credit cards",
    intro: "A headline cashback percentage does not necessarily apply to every transaction.",
    sections: [
      ["Check eligible categories", "Issuers may distinguish online, offline, partner, utility, fuel or other transaction types."],
      ["Check caps", "A monthly or statement-cycle cashback cap can materially change the value for higher spenders."],
      ["Check exclusions", "Certain transactions may earn reduced cashback or no cashback under the issuer's terms."],
      ["Calculate your actual value", "Estimate cashback using your own monthly spending pattern and compare it with the annual fee."]
    ]
  },
  "travel-credit-cards-guide": {
    title: "How to evaluate travel credit cards",
    intro: "Travel cards can combine reward points, lounge access and travel-related benefits, but conditions matter.",
    sections: [
      ["Reward structure", "Check how many points you earn, which categories qualify and whether there are monthly or annual caps."],
      ["Lounge access", "Look for spend requirements, visit limits and domestic versus international access conditions."],
      ["Redemption", "Check transfer partners, redemption values, minimum points and expiry rules before assigning a value to rewards."],
      ["International spending", "Review foreign-currency charges and dynamic currency conversion terms before using a card abroad."]
    ]
  }
} as const;

type GuideSlug = keyof typeof guides;

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];
  return guide ? { title: guide.title, description: guide.intro } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];
  if (!guide) return null;

  return (
    <section className="container" style={{ padding: "48px 0 70px", maxWidth: 900 }}>
      <Link href="/guides" className="details-link" style={{ textAlign: "left", paddingTop: 0 }}>← All guides</Link>
      <span className="home-label">CREDIT CARD GUIDE</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>{guide.title}</h1>
      <p className="card-lead">{guide.intro}</p>
      <div className="guide-article">
        {guide.sections.map(([title, text]) => (
          <section className="detail-section" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
      <div className="affiliate-disclosure" style={{ marginTop: 28, border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
        <strong>Important</strong>
        <p>Financial products and their terms can change. Use this guide for general education and verify current terms with the issuer before applying.</p>
      </div>
    </section>
  );
}
