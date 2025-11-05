import Image from "next/image";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="py-10">
      <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[360px] w-[260px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <Image
              src="/profileStanding.jpg"
              alt="Piotr Wesołowski full-length"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 300px, 60vw"
              priority
            />
          </div>
        </div>
        <div className="w-full rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200/60">
          <SectionHeading
            eyebrow="About"
            title="Senior software engineering rooted in Java"
            titleClassName="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            description="I'm Piotr Wesołowski, a senior software engineer with deep experience across Java ecosystems. I align solutions with real business goals while championing performance, code quality, and scalable architectures. Colleagues know me for analytical problem solving and a genuine drive to share knowledge across the team."
          />
        </div>
      </Container>
    </section>
  );
}

