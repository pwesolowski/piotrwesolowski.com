import { CalendlyButton } from "@/components/layout/calendly-button";
import { Container } from "@/components/layout/container";
import type { Messages } from "@/messages";

/** Closing call-to-action band used on subpages. */
export function PageCta({ t }: { t: Messages }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="reveal flex flex-col items-start gap-6 rounded-3xl bg-muted p-8 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.servicePage.ctaTitle}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{t.servicePage.ctaText}</p>
          </div>
          <CalendlyButton label={t.cta.book} newTabLabel={t.cta.newTab} />
        </div>
      </Container>
    </section>
  );
}
