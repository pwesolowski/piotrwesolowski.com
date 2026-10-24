import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { getMessages } from "@/messages";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Piotr Wesołowski — AI Product Engineer";

export default async function Image({ params }: { params: LocaleParams }) {
  const t = getMessages(await resolveLocale(params));

  return renderOgImage({ eyebrow: t.hero.role, title: t.meta.ogTagline, subtitle: t.hero.h1 });
}
