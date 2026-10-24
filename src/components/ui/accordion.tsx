import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

/*
 * shadcn-style Accordion on native <details>/<summary>: zero client JS,
 * keyboard and screen-reader support built in. Items sharing the same
 * `name` behave as a single-open accordion.
 */

function Accordion({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("w-full", className)} {...props} />;
}

function AccordionItem({ className, ...props }: ComponentProps<"details">) {
  return <details className={cn("group border-b", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: ComponentProps<"summary">) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors hover:text-primary-text [&::-webkit-details-marker]:hidden",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </summary>
  );
}

function AccordionContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("pb-5 leading-relaxed text-muted-foreground", className)} {...props} />;
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
