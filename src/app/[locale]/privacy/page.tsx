import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { href } from "@/i18n/routes";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return pageMetadata({
    locale,
    route: { page: "privacy" },
    title: `${t.privacy.metaTitle} | ${siteConfig.name}`,
    description: t.privacy.metaDescription,
  });
}

export default async function PrivacyPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-10 px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href={href({ page: "home" }, locale)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-text hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.privacy.back}
      </Link>
      <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{t.privacy.h1}</h1>
      {t.privacy.sections.map((section) => (
        <section key={section.title} className="space-y-2">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="leading-relaxed text-muted-foreground">{section.text}</p>
        </section>
      ))}
    </div>
  );
}
