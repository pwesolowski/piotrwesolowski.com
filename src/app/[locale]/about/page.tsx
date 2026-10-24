import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/sections/page-cta";
import { Badge } from "@/components/ui/badge";
import { siteConfig, socialLinks } from "@/config/site";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return pageMetadata({
    locale,
    route: { page: "about" },
    title: `${t.aboutPage.metaTitle} | ${siteConfig.name}`,
    description: t.aboutPage.metaDescription,
  });
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-28">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary-text">{t.aboutPage.eyebrow}</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-6xl">{t.aboutPage.h1}</h1>
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty">{t.aboutPage.intro}</p>
            <ul className="flex flex-wrap gap-2">
              {t.about.stack.map((item) => (
                <li key={item}>
                  <Badge variant="outline">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-black/10">
            <Image
              src="/profileStanding.jpg"
              alt={t.about.photoAlt}
              width={720}
              height={900}
              sizes="(min-width: 1024px) 384px, 90vw"
              loading="eager"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </Container>
      </section>

      <Container className="max-w-3xl space-y-14 py-12">
        {t.aboutPage.sections.map((section) => (
          <section key={section.title} className="reveal space-y-4">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">{t.aboutPage.linksTitle}</h2>
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener me"
                  className="inline-flex h-10 items-center rounded-full border border-input px-5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <PageCta t={t} />
    </>
  );
}
