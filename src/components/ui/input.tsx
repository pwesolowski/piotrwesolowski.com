import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const fieldClassName =
  "w-full rounded-lg border border-input bg-background px-3 text-base placeholder:text-muted-foreground disabled:opacity-50 md:text-sm";

function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(fieldClassName, "h-11", className)} {...props} />;
}

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(fieldClassName, "min-h-32 py-2.5", className)} {...props} />;
}

export { Input, Textarea };
