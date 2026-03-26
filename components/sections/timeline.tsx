"use client";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
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
        title="Experience"
        description="My professional journey so far"
        className=" max-w-5xl"
      />

      <div className="mx-auto max-w-5xl">
        <div className="relative">
          {site.timeline.map((item, idx) => {
            const isEducation = item.type === "education";
            const Icon = isEducation ? GraduationCap : BriefcaseBusiness;

            return (
              <MotionDiv
                key={`${item.time}-${item.title}`}
                className="grid grid-cols-[3rem_1fr] gap-6 pb-10 last:pb-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                {/* Cột marker (line + icon) */}
                <div className="relative flex justify-center">
                  <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[var(--border)]" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Cột nội dung */}
                <div>
                  <p className="text-xs tracking-wide text-[var(--muted-foreground)]">
                    {item.time}
                  </p>

                  <h3 className="mt-1 text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-sm font-medium text-blue-600 hover:underline">
                    {item.org}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
