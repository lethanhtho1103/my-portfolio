"use client";

import { MotionSection, MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
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
        title="About me"
        description="A quick snapshot of who I am and what I work with."
        className="max-w-5xl"
      />

      <Card className="mx-auto max-w-5xl p-6 sm:p-8">
        <div className="space-y-4 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
          <p>
            I&apos;m {site.personalInfo.fullName}, a {site.personalInfo.role}{" "}
            based in {site.location}. I graduated from Can Tho University with a
            degree in Information Technology (GPA: 3.42). I specialize in
            building modern web applications with clean code and great user
            experiences.
          </p>
          <p>
            My expertise spans across backend development with <b>C# / .NET</b>{" "}
            and <b>Node.js</b>, frontend with <b>React & Next.js</b>, and
            databases like <b>PostgreSQL</b>, <b>MongoDB</b>, and <b>MySQL</b>.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </Card>
    </MotionSection>
  );
}
