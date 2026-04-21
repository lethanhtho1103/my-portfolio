"use client";

import Link from "next/link";
import { Github, Users } from "lucide-react";
import { MotionSection, MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";

export function ProjectsSection() {
  return (
    <MotionSection
      id="projects"
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
        eyebrow="Projects"
        title="Projects"
        description="Some of the projects I've worked on"
        className="max-w-5xl"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {site.projects.map((p, idx) => (
          <MotionDiv
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <CardTitle className="text-lg font-bold text-blue-600">
                      {p.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {p.subtitle}
                    </CardDescription>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                      <Users className="h-4 w-4" />
                      <span>{p.members} members</span>
                    </div>

                    {p.githubUrl ? (
                      <Link
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-[var(--muted-foreground)]">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span className="leading-6">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0" />
            </Card>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}
