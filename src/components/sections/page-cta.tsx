import { CalendlyButton } from "@/components/layout/calendly-button";
import { Container } from "@/components/layout/container";
import type { Messages } from "@/messages";

/** Closing call-to-action band used on subpages. */
export function PageCta({ t }: { t: Messages }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="reveal flex flex-col items-start gap-6 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.servicePage.ctaTitle}</h2>
            <p className="text-lg leading-relaxed opacity-90">{t.servicePage.ctaText}</p>
          </div>
          <CalendlyButton label={t.cta.book} newTabLabel={t.cta.newTab} variant="secondary" />
        </div>
      </Container>
    </section>
  );
}
