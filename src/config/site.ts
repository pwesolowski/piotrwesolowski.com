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
  /** E.164 for tel: links and JSON-LD; `phoneDisplay` is what people see. */
  phone: "+48786650592",
  phoneDisplay: "+48 786 650 592",
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

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  youtube: "YouTube",
  x: "X",
  pioterAi: "pioter.ai",
};

/** Configured (non-empty) social profiles, in display order. */
export const socialLinks = (Object.keys(socialLabels) as (keyof typeof socialLabels)[])
  .filter((key) => siteConfig.social[key])
  .map((key) => ({ label: socialLabels[key], url: siteConfig.social[key] }));
