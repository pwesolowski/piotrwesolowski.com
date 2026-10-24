import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyCta } from "@/components/layout/sticky-cta";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/config/site";
import { generateLocaleParams, resolveLocale, type LocaleParams } from "@/i18n/params";
import { siteJsonLd } from "@/lib/json-ld";
import { getMessages } from "@/messages";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  // "optional": no late font swap re-paint (keeps LCP fast on slow mobile); fallback is metric-adjusted.
  display: "optional",
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
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            {t.nav.skipToContent}
          </a>
          <SiteHeader locale={locale} t={t} />
          <main id="main">{children}</main>
          <SiteFooter locale={locale} t={t} />
          <StickyCta t={t} />
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
