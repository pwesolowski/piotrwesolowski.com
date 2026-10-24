import type { Locale } from "@/i18n/routes";

import { en } from "./en";
import { pl, type Messages } from "./pl";

const dictionaries: Record<Locale, Messages> = { pl, en };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

/** Replaces {keyword} and {Keyword} (capitalized) in a template. */
export function withKeyword(template: string, keyword: string): string {
  const capitalized = keyword.charAt(0).toUpperCase() + keyword.slice(1);

  return template.replaceAll("{Keyword}", capitalized).replaceAll("{keyword}", keyword);
}

export type { Messages };
