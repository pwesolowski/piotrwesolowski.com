/**
 * Services: routing + SEO data. Copy for each service lives in
 * src/messages/{pl,en}.ts under `services.items[id]`.
 *
 * `keyword` is the single target phrase of the service page. It is used
 * verbatim in <title>, H1 and the first paragraph. `slug` builds the URL —
 * keep it aligned with the keyword after keyword research.
 *
 * NOTE: imported by next.config.ts — keep imports relative (no "@/").
 */

export const serviceIds = ["audit", "agents", "mcp"] as const;
export type ServiceId = (typeof serviceIds)[number];

type Localized<T> = { pl: T; en: T };

export type ServiceConfig = {
  id: ServiceId;
  slug: Localized<string>;
  keyword: Localized<string>;
  /** Shown only when siteConfig.showPrices is true. E.g. "od 4 000 zł netto". */
  price?: Localized<string>;
};

export const services: ServiceConfig[] = [
  {
    id: "audit",
    slug: { pl: "audyt-ai-dla-firm", en: "ai-audit" },
    keyword: { pl: "audyt AI dla firm", en: "AI audit for business" },
    // price: { pl: "TODO", en: "TODO" },
  },
  {
    id: "agents",
    slug: { pl: "automatyzacja-dokumentow-ai", en: "ai-document-automation" },
    keyword: { pl: "automatyzacja dokumentów AI", en: "AI document automation" },
  },
  {
    id: "mcp",
    slug: { pl: "integracja-ai-z-systemem-firmy", en: "ai-integration-mcp" },
    keyword: { pl: "integracja AI z systemem firmy", en: "AI integration with your business system" },
  },
];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}
