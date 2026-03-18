"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { MotionSection, MotionDiv } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <MotionSection
      id="top"
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="container relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[var(--muted-foreground)]">
            Xin chào, mình là
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-[var(--muted-foreground)] sm:text-xl">
            {site.title}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact">
              <Button size="lg">
                <Mail className="h-4 w-4" />
                Liên hệ
              </Button>
            </Link>
            <Link href="#projects">
              <Button size="lg" variant="secondary">
                Xem dự án
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <MotionDiv
              className="sm:ml-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                variant="ghost"
                onClick={() =>
                  window.open(site.cvUrl, "_blank", "noopener,noreferrer")
                }
                className="w-full sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Tải CV
              </Button>
            </MotionDiv>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-xs text-[var(--muted-foreground)]">
            <span className="rounded-full border border-[var(--border)] px-3 py-1">
              App Router
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1">
              TypeScript
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1">
              Tailwind
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1">
              Framer Motion
            </span>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

