"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
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
import { Button } from "@/components/ui/button";
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
        title="Selected work"
        description="A few real-world projects that highlight how I solve problems end-to-end."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p, idx) => (
          <MotionDiv
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card className="h-full transition-transform hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto flex items-center gap-2">
                <Link href={p.demoUrl} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </Link>
                <Link href={p.githubUrl} target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

