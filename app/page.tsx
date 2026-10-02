import Link from "next/link";
import { cards } from "@/lib/cards";

const categories = [
  { icon: "↗", title: "Cashback Cards", text: "For everyday online and offline spending." },
  { icon: "✈", title: "Travel Cards", text: "Compare travel rewards, miles and benefits." },
  { icon: "▣", title: "Shopping Cards", text: "Cards built around shopping and brand rewards." },
  { icon: "★", title: "Premium Cards", text: "Explore lifestyle and premium benefits." },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">CREDIT CARDS IN INDIA</div>
            <h1>Find a credit card that fits the way you spend.</h1>
            <p className="hero-text">
              Compare cards by fees, rewards, cashback, travel benefits and more — all in one place.
            </p>
            <div className="hero-actions">
              <Link className="btn hero-btn" href="/credit-cards">Explore credit cards</Link>
              <Link className="text-link" href="/compare">Compare cards →</Link>
            </div>
            <div className="hero-trust">
              <span>✓ Clear fee information</span>
              <span>✓ Easy comparisons</span>
              <span>✓ Independent guides</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card hero-card-back">
              <span>PREMIUM</span><strong>•••• 4821</strong>
            </div>
            <div className="hero-card hero-card-front">
              <div className="card-top"><b>CardCompare</b><span>VISA</span></div>
              <div className="card-number">•••• •••• •••• 6248</div>
              <div className="card-bottom"><span>COMPARE</span><span>INDIA</span></div>
            </div>
            <div className="floating-stat"><strong>100+</strong><span>cards to explore</span></div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">START HERE</p>
              <h2>What type of card are you looking for?</h2>
            </div>
            <Link className="text-link" href="/credit-cards">View all cards →</Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link href="/credit-cards" className="category-card" key={category.title}>
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <span className="category-arrow">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">FEATURED</p>
              <h2>Cards worth comparing</h2>
              <p className="muted">Review fees and benefits before making an application decision.</p>
            </div>
            <Link className="text-link" href="/compare">Open comparison →</Link>
          </div>
          <div className="featured-grid">
            {cards.map((card) => (
              <article className="featured-card" key={card.slug}>
                <div className="featured-card-top">
                  <div className="bank-badge">{card.bank.slice(0, 2).toUpperCase()}</div>
                  <span className="pill">{card.category}</span>
                </div>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <div className="fee-row">
                  <div><span>Annual fee</span><strong>{card.annualFee}</strong></div>
                  <div><span>Joining fee</span><strong>{card.joiningFee}</strong></div>
                </div>
                <Link className="btn card-btn" href={"/credit-cards/" + card.slug}>View details</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-strip">
        <div className="container guide-grid">
          <div>
            <p className="section-kicker">MAKE AN INFORMED CHOICE</p>
            <h2>Not sure which card suits you?</h2>
            <p>Use our comparisons and guides to understand fees, rewards, eligibility and key benefits before applying.</p>
          </div>
          <div className="guide-actions">
            <Link className="btn" href="/compare">Compare cards</Link>
            <Link className="outline-btn" href="/guides">Read guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
