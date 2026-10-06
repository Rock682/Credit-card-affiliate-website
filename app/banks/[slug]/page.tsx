import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { banks, getBank } from "@/lib/banks";
import { getCardsByBank } from "@/lib/cards";

export async function generateStaticParams() {
  return banks.map((bank) => ({ slug: bank.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bank = getBank(slug);
  return bank ? {
    title: bank.name + " Credit Cards",
    description: "Explore " + bank.name + " credit cards, fees, rewards and key benefits."
  } : {};
}

export default async function BankPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bank = getBank(slug);
  if (!bank) notFound();

  const matching = getCardsByBank(bank.name);

  return (
    <section className="container" style={{ padding: "48px 0 70px" }}>
      <span className="home-label">EXPLORE BY ISSUER</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>{bank.name} Credit Cards</h1>
      <p className="muted" style={{ maxWidth: 760, lineHeight: 1.7 }}>
        Browse the {bank.name} cards currently covered on this website. Review the individual card page and verify current issuer terms before applying.
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
