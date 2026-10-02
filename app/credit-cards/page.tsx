import type { Metadata } from "next";
import Link from "next/link";
import { cards } from "@/lib/cards";

export const metadata: Metadata = {
  title: "Credit Cards in India",
  description: "Explore credit cards in India by spending need, fees, cashback, travel benefits and issuer."
};

export default function Cards() {
  return (
    <section className="container" style={{ padding: "48px 0 70px" }}>
      <div className="home-section-head">
        <div>
          <span className="home-label">CREDIT CARDS · INDIA</span>
          <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>Explore credit cards</h1>
          <p className="muted">Review fees, rewards, benefits and issuer terms before you apply.</p>
        </div>
        <Link href="/compare" className="secondary-cta" style={{ color: "var(--brand)", border: "1px solid var(--border)", background: "#fff" }}>
          Compare cards →
        </Link>
      </div>

      <div className="affiliate-card-grid">
        {cards.map((card) => (
          <article className="affiliate-card" key={card.slug}>
            <div className="affiliate-card-head">
              <div className="bank-card">
                <span>{card.bank}</span><b>VISA</b>
              </div>
              {card.isLifetimeFree && <span className="featured-tag">LIFETIME FREE</span>}
            </div>
            <div className="affiliate-bank">{card.bank} · {card.category}</div>
            <h2 style={{ fontSize: "18px", margin: "6px 0" }}>{card.name}</h2>
            <p>{card.description}</p>
            <div className="offer-stats">
              <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
              <div><small>Best for</small><strong>{card.bestFor}</strong></div>
            </div>
            <Link href={"/credit-cards/" + card.slug} className="apply-button">View card & application →</Link>
            <Link href={"/credit-cards/" + card.slug} className="details-link">See fees, benefits & verification</Link>
          </article>
        ))}
      </div>

      <div className="affiliate-disclosure" style={{ marginTop: 34, border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
        <strong>Important</strong>
        <p>Card fees, rewards, eligibility and other terms can change. We show a last-verified date and issuer source on individual card pages. Always confirm the current terms on the issuer website before applying.</p>
      </div>
    </section>
  );
}
