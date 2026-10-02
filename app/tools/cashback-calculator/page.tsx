"use client";

import { useMemo, useState } from "react";

export default function CashbackCalculator() {
  const [online, setOnline] = useState(20000);
  const [offline, setOffline] = useState(10000);
  const [onlineRate, setOnlineRate] = useState(5);
  const [offlineRate, setOfflineRate] = useState(1);

  const result = useMemo(() => {
    const onlineCashback = online * (onlineRate / 100);
    const offlineCashback = offline * (offlineRate / 100);
    return { onlineCashback, offlineCashback, total: onlineCashback + offlineCashback };
  }, [online, offline, onlineRate, offlineRate]);

  return (
    <section className="container calculator-page">
      <span className="home-label">FREE TOOL</span>
      <h1>Cashback calculator</h1>
      <p className="muted">Estimate potential cashback from your monthly spending. This is a simple estimate and does not account for issuer caps or excluded transactions.</p>

      <div className="calculator-layout">
        <div className="calculator-form">
          <label>Monthly online spending (₹)
            <input type="number" min="0" value={online} onChange={(e) => setOnline(Number(e.target.value))} />
          </label>
          <label>Online cashback rate (%)
            <input type="number" min="0" step="0.1" value={onlineRate} onChange={(e) => setOnlineRate(Number(e.target.value))} />
          </label>
          <label>Monthly offline spending (₹)
            <input type="number" min="0" value={offline} onChange={(e) => setOffline(Number(e.target.value))} />
          </label>
          <label>Offline cashback rate (%)
            <input type="number" min="0" step="0.1" value={offlineRate} onChange={(e) => setOfflineRate(Number(e.target.value))} />
          </label>
        </div>

        <div className="calculator-result">
          <span>Estimated monthly cashback</span>
          <strong>₹{result.total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</strong>
          <div><small>Online</small><b>₹{result.onlineCashback.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</b></div>
          <div><small>Offline</small><b>₹{result.offlineCashback.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</b></div>
          <p>Actual rewards depend on the card's current terms, caps, exclusions and eligible transaction categories.</p>
        </div>
      </div>
    </section>
  );
}
