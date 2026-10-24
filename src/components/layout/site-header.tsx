import { Menu } from "lucide-react";
import Link from "next/link";

import { href, type Locale } from "@/i18n/routes";
import type { Messages } from "@/messages";

import { CalendlyButton } from "./calendly-button";
import { Container } from "./container";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = {
  locale: Locale;
  t: Messages;
};

export function SiteHeader({ locale, t }: SiteHeaderProps) {
  const home = { page: "home" } as const;
  const links = [
    { label: t.nav.services, href: href(home, locale, "uslugi") },
    { label: t.nav.process, href: href(home, locale, "wspolpraca") },
    { label: t.nav.work, href: href(home, locale, "realizacje") },
    { label: t.nav.about, href: href({ page: "about" }, locale) },
    { label: t.nav.faq, href: href(home, locale, "faq") },
    { label: t.nav.contact, href: href(home, locale, "kontakt") },
  ];

  return (
    <header className="material sticky top-0 z-40 border-b border-border/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={href(home, locale)} className="flex flex-col leading-tight">
          <span className="font-semibold">Piotr Wesołowski</span>
          <span className="text-xs text-muted-foreground">{t.hero.role}</span>
        </Link>

        <nav aria-label={t.nav.menu} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitch locale={locale} label={t.nav.switchLanguage} />
          <ThemeToggle label={t.nav.toggleTheme} />
          <CalendlyButton
            label={t.cta.bookShort}
            newTabLabel={t.cta.newTab}
            size="default"
            className="ml-2 hidden md:inline-flex"
          />

          <details className="group relative lg:hidden">
            <summary
              className="inline-flex size-10 cursor-pointer list-none items-center justify-center rounded-full hover:bg-muted [&::-webkit-details-marker]:hidden"
              aria-label={t.nav.menu}
            >
              <Menu className="size-5" aria-hidden="true" />
            </summary>
            <nav
              aria-label={t.nav.menu}
              className="absolute right-0 top-12 w-56 rounded-2xl border bg-popover p-2 shadow-xl shadow-black/5"
            >
              <ul className="flex flex-col text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="block rounded-xl px-3 py-2.5 hover:bg-muted">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
