import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Credit Card Guides",
  description: "Practical guides explaining credit-card fees, cashback, travel rewards, eligibility and applications in India."
};

export default function Guides() {
  return (
    <section className="container" style={{ padding: "48px 0 70px", maxWidth: 1000 }}>
      <span className="home-label">LEARN BEFORE YOU APPLY</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>Credit Card Guides</h1>
      <p className="muted" style={{ maxWidth: 760, lineHeight: 1.7 }}>
        Straightforward explanations of fees, rewards, eligibility and application considerations.
      </p>
      <div className="guide-links" style={{ marginTop: 28 }}>
        {guides.map((guide) => (
          <Link href={"/guides/" + guide.slug} key={guide.slug}>
            <strong>{guide.shortTitle}</strong>
            <small>{guide.summary}</small>
            <b>→</b>
          </Link>
        ))}
      </div>
    </section>
  );
}
