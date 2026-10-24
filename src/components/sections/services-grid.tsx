import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CalendlyButton } from "@/components/layout/calendly-button";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { services, type ServiceId } from "@/config/services";
import { href, type Locale } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import type { Messages } from "@/messages";

import { ServiceIcon } from "./service-icon";

/** Bento layout: lg grid of 3 columns, cards alternate 1/2 column spans. */
const spans: Record<ServiceId, string> = {
  audit: "lg:col-span-1",
  agents: "lg:col-span-2",
  mcp: "lg:col-span-2",
};

type ServicesGridProps = {
  locale: Locale;
  t: Messages;
};

export function ServicesGrid({ locale, t }: ServicesGridProps) {
  return (
    <Section id="uslugi" eyebrow={t.services.eyebrow} title={t.services.title} description={t.services.description}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const copy = t.services.items[service.id];

          return (
            <Link
              key={service.id}
              href={href({ page: "service", id: service.id }, locale)}
              className={cn(
                "reveal group flex flex-col gap-6 rounded-2xl border bg-card p-6 transition-colors hover:border-primary/60 sm:p-8",
                spans[service.id],
              )}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary-text">
                <ServiceIcon id={service.id} className="size-5" />
              </span>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold">{copy.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{copy.short}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {copy.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="outline">{tag}</Badge>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-text">
                {t.services.more}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          );
        })}

        <div className="reveal flex flex-col justify-between gap-6 rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8 md:col-span-2 lg:col-span-1">
          <div className="space-y-2">
            <p className="text-xl font-semibold">{t.servicePage.ctaTitle}</p>
            <p className="leading-relaxed opacity-90">{t.servicePage.ctaText}</p>
          </div>
          <CalendlyButton
            label={t.cta.book}
            newTabLabel={t.cta.newTab}
            variant="secondary"
            className="self-start"
          />
        </div>
      </div>
    </Section>
  );
}
