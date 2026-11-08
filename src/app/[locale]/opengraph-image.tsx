import { siteConfig } from "@/config/site";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { getMessages } from "@/messages";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default async function Image({ params }: { params: LocaleParams }) {
  const t = getMessages(await resolveLocale(params));

  return renderOgImage({ eyebrow: siteConfig.role, title: siteConfig.name, subtitle: t.card.intro });
}
