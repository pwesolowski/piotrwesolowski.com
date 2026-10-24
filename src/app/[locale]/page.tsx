import type { Metadata } from "next";

import { AboutTeaser } from "@/components/sections/about-teaser";
import { CaseStudies } from "@/components/sections/case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { siteConfig } from "@/config/site";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { href } from "@/i18n/routes";
import { getCaseStudies } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return pageMetadata({ locale, route: { page: "home" }, title: t.meta.title, description: t.meta.description });
}

export default async function HomePage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const studies = getCaseStudies();
  // "See case studies" falls back to pioter.ai while the section is empty.
  const workHref = studies.length > 0 ? href({ page: "home" }, locale, "realizacje") : siteConfig.social.pioterAi;

  return (
    <>
      <Hero t={t} workHref={workHref} />
      <TrustBar t={t} />
      <ServicesGrid locale={locale} t={t} />
      <Process t={t} />
      <CaseStudies locale={locale} t={t} studies={studies} />
      <AboutTeaser locale={locale} t={t} />
      <Testimonials locale={locale} t={t} />
      <Faq t={t} />
      <ContactSection t={t} />
    </>
  );
}
