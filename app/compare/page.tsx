import type { Metadata } from "next";
import Link from "next/link";
import { cards } from "@/lib/cards";

export const metadata: Metadata = {
  title: "Compare Credit Cards",
  description: "Compare selected credit cards by fees, rewards, benefits and best-use cases."
};

export default function Compare() {
  return (
    <section className="container" style={{ padding: "48px 0 70px" }}>
      <span className="home-label">SIDE-BY-SIDE</span>
      <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "8px 0" }}>Compare credit cards</h1>
      <p className="muted">Use the table to identify differences, then open the card page for verified details and issuer terms.</p>

      <div style={{ overflowX: "auto", marginTop: 28 }}>
        <table className="comparison-table">
          <thead><tr>
            <th>Card</th><th>Issuer</th><th>Annual fee</th><th>Best for</th><th>Rewards</th><th></th>
          </tr></thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card.slug}>
                <td><strong>{card.name}</strong></td>
                <td>{card.issuer}</td>
                <td>{card.annualFee}</td>
                <td>{card.bestFor}</td>
                <td>{card.reward}</td>
                <td><Link href={"/credit-cards/" + card.slug} className="details-link">Details →</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="affiliate-disclosure" style={{ marginTop: 24, border: "1px solid var(--border)", borderRadius: 12, padding: 18 }}>
        <strong>How to use this comparison</strong>
        <p>There is no single card that suits everyone. Compare the features against your own spending, then verify current issuer terms before applying.</p>
      </div>
    </section>
  );
}
