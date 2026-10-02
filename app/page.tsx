import Link from "next/link";
import { cards } from "@/lib/cards";

const categories = [
  { title: "Cashback", text: "Get more back on everyday spends", icon: "₹" },
  { title: "Travel", text: "Miles, lounge access & travel perks", icon: "✈" },
  { title: "Shopping", text: "Rewards for your online purchases", icon: "▣" },
  { title: "Fuel", text: "Save on fuel and daily commuting", icon: "⛽" },
];

const banks = ["HDFC Bank", "SBI Card", "ICICI Bank", "Axis Bank"];

export default function Home() {
  return (
    <>
      <section className="affiliate-hero">
        <div className="container affiliate-hero-grid">
          <div>
            <span className="affiliate-eyebrow">CREDIT CARD OFFERS · INDIA</span>
            <h1>Find your next credit card <span>and apply online.</span></h1>
            <p>Discover popular credit cards, current benefits and application links — all in one place.</p>
            <div className="hero-cta-row">
              <Link href="/credit-cards" className="primary-cta">Explore credit cards</Link>
              <Link href="/compare" className="secondary-cta">Compare cards</Link>
            </div>
            <div className="hero-points">
              <span>✓ Fees & benefits</span>
              <span>✓ Application links</span>
              <span>✓ Easy-to-read guides</span>
            </div>
          </div>
          <div className="offer-hero-card">
            <div className="offer-label">FEATURED OFFER</div>
            <div className="offer-card-art">
              <span>CardCompare</span><b>VISA</b>
            </div>
            <div className="offer-card-content">
              <small>Popular choice</small>
              <h2>{cards[0]?.name}</h2>
              <p>{cards[0]?.description}</p>
              <div className="offer-highlight">
                <span>Annual fee</span><strong>{cards[0]?.annualFee}</strong>
              </div>
              <Link href={"/credit-cards/" + cards[0]?.slug} className="apply-cta">View offer & apply →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="category-strip">
        <div className="container">
          <div className="home-section-head compact"><div><span className="home-label">SHOP BY BENEFIT</span><h2>What are you looking for?</h2></div></div>
          <div className="benefit-grid">
            {categories.map((item) => (
              <Link href="/credit-cards" className="benefit-item" key={item.title}>
                <span className="benefit-icon">{item.icon}</span>
                <div><strong>{item.title} cards</strong><small>{item.text}</small></div>
                <b>›</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="top-offers">
        <div className="container">
          <div className="home-section-head">
            <div><span className="home-label">TOP PICKS</span><h2>Popular credit card offers</h2><p>Explore cards and check the available application option.</p></div>
            <Link href="/credit-cards">View all cards →</Link>
          </div>
          <div className="affiliate-card-grid">
            {cards.map((card, index) => (
              <article className="affiliate-card" key={card.slug}>
                <div className="affiliate-card-head">
                  <div className={"bank-card bank-" + index}><span>{card.bank.split(" ")[0]}</span><b>VISA</b></div>
                  {index === 0 && <span className="featured-tag">FEATURED</span>}
                </div>
                <div className="affiliate-bank">{card.bank} · {card.category}</div>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <div className="offer-stats">
                  <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
                  <div><small>Joining fee</small><strong>{card.joiningFee}</strong></div>
                </div>
                <Link href={"/credit-cards/" + card.slug} className="apply-button">Check offer & apply</Link>
                <Link href={"/credit-cards/" + card.slug} className="details-link">View card details</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bank-section">
        <div className="container">
          <div className="home-section-head">
            <div><span className="home-label">BROWSE BY BANK</span><h2>Credit cards from popular banks</h2></div>
            <Link href="/credit-cards">See all →</Link>
          </div>
          <div className="bank-grid">
            {banks.map((bank) => <Link href="/credit-cards" className="bank-link" key={bank}><span>{bank.slice(0, 2).toUpperCase()}</span><strong>{bank}</strong><b>›</b></Link>)}
          </div>
        </div>
      </section>

      <section className="affiliate-guide">
        <div className="container guide-layout">
          <div><span className="home-label">MAKE THE RIGHT CHOICE</span><h2>Before you apply, know what you're getting.</h2><p>Read our guides to understand annual fees, rewards, eligibility, cashback and other important card features.</p></div>
          <div className="guide-links">
            <Link href="/guides"><strong>Credit card guides</strong><small>Learn how cards and rewards work</small><b>→</b></Link>
            <Link href="/compare"><strong>Compare cards</strong><small>Compare important card details</small><b>→</b></Link>
          </div>
        </div>
      </section>

      <section className="affiliate-disclosure">
        <div className="container"><strong>Affiliate disclosure</strong><p>Some links on this website may be affiliate links. If you apply through an affiliate link and are approved, we may receive compensation from the card issuer or partner. This does not change the information or terms offered by the issuer.</p></div>
      </section>
    </>
  );
}
