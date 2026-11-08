/**
 * Site-wide configuration. Everything that is data (links, contact details)
 * lives here; all copy lives in src/messages/*.ts.
 */

export const siteConfig = {
  name: "Piotr Wesołowski",
  role: "AI Product Engineer",
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
    pioterAi: "https://pioter.ai",
  },
};

export const sameAs = [...Object.values(siteConfig.social).filter(Boolean), siteConfig.url];

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  pioterAi: "pioter.ai",
};

/** Configured (non-empty) social profiles, in display order. */
export const socialLinks = (Object.keys(socialLabels) as (keyof typeof socialLabels)[])
  .filter((key) => siteConfig.social[key])
  .map((key) => ({ key, label: socialLabels[key], url: siteConfig.social[key] }));
