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
        eyebrow="Về mình"
        title="Tập trung vào sản phẩm, hiệu năng và khả năng mở rộng"
        description="Mình thích xây các trải nghiệm UI sạch, nhanh, và có cấu trúc code dễ bảo trì. Mục tiêu là giúp team ship nhanh hơn mà vẫn giữ chất lượng."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-base font-semibold tracking-tight">
            Những gì mình làm tốt
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
            Next.js App Router, TypeScript, thiết kế component tái sử dụng, tối ưu
            SEO & Core Web Vitals. Mình ưu tiên chuẩn hoá naming, tách module rõ
            ràng, và DX (developer experience).
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
          <h3 className="text-base font-semibold tracking-tight">Kỹ năng</h3>
          <div className="mt-5 space-y-4">
            {site.skills.map((s) => (
              <MotionDiv
                key={s.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {s.level}%
                  </span>
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

