import { ArrowUpRight, CalendarDays, Download, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/config/site";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return pageMetadata({ locale, route: { page: "home" }, title: t.meta.title, description: t.meta.description });
}

export default async function HomePage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const { card: t } = getMessages(locale);

  const channels = [
    { icon: Phone, label: t.phoneLabel, value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
    { icon: Mail, label: t.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl space-y-16 px-4 pt-6 pb-16 sm:px-6 sm:pt-12 sm:pb-24">
      {/* Identity */}
      <header className="reveal flex flex-col items-center text-center">
        <Image
          src="/profilePhoto.jpeg"
          alt={t.photoAlt}
          width={160}
          height={160}
          loading="eager"
          className="size-32 rounded-full object-cover shadow-xl shadow-black/10 ring-4 ring-background sm:size-40"
        />
        <h1 className="mt-8 text-[40px] leading-[1.1] font-semibold tracking-[-0.025em] text-balance sm:text-[64px] sm:leading-[1.06]">{siteConfig.name}</h1>
        <p className="mt-3 text-[21px] leading-[1.2] font-semibold tracking-[-0.01em] text-primary-text sm:text-[24px]">{siteConfig.role}</p>
        <p className="mt-5 max-w-lg text-[17px] leading-[1.47] text-muted-foreground text-pretty sm:text-[19px] sm:leading-[1.42]">{t.intro}</p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              <CalendarDays aria-hidden="true" />
              {t.book}
              <span className="sr-only"> {t.newTab}</span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/piotr-wesolowski.vcf" download>
              <Download aria-hidden="true" />
              {t.saveContact}
            </a>
          </Button>
        </div>
      </header>

      {/* Contact */}
      <section aria-labelledby="contact-title" className="reveal space-y-4">
        <h2 id="contact-title" className="sr-only">
          {t.contactTitle}
        </h2>
        <ul className="grid gap-3">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                className="group flex items-center gap-4 rounded-3xl bg-muted p-5 transition-transform duration-100 ease-out active:scale-[0.99]"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-primary-text shadow-sm">
                  <channel.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] leading-[1.4] text-muted-foreground">{channel.label}</span>
                  <span className="block truncate text-[17px] font-semibold tracking-[-0.01em] group-hover:text-primary-text">{channel.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-[15px]">
          {socialLinks.map((social) => (
            <li key={social.key}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener me"
                className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience-title" className="reveal space-y-8">
        <h2 id="experience-title" className="text-[28px] leading-[1.14] font-semibold tracking-[-0.02em]">
          {t.experienceTitle}
        </h2>
        <ol className="relative space-y-8 border-l border-border pl-6">
          {t.experience.map((item) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-[7px] -left-[29px] size-2.5 rounded-full bg-primary ring-4 ring-background"
              />
              {item.when ? (
                <p className="text-[14px] leading-[1.4] font-medium text-primary-text">{item.when}</p>
              ) : null}
              <h3 className="mt-0.5 text-[19px] leading-[1.3] font-semibold tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-1.5 text-muted-foreground text-pretty">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="space-y-3">
          <h3 className="sr-only">{t.stackLabel}</h3>
          <ul className="flex flex-wrap gap-2">
            {t.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-muted px-3 py-1 text-[14px] font-medium">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
