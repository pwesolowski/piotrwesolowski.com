import type { MetadataRoute } from "next";

import { allRoutes, href, locales } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(href(route, locale)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.page === "home" ? 1 : 0.2,
      alternates: {
        languages: Object.fromEntries(locales.map((other) => [other, absoluteUrl(href(route, other))])),
      },
    })),
  );
}
