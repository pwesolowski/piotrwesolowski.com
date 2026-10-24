import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { CalendlyButton } from "@/components/layout/calendly-button";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import type { Messages } from "@/messages";

type HeroProps = {
  t: Messages;
  workHref: string;
};

export function Hero({ t, workHref }: HeroProps) {
  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-base font-semibold text-primary-text text-balance sm:text-lg">{t.hero.h1}</h1>
          <p className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.hero.lead}
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.hero.sub}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <CalendlyButton label={t.cta.book} newTabLabel={t.cta.newTab} />
            <Button asChild variant="outline" size="lg">
              <a href={workHref}>
                {t.cta.seeWork}
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <Image
            src="/profilePhoto.jpeg"
            alt={t.hero.photoAlt}
            width={200}
            height={200}
            loading="eager"
            className="size-28 rounded-full border-4 border-card object-cover shadow-lg ring-1 ring-border sm:size-40 lg:size-48"
          />
        </div>
      </Container>
    </section>
  );
}
