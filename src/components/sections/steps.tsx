import { cn } from "@/lib/cn";

type Step = { title: string; text: string };

/** Numbered stepper: vertical on mobile, horizontal timeline from lg. */
export function Steps({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-8 lg:grid-cols-4 lg:gap-6", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="reveal relative flex gap-4 lg:flex-col">
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-12 bottom-[-2rem] left-5 w-px bg-border lg:top-5 lg:right-[-1.5rem] lg:bottom-auto lg:left-12 lg:h-px lg:w-auto"
            />
          ) : null}
          <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-semibold text-primary-text">
            {index + 1}
          </span>
          <div className="space-y-1.5">
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
