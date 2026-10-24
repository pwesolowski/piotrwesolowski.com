import { Mail, Phone } from "lucide-react";

import { CalendlyButton } from "@/components/layout/calendly-button";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import type { Messages } from "@/messages";

export function ContactSection({ t }: { t: Messages }) {
  const channels = [
    { icon: Phone, label: t.contact.phoneLabel, value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
    { icon: Mail, label: t.contact.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <Section id="kontakt" className="bg-muted">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal space-y-6">
          <p className="text-sm font-semibold text-primary-text">{t.contact.eyebrow}</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.contact.description}</p>
          <CalendlyButton label={t.cta.book} newTabLabel={t.cta.newTab} />
        </div>

        <ul className="reveal space-y-4">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                className="group flex items-center gap-5 rounded-3xl bg-card p-6 shadow-sm transition-transform duration-100 ease-out active:scale-[0.99] sm:p-8"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary-text">
                  <channel.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 space-y-1">
                  <span className="block text-sm text-muted-foreground">{channel.label}</span>
                  <span className="block truncate text-xl font-semibold tracking-[-0.01em] group-hover:text-primary-text sm:text-2xl">
                    {channel.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
