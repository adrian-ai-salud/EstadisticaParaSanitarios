"use client";

import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="inline-flex size-9 items-center justify-center rounded-lg text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg"
      aria-label={next === "dark" ? "Activar modo oscuro" : "Activar modo claro"}
      title={next === "dark" ? "Modo oscuro" : "Modo claro"}
    >
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
      <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
    </button>
  );
}
