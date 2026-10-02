import Link from "next/link";
import { cards } from "@/lib/cards";

const categories = [
  ["Cashback", "Maximise everyday spending", "↗"],
  ["Travel", "Miles, lounge & travel rewards", "✈"],
  ["Shopping", "Online shopping benefits", "▣"],
  ["Fuel", "Save on fuel spends", "◉"],
];

export default function Home() {
  return (
    <>
      <section className="portal-hero">
        <div className="container portal-hero-grid">
          <div className="portal-copy">
            <div className="eyebrow">INDIA'S CREDIT CARD GUIDE</div>
            <h1>Compare credit cards.<br /><span>Choose with confidence.</span></h1>
            <p>Compare fees, rewards, cashback and benefits in one place before you apply.</p>

            <div className="hero-search">
              <span>⌕</span>
              <span className="search-placeholder">What are you looking for?</span>
              <Link href="/credit-cards" className="search-button">Search</Link>
            </div>

            <div className="quick-links">
              <span>Popular:</span>
              <Link href="/credit-cards">Cashback cards</Link>
              <Link href="/credit-cards">Travel cards</Link>
              <Link href="/compare">Compare cards</Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-header">
              <span>Popular right now</span>
              <Link href="/credit-cards">View all</Link>
            </div>
            {cards.slice(0, 2).map((card, index) => (
              <Link href={"/credit-cards/" + card.slug} className="mini-card" key={card.slug}>
                <div className={"mini-card-art art-" + index}>
                  <span>{card.bank.split(" ")[0]}</span>
                  <b>VISA</b>
                </div>
                <div className="mini-card-info">
                  <strong>{card.name}</strong>
                  <span>{card.category}</span>
                  <small>{card.annualFee}</small>
                </div>
                <span className="mini-arrow">›</span>
              </Link>
            ))}
            <Link href="/compare" className="compare-box">
              <span>⇄</span>
              <div><strong>Compare multiple cards</strong><small>See fees and benefits side by side</small></div>
              <b>›</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-items">
          <span><b>✓</b> Fee information</span>
          <span><b>✓</b> Reward details</span>
          <span><b>✓</b> Comparison tools</span>
          <span><b>✓</b> Helpful guides</span>
        </div>
      </section>

      <section className="portal-section">
        <div className="container">
          <div className="portal-heading">
            <div><span className="section-label">BROWSE BY NEED</span><h2>Find a card for your lifestyle</h2></div>
            <Link href="/credit-cards">See all cards →</Link>
          </div>
          <div className="need-grid">
            {categories.map(([title, text, icon]) => (
              <Link href="/credit-cards" className="need-card" key={title}>
                <span className="need-icon">{icon}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="need-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="container">
          <div className="portal-heading">
            <div><span className="section-label">FEATURED CARDS</span><h2>Explore popular credit cards</h2></div>
            <Link href="/credit-cards">View all →</Link>
          </div>
          <div className="card-showcase">
            {cards.map((card) => (
              <article className="showcase-card" key={card.slug}>
                <div className="showcase-top">
                  <div className="showcase-art"><span>{card.bank.split(" ")[0]}</span><b>VISA</b></div>
                  <span className="category-tag">{card.category}</span>
                </div>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <div className="showcase-data">
                  <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
                  <div><small>Joining fee</small><strong>{card.joiningFee}</strong></div>
                </div>
                <Link href={"/credit-cards/" + card.slug} className="outline-button">View card details</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="decision-section">
        <div className="container decision-grid">
          <div>
            <span className="section-label">BEFORE YOU APPLY</span>
            <h2>Understand the card before you choose it.</h2>
            <p>Use our guides and comparisons to check fees, rewards, eligibility and important terms.</p>
          </div>
          <div className="decision-links">
            <Link href="/compare"><b>⇄</b><span><strong>Compare cards</strong><small>Put cards side by side</small></span>→</Link>
            <Link href="/guides"><b>?</b><span><strong>Read our guides</strong><small>Learn how credit cards work</small></span>→</Link>
          </div>
        </div>
      </section>
    </>
  );
}
