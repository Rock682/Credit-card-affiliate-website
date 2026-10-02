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
    "/disclaimer"
  ];

  return [
    ...routes.map((path) => ({ url: base + path })),
    ...cards.map((card) => ({
      url: base + "/credit-cards/" + card.slug
    }))
  ];
}
