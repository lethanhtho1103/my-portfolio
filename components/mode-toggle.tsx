"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        aria-label="Đổi giao diện sáng/tối"
        className="w-10 px-0"
      >
        <LaptopMinimal className="h-4 w-4" />
      </Button>
    );
  }

  const resolved = theme === "system" ? systemTheme : theme;
  const next =
    resolved === "dark" ? "light" : resolved === "light" ? "system" : "dark";

  const label =
    resolved === "dark"
      ? "Dark"
      : resolved === "light"
        ? "Light"
        : "System";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(next)}
      aria-label={`Đổi theme (hiện tại: ${label})`}
      className="w-10 px-0"
    >
      {resolved === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : resolved === "light" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <LaptopMinimal className="h-4 w-4" />
      )}
    </Button>
  );
}

