"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;
  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`테마 변경 (현재: ${theme})`}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon />
    </Button>
  );
}
