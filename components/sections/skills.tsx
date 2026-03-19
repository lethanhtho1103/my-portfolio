"use client";

import { MotionSection, MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";

export function SkillsSection() {
  return (
    <MotionSection
      id="skills"
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
        eyebrow="Skills"
        title="Tech stack I work with"
        description="Grouped into Frontend, Backend and Tools so recruiters can scan quickly."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {site.skillsByCategory.map((group) => (
          <MotionDiv
            key={group.category}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <h3 className="text-sm font-semibold tracking-tight">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

