import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { academyPrograms, academyTags } from "@/data/site-data";

export function AcademySection() {
  return (
    <section id="academy" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-bold tracking-wide text-indigo-600">
          LITADA ACADEMY
        </p>
      </Reveal>

      <div className="mb-10 mt-3 grid gap-8 lg:grid-cols-2 lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Đào tạo để <span className="text-gradient-brand">làm được việc.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-slate-600">
            Industry Knowledge for the Digital Era. Chương trình dành cho doanh
            nghiệp, SME và trường đại học, kết hợp kiến thức ngành, công cụ và
            dự án thực hành.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-gradient-brand p-8 text-white">
            <p className="text-xs font-bold tracking-wide opacity-90">
              FOR ENTERPRISE • SME • UNIVERSITY
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">
              Learn. Practice. Build. Present.
            </h3>
            <p className="mt-3 text-sm opacity-90">
              LITADA Academy kết hợp kiến thức, case doanh nghiệp, workshop,
              mentoring và project thực hành. Có thể triển khai in-house, cohort
              SME hoặc hợp tác cùng trường.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
              {academyTags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {academyPrograms.map((program) => (
            <RevealItem key={program.title}>
              <Card className="h-full">
                <CardContent className="pt-5">
                  <p className="text-xs font-bold text-indigo-600">
                    {program.tag}
                  </p>
                  <h4 className="mt-1 font-bold">{program.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">
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
