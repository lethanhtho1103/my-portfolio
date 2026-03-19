"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

type ContactStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactSection() {
  const [status, setStatus] = React.useState<ContactStatus>({ type: "idle" });
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.message || "Gửi thất bại. Vui lòng thử lại.",
        });
        return;
      }
      setStatus({
        type: "success",
        message: data.message || "Đã nhận được tin nhắn. Cảm ơn bạn!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Có lỗi mạng. Vui lòng thử lại.",
      });
    }
  }

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
        description="Send me a quick message and I&apos;ll get back to you as soon as I can."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-sm text-[var(--muted-foreground)]">
              Or reach out via:
            </p>
            <div className="mt-4 grid gap-2">
              <Link
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm transition-colors hover:bg-[var(--muted)]"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </Link>

              <Link
                href={site.socials.find((s) => s.label === "GitHub")?.href || "#"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm transition-colors hover:bg-[var(--muted)]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>

              <Link
                href={
                  site.socials.find((s) => s.label === "LinkedIn")?.href || "#"
                }
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm transition-colors hover:bg-[var(--muted)]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, name: e.target.value }))
                  }
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, email: e.target.value }))
                  }
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) =>
                  setForm((v) => ({ ...v, message: e.target.value }))
                }
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button size="lg" disabled={status.type === "loading"}>
                {status.type === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>

              {status.type === "success" ? (
                <p className="text-sm text-green-600 dark:text-green-400">
                  {status.message}
                </p>
              ) : status.type === "error" ? (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {status.message}
                </p>
              ) : (
                <p className="text-sm text-[var(--muted-foreground)]">
                  Or just click{" "}
                  <Link
                    className="inline-flex items-center gap-1 font-medium text-[var(--foreground)] hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    email <Mail className="h-4 w-4" />
                  </Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </MotionSection>
  );
}

