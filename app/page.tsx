import Link from "next/link";
import { cards } from "@/lib/cards";

const categories = [
  { title: "Cashback", text: "For everyday spending and online purchases", icon: "₹", href: "/categories/cashback" },
  { title: "Travel", text: "For miles, travel rewards and lounge benefits", icon: "✈", href: "/categories/travel" },
  { title: "Shopping", text: "For shopping rewards and partner benefits", icon: "▣", href: "/categories/shopping" },
  { title: "Fuel", text: "For fuel spending and commuting", icon: "⛽", href: "/categories/fuel" },
];

const banks = [
  { name: "HDFC Bank", href: "/banks/hdfc-bank" },
  { name: "SBI Card", href: "/banks/sbi-card" },
  { name: "ICICI Bank", href: "/banks/icici-bank" },
  { name: "Axis Bank", href: "/banks/axis-bank" }
];

export default function Home() {
  const featured = cards[0];

  return (
    <>
      <section className="affiliate-hero">
        <div className="container affiliate-hero-grid">
          <div>
            <span className="affiliate-eyebrow">CREDIT CARDS · INDIA</span>
            <h1>Find a credit card that fits your <span>spending needs.</span></h1>
            <p>Explore card features, fees and benefits in simple language, then visit the relevant application page when you are ready.</p>
            <div className="hero-cta-row">
              <Link href="/credit-cards" className="primary-cta">Explore credit cards</Link>
              <Link href="/compare" className="secondary-cta">Compare cards</Link>
            </div>
            <div className="hero-points">
              <span>✓ Clear fee information</span>
              <span>✓ Easy-to-read benefits</span>
              <span>✓ Issuer terms matter</span>
            </div>
          </div>

          {featured && (
            <div className="offer-hero-card">
              <div className="offer-label">FEATURED CARD</div>
              <div className="offer-card-art">
                <span>{featured.bank}</span><b>VISA</b>
              </div>
              <div className="offer-card-content">
                <small>{featured.category}</small>
                <h2>{featured.name}</h2>
                <p>{featured.description}</p>
                <div className="offer-highlight">
                  <span>Annual fee</span><strong>{featured.annualFee}</strong>
                </div>
                <div className="hero-card-actions">
                  <Link href={"/credit-cards/" + featured.slug} className="apply-cta">Check eligibility & apply →</Link>
                  <Link href={"/credit-cards/" + featured.slug} className="hero-details">View card details</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <div><b>01</b><span><strong>Understand the card</strong><small>Fees, rewards and key features</small></span></div>
          <div><b>02</b><span><strong>Review eligibility</strong><small>Requirements can vary by issuer</small></span></div>
          <div><b>03</b><span><strong>Apply through the offer</strong><small>Application decisions are made by the issuer</small></span></div>
        </div>
      </section>

      <section className="category-strip">
        <div className="container">
          <div className="home-section-head compact">
            <div><span className="home-label">CHOOSE BY NEED</span><h2>What are you looking for?</h2></div>
          </div>
          <div className="benefit-grid">
            {categories.map((item) => (
              <Link href="/credit-cards" className="benefit-item" key={item.title} href={item.href}>
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
            <div>
              <span className="home-label">EXPLORE CARDS</span>
              <h2>Credit cards you can explore</h2>
              <p>Review the details before deciding whether to apply.</p>
            </div>
            <Link href="/credit-cards">View all cards →</Link>
          </div>

          <div className="affiliate-card-grid">
            {cards.map((card, index) => (
              <article className="affiliate-card" key={card.slug}>
                <div className="affiliate-card-head">
                  <div className={"bank-card bank-" + index}><span>{card.bank}</span><b>VISA</b></div>
                  {index === 0 && <span className="featured-tag">FEATURED</span>}
                </div>
                <div className="affiliate-bank">{card.bank} · {card.category}</div>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <div className="offer-stats">
                  <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
                  <div><small>Joining fee</small><strong>{card.joiningFee}</strong></div>
                </div>
                <Link href={"/credit-cards/" + card.slug} className="apply-button">Check eligibility & apply</Link>
                <Link href={"/credit-cards/" + card.slug} className="details-link">View full card details →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bank-section">
        <div className="container">
          <div className="home-section-head">
            <div><span className="home-label">EXPLORE BY ISSUER</span><h2>Credit cards by bank</h2><p>Browse cards associated with popular issuers.</p></div>
            <Link href="/credit-cards">See all →</Link>
          </div>
          <div className="bank-grid">
            {banks.map((bank) => (
              <Link href={bank.href} className="bank-link" key={bank.name}>
                <span>{bank.name.slice(0, 2).toUpperCase()}</span><strong>{bank.name}</strong><b>›</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="affiliate-guide">
        <div className="container guide-layout">
          <div>
            <span className="home-label">BEFORE YOU APPLY</span>
            <h2>Take a minute to understand the card.</h2>
            <p>Our guides explain common credit-card fees, rewards, eligibility and application considerations in straightforward language.</p>
          </div>
          <div className="guide-links">
            <Link href="/guides"><strong>Read credit-card guides</strong><small>Understand fees, rewards and terminology</small><b>→</b></Link>
            <Link href="/compare"><strong>Compare card details</strong><small>Review important features side by side</small><b>→</b></Link>
          </div>
        </div>
      </section>

      <section className="affiliate-disclosure">
        <div className="container">
          <strong>Affiliate & information disclosure</strong>
          <p>Some links may be affiliate links. We may receive compensation if you apply through certain links. Compensation does not determine issuer approval, and card fees, eligibility, rewards and terms can change. Always verify the current terms on the issuer or application page before applying.</p>
        </div>
      </section>
    </>
  );
}
