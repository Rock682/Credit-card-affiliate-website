"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cards } from "@/lib/cards";
import { categories, type CategorySlug } from "@/lib/categories";

const options = categories.map((category) => ({ key: category.slug, label: category.label }));

export default function FindMyCard() {
  const [goal, setGoal] = useState<CategorySlug>("cashback");
  const [fee, setFee] = useState("any");
  const [priority, setPriority] = useState("simple");

  const { matches, others } = useMemo(() => {
    const scored = cards
      .map((card) => {
        const matchesGoal = card.categories.includes(goal);
        let score = matchesGoal ? 4 : 0;

        if (fee === "free" && card.annualFeeInr === 0) score += 3;
        if (fee === "low" && card.annualFeeInr <= 1000) score += 2;

        if (priority === "rewards" && (card.categories.includes("cashback") || card.categories.includes("shopping"))) score += 2;
        if (priority === "travel" && card.categories.includes("travel")) score += 2;
        if (priority === "simple" && card.annualFeeInr === 0) score += 2;

        return { card, score, matchesGoal };
      })
      .sort((a, b) => b.score - a.score);

    return {
      matches: scored.filter((item) => item.matchesGoal),
      others: scored.filter((item) => !item.matchesGoal)
    };
  }, [goal, fee, priority]);

  const goalLabel = options.find((item) => item.key === goal)?.label.toLowerCase();

  return (
    <div className="finder-layout">
      <div className="finder-form">
        <div>
          <label>What is your main goal?</label>
          <div className="finder-options">
            {options.map((item) => (
              <button type="button" className={goal === item.key ? "finder-option active" : "finder-option"} onClick={() => setGoal(item.key)} key={item.key}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label>What fee preference do you have?</label>
          <select value={fee} onChange={(e) => setFee(e.target.value)}>
            <option value="any">I&apos;m open to fees</option>
            <option value="free">I prefer lifetime-free</option>
            <option value="low">I prefer a lower annual fee</option>
          </select>
        </div>

        <div>
          <label>What matters most after the fee?</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="simple">Simple, low-maintenance rewards</option>
            <option value="rewards">Rewards / cashback</option>
            <option value="travel">Travel benefits</option>
          </select>
        </div>

        <p className="finder-note">This is an educational filter, not a financial recommendation. Issuer eligibility and approval are separate.</p>
      </div>

      <div className="finder-results">
        <div className="finder-result-head">
          <div><span className="home-label">MATCHES</span><h2>Cards to explore</h2></div>
          <span>{matches.length} matching</span>
        </div>
        {matches.length === 0 && (
          <p className="finder-note">No card listed on this site is focused on {goalLabel} yet. The cards below may still be worth comparing.</p>
        )}
        {[...matches, ...others].map(({ card, matchesGoal }, index) => (
          <article className="finder-result" key={card.slug}>
            <div>
              <small>{matchesGoal ? (index === 0 ? "Closest match" : "Also matches") : "Other card"} · {card.bank}</small>
              <h3>{card.name}</h3>
              <p>{card.bestFor} · {card.annualFee}</p>
            </div>
            <Link href={"/credit-cards/" + card.slug} className="apply-button">View details →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
