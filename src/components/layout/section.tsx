import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={cn("py-20 sm:py-28", className)}>
      <Container>
        {title ? (
          <div className="reveal mb-10 max-w-2xl space-y-3 sm:mb-14">
            {eyebrow ? (
              <p className="text-sm font-semibold text-primary-text">{eyebrow}</p>
            ) : null}
            <h2 id={headingId} className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance sm:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">{description}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
