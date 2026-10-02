import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://credit-card-affiliate-website-ew2g.vercel.app/sitemap.xml"
  };
}
