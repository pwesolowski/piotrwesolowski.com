import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routes";
import type { CaseStudy } from "@/lib/case-studies";
import type { Messages } from "@/messages";

type CaseStudiesProps = {
  locale: Locale;
  t: Messages;
  studies: CaseStudy[];
};

/** Hidden when there are no (published) case studies. */
export function CaseStudies({ locale, t, studies }: CaseStudiesProps) {
  if (studies.length === 0) return null;

  return (
    <Section id="realizacje" eyebrow={t.work.eyebrow} title={t.work.title} description={t.work.description}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => {
          const copy = study[locale];
          const rows = [
            { label: t.work.problem, text: copy.problem },
            { label: t.work.solution, text: copy.solution },
            { label: t.work.result, text: copy.result },
          ];

          return (
            <article key={study.id} className="reveal flex flex-col gap-5 rounded-3xl bg-muted p-7">
              <div className="space-y-2">
                {study.draft ? <Badge className="bg-destructive text-destructive-foreground">{t.work.draft}</Badge> : null}
                <p className="text-sm text-muted-foreground">{copy.client}</p>
                <h3 className="text-lg font-semibold leading-snug">{copy.title}</h3>
              </div>
              <dl className="flex-1 space-y-3 text-sm">
                {rows.map((row) => (
                  <div key={row.label}>
                    <dt className="font-semibold">{row.label}</dt>
                    <dd className="leading-relaxed text-muted-foreground">{row.text}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={study.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-text hover:underline"
              >
                {t.work.readMore}
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> {t.cta.newTab}</span>
              </a>
            </article>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        <a href={siteConfig.social.pioterAi} className="font-semibold text-primary-text hover:underline">
          {t.work.moreOnBlog}
        </a>
      </p>
    </Section>
  );
}
