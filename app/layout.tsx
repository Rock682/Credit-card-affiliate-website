import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://credit-card-affiliate-website-ew2g.vercel.app"),
  title: {
    default: "Credit Cards in India | CardCompare India",
    template: "%s | CardCompare India"
  },
  description:
    "Explore credit cards in India by fees, cashback, travel benefits and spending needs.",
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
