import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { href, type Locale } from "@/i18n/routes";
import type { Messages } from "@/messages";

type AboutTeaserProps = {
  locale: Locale;
  t: Messages;
};

export function AboutTeaser({ locale, t }: AboutTeaserProps) {
  const links = [
    { label: "LinkedIn", url: siteConfig.social.linkedin },
    { label: "GitHub", url: siteConfig.social.github },
  ].filter((link) => link.url);

  return (
    <Section id="o-mnie" className="bg-muted/40">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <div className="reveal mx-auto w-full max-w-sm overflow-hidden rounded-2xl border bg-card">
          <Image
            src="/profileStanding.jpg"
            alt={t.about.photoAlt}
            width={720}
            height={900}
            sizes="(min-width: 1024px) 384px, 90vw"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>

        <div className="reveal space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-text">{t.about.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{t.about.title}</h2>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}

          <div className="space-y-3">
            <p className="text-sm font-semibold">{t.about.stackLabel}</p>
            <ul className="flex flex-wrap gap-2">
              {t.about.stack.map((item) => (
                <li key={item}>
                  <Badge variant="outline">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href={href({ page: "about" }, locale)}>
                {t.about.more}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            {links.map((link) => (
              <Button key={link.label} asChild variant="ghost">
                <a href={link.url} target="_blank" rel="noopener me">
                  {link.label}
                  <span className="sr-only"> {t.cta.newTab}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
