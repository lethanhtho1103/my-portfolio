"use client";

import { MotionSection, MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <MotionSection
      id="about"
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
        eyebrow="About"
        title="Fullstack developer who cares about product and performance"
        description="I have almost 1 year of experience working on real-world systems for retail, finance and task management. I enjoy designing clear user flows and maintainable codebases that help teams ship faster with confidence."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-base font-semibold tracking-tight">Who am I?</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
            I&apos;m {site.personalInfo.fullName}, a {site.personalInfo.role}{" "}
            based in {site.location}. I&apos;ve worked on projects in retail, finance
            and task management, from designing APIs to building usable interfaces.
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
            My strengths are understanding business requirements, breaking them into
            concrete features, and keeping the codebase clean so teammates can onboard quickly.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "UI Systems",
              "SEO",
              "Performance",
              "API Integration",
              "Clean Architecture",
              "Testing-ready",
            ].map((x) => (
              <Badge key={x} variant="outline">
                {x}
              </Badge>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-base font-semibold tracking-tight">Skills</h3>
          <div className="mt-5 space-y-4">
            {site.skills.map((s) => (
              <MotionDiv
                key={s.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-[var(--muted)]">
                  <div
                    className="h-2 rounded-full bg-[var(--primary)]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

