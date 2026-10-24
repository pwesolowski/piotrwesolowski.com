import { getService } from "@/config/services";
import { isLocale } from "@/i18n/routes";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { getMessages, withKeyword } from "@/messages";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Piotr Wesołowski — AI Product Engineer";

export default async function Image({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale: rawLocale, id } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "pl";
  const service = getService(id)!;
  const t = getMessages(locale);

  return renderOgImage({
    eyebrow: t.services.items[service.id].title,
    title: withKeyword("{Keyword}", service.keyword[locale]),
    subtitle: t.services.items[service.id].short,
  });
}
