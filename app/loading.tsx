export default function Loading() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="space-y-6">
        <div className="h-10 w-2/3 animate-pulse rounded-lg bg-[var(--muted)] sm:w-1/2" />
        <div className="h-5 w-1/3 animate-pulse rounded-lg bg-[var(--muted)]" />
        <div className="h-24 w-full animate-pulse rounded-[var(--radius)] bg-[var(--muted)]" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-44 animate-pulse rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

