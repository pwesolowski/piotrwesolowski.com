import { CalendarDays } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type CalendlyButtonProps = Omit<ComponentProps<typeof Button>, "asChild"> & {
  label: string;
  newTabLabel: string;
};

export function CalendlyButton({ label, newTabLabel, size = "lg", ...props }: CalendlyButtonProps) {
  return (
    <Button asChild size={size} {...props}>
      <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
        <CalendarDays aria-hidden="true" />
        {label}
        <span className="sr-only"> {newTabLabel}</span>
      </a>
    </Button>
  );
}
