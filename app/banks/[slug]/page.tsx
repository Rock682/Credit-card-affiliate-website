import type { Metadata } from "next";
import Link from "next/link";
import { cards } from "@/lib/cards";

const banks = {
  "hdfc-bank": "HDFC Bank",
  "sbi-card": "SBI Card",
  "icici-bank": "ICICI Bank",
  "axis-bank": "Axis Bank"
} as const;

export async function generateStaticParams() {
  return Object.keys(banks).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bank = banks[slug as keyof typeof banks];
  return bank ? {
    title: bank + " Credit Cards",
    description: "Explore " + bank + " credit cards, fees, rewards and key benefits."
  } : {};
}

export default async function BankPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bank = banks[slug as keyof typeof banks];
  if (!bank) return null;

  const matching = cards.filter((card) => card.bank === bank);

  return (
    <section className="container" style={{ padding: "48px 0 70px" }}>
      <span className="home-label">EXPLORE BY ISSUER</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>{bank} Credit Cards</h1>
      <p className="muted" style={{ maxWidth: 760, lineHeight: 1.7 }}>
        Browse the {bank} cards currently covered on this website. Review the individual card page and verify current issuer terms before applying.
      </p>

      {matching.length ? (
        <div className="affiliate-card-grid" style={{ marginTop: 28 }}>
          {matching.map((card) => (
            <article className="affiliate-card" key={card.slug}>
              <div className="affiliate-bank">{card.category}</div>
              <h2 style={{ fontSize: 18 }}>{card.name}</h2>
              <p>{card.description}</p>
              <div className="offer-stats">
                <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
                <div><small>Best for</small><strong>{card.bestFor}</strong></div>
              </div>
              <Link href={"/credit-cards/" + card.slug} className="apply-button">View card details →</Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="affiliate-disclosure" style={{ marginTop: 28, border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
          <strong>No cards listed yet</strong>
          <p>We are expanding issuer coverage. Check the main credit-card directory for the cards currently available.</p>
          <Link href="/credit-cards" className="details-link">Browse all cards →</Link>
        </div>
      )}
    </section>
  );
}
