import { sameAs, siteConfig } from "@/config/site";
import { href, type Locale } from "@/i18n/routes";
import { getMessages } from "@/messages";

import { absoluteUrl } from "./seo";

/** Site-wide graph: a single Person. */
export function siteJsonLd(locale: Locale) {
  const t = getMessages(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: t.card.intro,
    url: absoluteUrl(href({ page: "home" }, locale)),
    image: absoluteUrl("/profilePhoto.jpeg"),
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    knowsAbout: t.card.stack,
    sameAs,
  };
}
