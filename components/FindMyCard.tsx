"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cards } from "@/lib/cards";

const options = [
  { key: "cashback", label: "Cashback" },
  { key: "travel", label: "Travel" },
  { key: "shopping", label: "Shopping" },
  { key: "fuel", label: "Fuel" }
];

export default function FindMyCard() {
  const [goal, setGoal] = useState("cashback");
  const [fee, setFee] = useState("any");
  const [priority, setPriority] = useState("simple");

  const matches = useMemo(() => {
    return cards
      .map((card) => {
        let score = 0;
        const text = (card.category + " " + card.bestFor + " " + card.reward).toLowerCase();

        if (goal === "cashback" && text.includes("cashback")) score += 4;
        if (goal === "travel" && text.includes("travel")) score += 4;
        if (goal === "shopping" && text.includes("shopping")) score += 4;
        if (goal === "fuel" && text.includes("fuel")) score += 4;

        if (fee === "free" && card.isLifetimeFree) score += 3;
        if (fee === "low" && !card.isLifetimeFree && card.annualFee.includes("999")) score += 2;

        if (priority === "rewards" && /reward|cashback/i.test(card.reward)) score += 2;
        if (priority === "travel" && /travel|lounge/i.test(card.category + card.loungeAccess)) score += 2;
        if (priority === "simple" && card.isLifetimeFree) score += 2;

        return { card, score };
      })
      .sort((a, b) => b.score - a.score);
  }, [goal, fee, priority]);

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
            <option value="any">I'm open to fees</option>
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
          <span>{matches.length} listed</span>
        </div>
        {matches.map(({ card, score }, index) => (
          <article className="finder-result" key={card.slug}>
            <div>
              <small>{index === 0 ? "Closest match" : "Also consider"} · {card.bank}</small>
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
