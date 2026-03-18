import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--muted-foreground)]">
          <p className="font-medium text-[var(--foreground)]">{site.name}</p>
          <p>
            {site.title} • {site.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {site.socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {s.label}
            </Link>
          ))}
          <Link
            href={`mailto:${site.email}`}
            className="rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

