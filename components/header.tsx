"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const nav = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Dự án", href: "#projects" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Liên hệ", href: "#contact" },
] as const;

export function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_88%,transparent)] backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-md px-2 py-1 text-sm font-semibold tracking-tight hover:bg-[var(--muted)]"
          >
            {site.name}
          </Link>
          <span className="hidden text-xs text-[var(--muted-foreground)] sm:inline">
            {site.title}
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ModeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="sm"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className="w-10 px-0"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          open ? "border-t border-[var(--border)]" : "hidden",
        )}
      >
        <div className="container flex flex-col gap-1 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

