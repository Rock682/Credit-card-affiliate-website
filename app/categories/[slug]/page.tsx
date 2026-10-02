import type { Metadata } from "next";
import Link from "next/link";
import { cards } from "@/lib/cards";

const categories = {
  cashback: {
    name: "Cashback Credit Cards",
    intro: "Explore cards designed around cashback and everyday spending. Compare the fee, reward structure and important terms before applying.",
    description: "Cashback cards can be useful when a large part of your spending falls within eligible cashback categories. Always check exclusions, caps and statement-cycle rules."
  },
  travel: {
    name: "Travel Credit Cards",
    intro: "Explore travel-focused credit cards for rewards, airport benefits and travel-related spending.",
    description: "Travel benefits can include reward points, airline or hotel partnerships and lounge access. Eligibility, spend thresholds and redemption rules vary by issuer."
  },
  shopping: {
    name: "Shopping Credit Cards",
    intro: "Explore cards built around shopping rewards, partner offers and online purchases.",
    description: "Shopping rewards often depend on the merchant, payment method and offer terms. Check the issuer's current conditions before applying."
  },
  fuel: {
    name: "Fuel Credit Cards",
    intro: "Explore credit cards that can be relevant to fuel spending and commuting.",
    description: "Fuel cards may offer surcharge waivers or rewards subject to transaction ranges, monthly limits and eligible fuel stations."
  }
} as const;

type Slug = keyof typeof categories;

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug as Slug];
  return category ? { title: category.name, description: category.intro } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as Slug];
  if (!category) return null;

  const matching = cards.filter((card) => card.category.toLowerCase().includes(slug));

  return (
    <section className="container" style={{ padding: "48px 0 70px" }}>
      <span className="home-label">EXPLORE BY NEED</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>{category.name}</h1>
      <p className="muted" style={{ maxWidth: 780, lineHeight: 1.7 }}>{category.intro}</p>

      <div className="affiliate-disclosure" style={{ margin: "24px 0", border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
        <strong>What to check</strong>
        <p>{category.description}</p>
      </div>

      <h2 style={{ marginTop: 34 }}>Cards in this category</h2>
      {matching.length ? (
        <div className="affiliate-card-grid">
          {matching.map((card) => (
            <article className="affiliate-card" key={card.slug}>
              <div className="affiliate-bank">{card.bank} · {card.category}</div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <div className="offer-stats">
                <div><small>Annual fee</small><strong>{card.annualFee}</strong></div>
                <div><small>Best for</small><strong>{card.bestFor}</strong></div>
              </div>
              <Link href={"/credit-cards/" + card.slug} className="apply-button">View card & application →</Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="muted">No cards are currently listed in this category. We add cards only when their information can be reviewed and sourced.</p>
      )}
    </section>
  );
}
