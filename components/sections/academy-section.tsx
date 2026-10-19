import { GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { academyPrograms, academyTags } from "@/data/site-data";

export function AcademySection() {
  return (
    <section id="academy" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="LITADA ACADEMY"
        title={
          <>
            Đào tạo để <span className="text-gradient-brand">làm được việc.</span>
          </>
        }
        description="Industry Knowledge for the Digital Era. Chương trình dành cho doanh nghiệp, SME và trường đại học, kết hợp kiến thức ngành, công cụ và dự án thực hành."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1} className="h-full">
          <div className="relative isolate h-full overflow-hidden rounded-3xl bg-gradient-brand p-8 text-white shadow-xl shadow-indigo-500/20 sm:p-10">
            <div aria-hidden className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full border-40 border-white/10" />
            <div aria-hidden className="absolute -bottom-24 -left-10 -z-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <GraduationCap className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs font-bold tracking-[0.15em] text-white/80">
              FOR ENTERPRISE • SME • UNIVERSITY
            </p>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
              Learn. Practice. Build. Present.
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed text-white/90">
              LITADA Academy kết hợp kiến thức, case doanh nghiệp, workshop,
              mentoring và project thực hành. Có thể triển khai in-house, cohort
              SME hoặc hợp tác cùng trường.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm font-medium">
              {academyTags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3.5 py-1.5 ring-1 ring-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {academyPrograms.map((program) => (
            <RevealItem key={program.title} className="h-full">
              <Card className="h-full rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 motion-reduce:hover:translate-y-0">
                <CardContent className="p-6">
                  <span className="inline-block rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold tracking-wider text-indigo-600">
                    {program.tag}
                  </span>
                  <h4 className="mt-4 text-lg font-bold leading-snug">{program.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
