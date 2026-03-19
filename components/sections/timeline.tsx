"use client";

import { MotionSection, MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

export function TimelineSection() {
  return (
    <MotionSection
      id="experience"
      className="container py-14 sm:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Timeline of work and education"
        description="Condensed into key milestones so recruiters can understand my journey quickly."
      />

      <div className="grid gap-4">
        {site.timeline.map((item, idx) => (
          <MotionDiv
            key={`${item.time}-${item.title}`}
            className="relative rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {item.org}
                </p>
              </div>
              <p className="text-sm font-medium text-[var(--muted-foreground)]">
                {item.time}
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
              {item.description}
            </p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted-foreground)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

