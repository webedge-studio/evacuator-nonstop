import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://evacuator-nonstop.md/sitemap.xml",
    host: "https://evacuator-nonstop.md",
  };
}
