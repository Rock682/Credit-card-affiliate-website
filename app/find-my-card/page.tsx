import FindMyCard from "@/components/FindMyCard";

export const metadata = {
  title: "Find My Credit Card",
  description: "Answer a few questions and explore credit cards that match your spending needs."
};

export default function FindMyCardPage() {
  return (
    <section className="container" style={{ padding: "44px 0 70px" }}>
      <div className="finder-intro">
        <span className="home-label">CARD FINDER</span>
        <h1>Find a credit card for your spending</h1>
        <p>Tell us what matters most. We'll filter the cards currently listed on this site using your answers.</p>
      </div>
      <FindMyCard />
    </section>
  );
}
