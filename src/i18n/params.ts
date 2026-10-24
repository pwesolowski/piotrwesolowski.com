import { notFound } from "next/navigation";

import { isLocale, locales, type Locale } from "./routes";

export type LocaleParams = Promise<{ locale: string }>;

export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}

export async function resolveLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return locale;
}
