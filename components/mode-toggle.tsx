"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
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
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";
  const label = isDark ? "Tối" : "Sáng";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(next)}
      aria-label={`Đổi theme (hiện tại: ${label})`}
      className="w-10 px-0"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}

