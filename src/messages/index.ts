import type { Locale } from "@/i18n/routes";

import { en } from "./en";
import { pl, type Messages } from "./pl";

const dictionaries: Record<Locale, Messages> = { pl, en };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export type { Messages };
