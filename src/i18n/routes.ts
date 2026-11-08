/**
 * Single source of truth for public URLs.
 *
 * Pages live internally under /[locale]/... (e.g. /pl/privacy).
 * Public URLs are localized (/polityka-prywatnosci, /en/privacy-policy);
 * next.config.ts turns `getRewrites()` into rewrites, so the mapping is static.
 *
 * NOTE: imported by next.config.ts — keep imports relative (no "@/").
 */

export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Route = { page: "home" } | { page: "privacy" };

const paths = {
  home: { pl: "/", en: "/en" },
  privacy: { pl: "/polityka-prywatnosci", en: "/en/privacy-policy" },
} as const;

/** Public, localized path for a route. */
export function href(route: Route, locale: Locale, hash?: string): string {
  const path = paths[route.page][locale];

  return hash ? `${path}#${hash}` : path;
}

/** Internal app-router path for a route. */
function internalPath(route: Route, locale: Locale): string {
  return route.page === "home" ? `/${locale}` : `/${locale}/${route.page}`;
}

export const allRoutes: Route[] = [{ page: "home" }, { page: "privacy" }];

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

/** Pages removed when the site became a one-page business card. */
export const legacyRedirects = [
  { source: "/o-mnie", destination: "/" },
  { source: "/uslugi/:slug*", destination: "/" },
  { source: "/en/about", destination: "/en" },
  { source: "/en/services/:slug*", destination: "/en" },
].map((redirect) => ({ ...redirect, permanent: true }));
