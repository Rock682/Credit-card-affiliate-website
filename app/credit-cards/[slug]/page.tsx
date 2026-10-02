import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cards, getCard } from "@/lib/cards";

export function generateStaticParams() {
  return cards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card) return {};

  return {
    title: card.name,
    description: card.description,
    alternates: { canonical: "/credit-cards/" + card.slug }
  };
}

export default async function CardPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = getCard(slug);

  if (!card) notFound();

  const faqItems = [
    { q: "What is the annual fee?", a: card.annualFee },
    { q: "Who is this card best for?", a: card.bestFor + "." },
    { q: "How do I apply?", a: "Use the application button to review the current issuer offer. Approval is decided by the issuer." },
    { q: "Can the card terms change?", a: "Yes. Fees, rewards, eligibility and benefits can change. Check the issuer source before applying." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: card.name,
    description: card.description,
    provider: {
      "@type": "Organization",
      name: card.issuer
    },
    url: card.applicationUrl
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  const applyUrl = card.affiliateUrl || card.applicationUrl;
  const isAffiliate = Boolean(card.affiliateUrl);

  return (
    <section className="card-page">
      <div className="container">
        <div className="card-page-grid">
          <article className="card-detail-main">
            <div className="card-breadcrumb">
              <a href="/credit-cards">Credit Cards</a> / {card.category}
            </div>

            <div className="card-detail-header">
              <div>
                <span className="card-kicker">{card.bank} · {card.category}</span>
                <h1>{card.name}</h1>
                <p className="card-lead">{card.description}</p>
                <span className="verified-pill">✓ Verified {card.lastVerified}</span>
              </div>
            </div>

            <div className="card-summary-grid">
              <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
              <div><small>Joining fee</small><strong>{card.joiningFee}</strong></div>
              <div><small>Best for</small><strong>{card.bestFor}</strong></div>
            </div>

            <section className="detail-section">
              <h2>Key benefits</h2>
              <div className="benefit-list">
                {card.keyBenefits.map((benefit) => (
                  <div className="detail-benefit" key={benefit}>
                    <span>✓</span><p>{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Fees, rewards & access</h2>
              <div className="detail-table">
                <div><span>Rewards</span><strong>{card.reward}</strong></div>
                <div><span>Renewal fee waiver</span><strong>{card.renewalWaiver}</strong></div>
                <div><span>Lounge access</span><strong>{card.loungeAccess}</strong></div>
                <div><span>Foreign transaction note</span><strong>{card.forexFee}</strong></div>
              </div>
            </section>

            <section className="detail-section">
              <h2>Eligibility</h2>
              <p>{card.eligibility}</p>
            </section>


            <section className="detail-section">
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                {faqItems.map((item) => (
                  <details className="faq-item" key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="detail-source-box">
              <div>
                <strong>Source & verification</strong>
                <p>Key facts on this page were checked against the issuer information on {card.lastVerified}. Card terms can change, so confirm the current offer before applying.</p>
              </div>
              <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer">View issuer source ↗</a>
            </section>

            <section className="detail-disclosure">
              <strong>Affiliate disclosure</strong>
              <p>
                {isAffiliate
                  ? "This page contains an affiliate application link. We may receive compensation if you apply through it."
                  : "The application link currently goes directly to the issuer. Affiliate tracking can be added when an approved affiliate link is available."}
                {" "}Compensation does not determine issuer approval or the terms offered to you.
              </p>
            </section>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
          </article>

          <aside className="card-apply-panel">
            <div className="apply-panel-label">READY TO CHECK?</div>
            <h2>{card.isLifetimeFree ? "Check the current offer" : "Check eligibility & offer"}</h2>
            <p>Review the issuer's current terms before submitting an application.</p>
            <a
              className="apply-button large"
              href={applyUrl}
              target="_blank"
              rel={isAffiliate ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer"}
            >
              {isAffiliate ? "Apply through this offer →" : "Check issuer offer →"}
            </a>
            <a className="panel-secondary" href={card.sourceUrl} target="_blank" rel="noopener noreferrer">
              Verify terms on issuer site
            </a>
            <div className="panel-note">Approval is decided by the card issuer.</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
