import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routes";
import type { Messages } from "@/messages";

type TestimonialsProps = {
  locale: Locale;
  t: Messages;
};

/** Hidden when siteConfig.testimonials is empty. */
export function Testimonials({ locale, t }: TestimonialsProps) {
  if (siteConfig.testimonials.length === 0) return null;

  return (
    <Section id="referencje" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {siteConfig.testimonials.map((item) => (
          <figure key={item.author} className="reveal flex flex-col gap-6 rounded-3xl bg-muted p-7 sm:p-9">
            <blockquote className="flex-1 text-lg leading-relaxed">„{item.quote[locale]}”</blockquote>
            <figcaption className="text-sm">
              <span className="font-semibold">{item.author}</span>
              <span className="text-muted-foreground">
                {" "}
                — {item.role[locale]}
                {item.company ? `, ${item.company}` : null}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
