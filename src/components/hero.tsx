import Image from "next/image";

import { Container } from "./container";

export function Hero() {
  return (
    <section id="hero" className="py-20">
      <Container className="flex flex-col-reverse items-center justify-between gap-12 rounded-3xl bg-white/80 px-8 py-10 shadow-xl ring-1 ring-slate-200/60 text-center lg:flex-row lg:rounded-[40px] lg:px-16 lg:py-14 lg:text-left">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Senior Software Engineer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Piotr Wesołowski
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            I design and build future-proof platforms with a strong foundation in Java frameworks, pairing business context with performance, clean code, and analytical problem solving.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-slate-200 bg-white shadow-lg">
            <Image
              src="/profilePhoto.jpeg"
              alt="Piotr Wesołowski portrait"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
