import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <Container className="max-w-3xl">
        <div className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-slate-200/60">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk"
            description="Reach out via email or connect on LinkedIn."
            align="center"
          />
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:kontakt@piotrwesolowski.com"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-500"
            >
              kontakt@piotrwesolowski.com
            </a>
            <a
              href="https://www.linkedin.com/in/piotr-wesolowski"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

