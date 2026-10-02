import Link from "next/link";

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">CardCompare India</Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/credit-cards">Credit Cards</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
