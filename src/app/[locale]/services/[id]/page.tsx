import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CalendlyButton } from "@/components/layout/calendly-button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageCta } from "@/components/sections/page-cta";
import { ServiceIcon } from "@/components/sections/service-icon";
import { Steps } from "@/components/sections/steps";
import { getService, services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { href, isLocale, locales } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";
import { getMessages, withKeyword } from "@/messages";

type ServiceParams = Promise<{ locale: string; id: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, id: service.id })));
}

async function resolve(params: ServiceParams) {
  const { locale, id } = await params;
  const service = getService(id);
  if (!isLocale(locale) || !service) notFound();

  const t = getMessages(locale);
  const keyword = service.keyword[locale];

  return { locale, service, t, copy: t.services.items[service.id], keyword };
}

export async function generateMetadata({ params }: { params: ServiceParams }): Promise<Metadata> {
  const { locale, service, copy, keyword } = await resolve(params);
  return pageMetadata({
    locale,
    route: { page: "service", id: service.id },
    title: `${withKeyword("{Keyword}", keyword)} | ${siteConfig.name} — AI Product Engineer`,
    description: withKeyword(copy.intro, keyword),
  });
}

export default async function ServicePage({ params }: { params: ServiceParams }) {
  const { locale, service, t, copy, keyword } = await resolve(params);
  const price = siteConfig.showPrices ? service.price?.[locale] : undefined;
  const others = services.filter((other) => other.id !== service.id);

  return (
    <>
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-20">
        <Container className="max-w-4xl space-y-6">
          <Link
            href={href({ page: "home" }, locale, "uslugi")}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← {t.servicePage.backToServices}
          </Link>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-text">
            <ServiceIcon id={service.id} className="size-4" />
            {copy.title}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {withKeyword("{Keyword}", keyword)}
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            {withKeyword(copy.intro, keyword)}
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <CalendlyButton label={t.cta.book} newTabLabel={t.cta.newTab} />
            {price ? (
              <p className="text-sm">
                <span className="text-muted-foreground">{t.servicePage.price}: </span>
                <span className="font-semibold">{price}</span>
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <Section className="bg-muted/40 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {[
            { title: t.servicePage.forWhom, items: copy.forWhom },
            { title: t.servicePage.deliverables, items: copy.deliverables },
          ].map((list) => (
            <div key={list.title} className="reveal space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight">{list.title}</h2>
              <ul className="space-y-3">
                {list.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <Check className="mt-1 size-4 shrink-0 text-primary-text" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.servicePage.collaboration}>
        <Steps steps={copy.steps} />
      </Section>

      <PageCta t={t} />

      <Section title={t.servicePage.otherServices} className="pt-0 sm:pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.id}
              href={href({ page: "service", id: other.id }, locale)}
              className="group flex gap-4 rounded-2xl border bg-card p-6 transition-colors hover:border-primary/60"
            >
              <ServiceIcon id={other.id} className="mt-1 size-5 shrink-0 text-primary-text" />
              <div className="space-y-1">
                <h3 className="font-semibold">{t.services.items[other.id].title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.services.items[other.id].short}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
