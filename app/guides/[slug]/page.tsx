import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return guide ? { title: guide.title, description: guide.intro } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <section className="container" style={{ padding: "48px 0 70px", maxWidth: 900 }}>
      <Link href="/guides" className="details-link" style={{ textAlign: "left", paddingTop: 0 }}>← All guides</Link>
      <span className="home-label">CREDIT CARD GUIDE</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>{guide.title}</h1>
      <p className="card-lead">{guide.intro}</p>
      <div className="guide-article">
        {guide.sections.map(({ heading, body }) => (
          <section className="detail-section" key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
      <div className="affiliate-disclosure" style={{ marginTop: 28, border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
        <strong>Important</strong>
        <p>Financial products and their terms can change. Use this guide for general education and verify current terms with the issuer before applying.</p>
      </div>
    </section>
  );
}
