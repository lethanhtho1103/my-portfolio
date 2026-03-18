import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default"
          ? "bg-[var(--muted)] text-[var(--foreground)]"
          : "border border-[var(--border)] text-[var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}

