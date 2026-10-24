/**
 * Site-wide configuration. Everything that is data (links, toggles, lists)
 * lives here; all copy lives in src/messages/*.ts.
 *
 * NOTE: imported by next.config.ts — keep imports relative (no "@/").
 */

export type TrustItem = {
  /** Visible name (also used as alt text for logos). */
  name: string;
  /** Optional logo in /public, e.g. "/logos/acme.svg". Without it the name is shown as text. */
  logo?: string;
};

export type Testimonial = {
  quote: { pl: string; en: string };
  author: string;
  role: { pl: string; en: string };
  company?: string;
};

export const siteConfig = {
  name: "Piotr Wesołowski",
  url: "https://piotrwesolowski.com",
  email: "kontakt@piotrwesolowski.com",
  calendlyUrl: "https://calendly.com/piowes30/30min/",

  /** Empty strings are skipped in links and JSON-LD sameAs. */
  social: {
    linkedin: "https://www.linkedin.com/in/piotr-wesolowski",
    github: "", // TODO: GitHub profile URL
    youtube: "", // TODO: YouTube channel URL
    x: "", // TODO: X profile URL
    pioterAi: "https://pioter.ai",
  },

  /** X handle for twitter:site / twitter:creator, e.g. "@handle". Empty = omitted. */
  xHandle: "", // TODO

  /** Show prices on service pages (prices are set per service in services.ts). */
  showPrices: false,

  /**
   * Trust bar under the hero. Section is hidden when both lists are empty.
   * TODO: add real industries / client logos (only with client consent).
   */
  trust: {
    industries: [] as TrustItem[],
    clients: [] as TrustItem[],
  },

  /** Testimonials section. Hidden when empty. TODO: real quotes only, with consent. */
  testimonials: [] as Testimonial[],
};

export const sameAs = [
  ...Object.values(siteConfig.social).filter(Boolean),
  siteConfig.url,
];
