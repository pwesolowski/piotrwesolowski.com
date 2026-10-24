/**
 * Single source of truth for public URLs.
 *
 * Pages live internally under /[locale]/... (e.g. /pl/services/audit).
 * Public URLs are localized (/uslugi/audyt-ai-dla-firm, /en/services/ai-audit);
 * next.config.ts turns `getRewrites()` into rewrites, so the mapping is static.
 *
 * NOTE: imported by next.config.ts — keep imports relative (no "@/").
 */
import { getService, services, type ServiceId } from "../config/services";

export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Route =
  | { page: "home" }
  | { page: "about" }
  | { page: "privacy" }
  | { page: "service"; id: ServiceId };

const staticPaths = {
  home: { pl: "/", en: "/en" },
  about: { pl: "/o-mnie", en: "/en/about" },
  privacy: { pl: "/polityka-prywatnosci", en: "/en/privacy-policy" },
} as const;

/** Public, localized path for a route. */
export function href(route: Route, locale: Locale, hash?: string): string {
  let path: string;

  if (route.page === "service") {
    const slug = getService(route.id)!.slug[locale];
    path = locale === "pl" ? `/uslugi/${slug}` : `/en/services/${slug}`;
  } else {
    path = staticPaths[route.page][locale];
  }

  return hash ? `${path}#${hash}` : path;
}

/** Internal app-router path for a route. */
function internalPath(route: Route, locale: Locale): string {
  switch (route.page) {
    case "home":
      return `/${locale}`;
    case "service":
      return `/${locale}/services/${route.id}`;
    default:
      return `/${locale}/${route.page}`;
  }
}

export const allRoutes: Route[] = [
  { page: "home" },
  { page: "about" },
  { page: "privacy" },
  ...services.map((service) => ({ page: "service" as const, id: service.id })),
];

/** Public path -> route + locale (used by the language switcher). */
export function resolvePath(pathname: string): { route: Route; locale: Locale } | null {
  const normalized = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;

  for (const route of allRoutes) {
    for (const locale of locales) {
      if (href(route, locale) === normalized) return { route, locale };
    }
  }

  return null;
}

export function getRewrites() {
  return allRoutes.flatMap((route) =>
    locales
      .map((locale) => ({ source: href(route, locale), destination: internalPath(route, locale) }))
      .filter((rewrite) => rewrite.source !== rewrite.destination),
  );
}
