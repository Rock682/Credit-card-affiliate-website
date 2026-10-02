import type { Metadata } from "next";
import Link from "next/link";
import { cards } from "@/lib/cards";

export const metadata: Metadata = {
  title: "Credit Cards in India",
  description: "Explore credit cards in India by spending need, fees, cashback, travel benefits and issuer."
};

export default async function Cards({
  searchParams
}: {
  searchParams: Promise<{ q?: string; category?: string; issuer?: string; fee?: string }>;
}) {
  const params = await searchParams;
  const q = (params.q || "").trim().toLowerCase();
  const category = params.category || "all";
  const issuer = params.issuer || "all";
  const fee = params.fee || "all";

  const categories = Array.from(new Set(cards.map((card) => card.category))).sort();
  const issuers = Array.from(new Set(cards.map((card) => card.issuer))).sort();

  const filtered = cards.filter((card) => {
    const searchable = (card.name + " " + card.issuer + " " + card.category + " " + card.bestFor).toLowerCase();
    return (!q || searchable.includes(q))
      && (category === "all" || card.category === category)
      && (issuer === "all" || card.issuer === issuer)
      && (fee === "all" || (fee === "free" ? card.isLifetimeFree : !card.isLifetimeFree));
  });

  return (
    <section className="container" style={{ padding: "48px 0 70px" }}>
      <div className="home-section-head">
        <div>
          <span className="home-label">CREDIT CARDS · INDIA</span>
          <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>Explore credit cards</h1>
          <p className="muted">Search and filter cards by issuer, category and fee preference.</p>
        </div>
        <Link href="/find-my-card" className="secondary-cta" style={{ color: "var(--brand)", border: "1px solid var(--border)", background: "#fff" }}>
          Find my card →
        </Link>
      </div>

      <form className="card-filter-bar" method="get">
        <input name="q" defaultValue={params.q || ""} placeholder="Search card, issuer or use case..." aria-label="Search cards" />
        <select name="category" defaultValue={category} aria-label="Filter by category">
          <option value="all">All categories</option>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select name="issuer" defaultValue={issuer} aria-label="Filter by issuer">
          <option value="all">All issuers</option>
          {issuers.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select name="fee" defaultValue={fee} aria-label="Filter by fee">
          <option value="all">Any fee</option>
          <option value="free">Lifetime free</option>
          <option value="paid">Paid annual fee</option>
        </select>
        <button type="submit" className="apply-button">Filter cards</button>
        <Link href="/credit-cards" className="filter-reset">Reset</Link>
      </form>

      <div className="filter-count">{filtered.length} card{filtered.length === 1 ? "" : "s"} shown</div>

      {filtered.length ? (
        <div className="affiliate-card-grid">
          {filtered.map((card) => (
            <article className="affiliate-card" key={card.slug}>
              <div className="affiliate-card-head">
                <div className="bank-card"><span>{card.bank}</span><b>VISA</b></div>
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
      ) : (
        <div className="empty-filter"><strong>No cards match those filters.</strong><p>Try removing a filter or changing your search.</p></div>
      )}

      <div className="affiliate-disclosure" style={{ marginTop: 34, border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
        <strong>Important</strong>
        <p>Card fees, rewards, eligibility and other terms can change. We show a last-verified date and issuer source on individual card pages. Always confirm the current terms on the issuer website before applying.</p>
      </div>
    </section>
  );
}
