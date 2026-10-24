import { Mail } from "lucide-react";

import { CalendlyButton } from "@/components/layout/calendly-button";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import { href, type Locale } from "@/i18n/routes";
import type { Messages } from "@/messages";

import { ContactForm } from "./contact-form";

type ContactSectionProps = {
  locale: Locale;
  t: Messages;
};

export function ContactSection({ locale, t }: ContactSectionProps) {
  return (
    <Section id="kontakt" className="bg-muted/40">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-text">{t.contact.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{t.contact.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.contact.description}</p>
          <CalendlyButton label={t.cta.book} newTabLabel={t.cta.newTab} />
          <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4" aria-hidden="true" />
            {t.contact.orEmail}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-foreground hover:text-primary-text">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="reveal rounded-2xl border bg-card p-6 sm:p-8">
          <h3 className="mb-6 text-lg font-semibold">{t.contact.form.title}</h3>
          <ContactForm locale={locale} t={t.contact.form} privacyHref={href({ page: "privacy" }, locale)} />
        </div>
      </div>
    </Section>
  );
}
