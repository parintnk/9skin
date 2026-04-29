import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.9skin999.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/admin",
          "/_next/static/",
          "/*?*utm_",
          "/*?*fbclid=",
          "/*?*gclid=",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/img/", "/_next/image"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/img/", "/_next/image"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
