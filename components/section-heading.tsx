import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium text-[var(--muted-foreground)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
