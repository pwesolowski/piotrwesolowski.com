"use client";

import { usePathname } from "next/navigation";

import { href, resolvePath, type Locale } from "@/i18n/routes";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitch({ locale, label }: LanguageSwitchProps) {
  const pathname = usePathname();
  const target: Locale = locale === "pl" ? "en" : "pl";
  const resolved = resolvePath(pathname);
  const targetHref = href(resolved?.route ?? { page: "home" }, target);

  return (
    <a
      href={targetHref}
      hrefLang={target}
      lang={target}
      title={label}
      className="inline-flex h-10 items-center rounded-lg px-3 text-sm font-semibold uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {target}
      <span className="sr-only"> — {label}</span>
    </a>
  );
}
