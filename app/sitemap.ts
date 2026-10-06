import type { MetadataRoute } from "next";
import { banksWithCards, cards } from "@/lib/cards";
import { categories } from "@/lib/categories";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/credit-cards",
    "/compare",
    "/guides",
    "/about",
    "/contact",
    "/privacy",
    "/disclaimer",
    "/find-my-card",
    "/tools/cashback-calculator",
    ...categories.map((category) => "/categories/" + category.slug),
    ...banksWithCards().map((bank) => "/banks/" + bank.slug),
    ...guides.map((guide) => "/guides/" + guide.slug),
    ...cards.map((card) => "/credit-cards/" + card.slug)
  ];

  return routes.map((path) => ({ url: SITE_URL + path }));
}
