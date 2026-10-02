import type { MetadataRoute } from "next";
import { cards } from "@/lib/cards";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://credit-card-affiliate-website-ew2g.vercel.app";
  const routes = [
    "",
    "/credit-cards",
    "/compare",
    "/guides",
    "/about",
    "/contact",
    "/privacy",
    "/disclaimer",
    "/categories/cashback",
    "/categories/travel",
    "/categories/shopping",
    "/categories/fuel",
    "/banks/hdfc-bank",
    "/banks/sbi-card",
    "/banks/icici-bank",
    "/banks/axis-bank",
    "/banks/hsbc",
    "/guides/how-credit-card-fees-work",
    "/guides/cashback-credit-cards-guide",
    "/guides/travel-credit-cards-guide",
    "/find-my-card",
    "/tools/cashback-calculator"
  ];

  return [
    ...routes.map((path) => ({ url: base + path })),
    ...cards.map((card) => ({ url: base + "/credit-cards/" + card.slug }))
  ];
}
