import { services } from "@/config/services";
import { sameAs, siteConfig } from "@/config/site";
import { href, type Locale } from "@/i18n/routes";
import { getMessages } from "@/messages";

import { absoluteUrl } from "./seo";

const personId = `${siteConfig.url}/#person`;
const businessId = `${siteConfig.url}/#business`;

const knowsAbout = [
  "AI agents",
  "Claude",
  "MCP",
  "LLM",
  "product engineering",
  "business automation",
];

/** Site-wide graph: Person + ProfessionalService with the service catalog. */
export function siteJsonLd(locale: Locale) {
  const t = getMessages(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: "AI Product Engineer",
        description: t.hero.h1,
        url: absoluteUrl(href({ page: "about" }, locale)),
        image: absoluteUrl("/profilePhoto.jpeg"),
        email: `mailto:${siteConfig.email}`,
        knowsAbout,
        sameAs,
        worksFor: { "@id": businessId },
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: `${siteConfig.name} — AI Product Engineer`,
        description: t.meta.description,
        url: absoluteUrl(href({ page: "home" }, locale)),
        image: absoluteUrl("/profilePhoto.jpeg"),
        email: siteConfig.email,
        areaServed: { "@type": "Country", name: "Poland" },
        founder: { "@id": personId },
        knowsAbout,
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.services.eyebrow,
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: t.services.items[service.id].title,
              description: t.services.items[service.id].short,
              url: absoluteUrl(href({ page: "service", id: service.id }, locale)),
              provider: { "@id": businessId },
            },
          })),
        },
      },
    ],
  };
}
