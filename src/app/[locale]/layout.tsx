import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { LanguageSwitch } from "@/components/layout/language-switch";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/config/site";
import { generateLocaleParams, resolveLocale, type LocaleParams } from "@/i18n/params";
import { siteJsonLd } from "@/lib/json-ld";
import { getMessages } from "@/messages";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  // Fallback only (system font comes first, see tokens.css): no preload, no late swap re-paint.
  display: "optional",
  preload: false,
});

export const dynamicParams = false;
export const generateStaticParams = generateLocaleParams;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: LocaleParams;
}) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            {t.nav.skipToContent}
          </a>
          <div className="mx-auto flex w-full max-w-2xl justify-end gap-1 px-2 pt-3 sm:px-4">
            <LanguageSwitch locale={locale} label={t.nav.switchLanguage} />
            <ThemeToggle label={t.nav.toggleTheme} />
          </div>
          <main id="main">{children}</main>
          <SiteFooter locale={locale} t={t} />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd(locale)).replace(/</g, "\\u003c") }}
        />
        <Analytics />
      </body>
    </html>
  );
}
