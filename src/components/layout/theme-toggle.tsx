"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Both icons rendered and toggled with CSS to avoid a hydration mismatch. */}
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="block dark:hidden" aria-hidden="true" />
    </Button>
  );
}
