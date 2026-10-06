import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCardsByCategory } from "@/lib/cards";
import { categories, getCategory } from "@/lib/categories";

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? { title: category.name, description: category.intro } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const matching = getCardsByCategory(category.slug);

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
