import Image from "next/image";

import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[360px] w-[240px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <Image
              src="/profileStanding.jpg"
              alt="Piotr Wesołowski full-length"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 240px, 60vw"
              priority
            />
          </div>
        </div>
        <div className="max-w-xl rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-slate-200/60">
          <SectionHeading
            eyebrow="About"
            title="Thoughtful senior software engineering"
            description="I'm Piotr Wesołowski, a senior software engineer focused on clear architecture and resilient services. I enjoy simplifying distributed systems, refining developer workflows, and supporting teams with calm leadership."
          />
        </div>
      </Container>
    </section>
  );
}

