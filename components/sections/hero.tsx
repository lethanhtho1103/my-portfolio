"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { MotionSection, MotionDiv } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

/* ================= HERO IMAGE ================= */
function HeroImage() {
  return (
    <MotionDiv
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: [0, -12, 0] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {/* Glow đơn giản, hiện đại */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      {/* Avatar */}
      <div className="relative h-[320px] w-[260px] sm:h-[360px] sm:w-[300px] lg:h-[400px] lg:w-[320px]">
        <Image
          src="/ava.png" // 👉 ảnh PNG nền trong suốt
          alt={site.name}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 300px, 260px"
          className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          priority
        />
      </div>
    </MotionDiv>
  );
}

/* ================= HERO SECTION ================= */
export function HeroSection() {
  return (
    <MotionSection
      id="top"
      className="relative overflow-hidden bg-slate-950"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Gradient nền hiện đại */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_40%)]" />
      </div>

      {/* Grid nhẹ */}
      <div className="bg-grid absolute inset-0 opacity-[0.04]" />

      <div className="container relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-10 py-10 text-white sm:py-16 lg:grid-cols-[1.3fr_1fr]">
        {/* LEFT */}
        <div className="max-w-3xl">
          <p className="text-sm text-slate-400">Hi, I&apos;m</p>

          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{site.name}</h1>

          <p className="mt-3 text-lg text-indigo-400 sm:text-xl">
            {site.title}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {site.tagline}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact me
              </Button>
            </Link>

            <Link href="#projects">
              <Button size="lg" variant="secondary">
                View projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-xs uppercase text-slate-500">Connect</span>

            <Link
              href={site.socials.find((s) => s.label === "GitHub")?.href || "#"}
              target="_blank"
              className="flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:bg-slate-800"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>

            <Link
              href={
                site.socials.find((s) => s.label === "LinkedIn")?.href || "#"
              }
              target="_blank"
              className="flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:bg-slate-800"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>

            <Link
              href={`mailto:${site.email}`}
              className="flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <HeroImage />
      </div>
    </MotionSection>
  );
}
