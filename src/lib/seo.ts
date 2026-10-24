import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { href, locales, type Locale, type Route } from "@/i18n/routes";

const ogLocale: Record<Locale, string> = { pl: "pl_PL", en: "en_US" };

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataInput = {
  locale: Locale;
  route: Route;
  title: string;
  description: string;
};

/**
 * Canonical + hreflang + OpenGraph/Twitter for a page.
 * OG images come from the nearest opengraph-image.tsx file.
 */
export function pageMetadata({ locale, route, title, description }: PageMetadataInput): Metadata {
  const url = absoluteUrl(href(route, locale));
  const languages = Object.fromEntries(
    locales.map((alternate) => [alternate, absoluteUrl(href(route, alternate))]),
  );

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": languages.pl },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((other) => other !== locale).map((other) => ogLocale[other]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(siteConfig.xHandle ? { site: siteConfig.xHandle, creator: siteConfig.xHandle } : {}),
    },
  };
}
