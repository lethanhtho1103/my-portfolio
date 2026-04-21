"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      className="container py-14 sm:py-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s work on your next project"
        description="Reach out directly through email or social profiles."
      />

      <div className="mx-auto max-w-3xl rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
        <p className="text-sm text-[var(--muted-foreground)]">
          Feel free to connect with me through any channel below.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm transition-colors hover:bg-[var(--muted)]"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </Link>

          <Link
            href={site.socials.find((s) => s.label === "GitHub")?.href || "#"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm transition-colors hover:bg-[var(--muted)]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>

          <Link
            href={site.socials.find((s) => s.label === "LinkedIn")?.href || "#"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm transition-colors hover:bg-[var(--muted)] sm:col-span-2"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}

