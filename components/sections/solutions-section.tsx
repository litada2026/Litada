import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionPillars } from "@/data/site-data";

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid-dark mask-fade-y absolute inset-0" />
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="LITADA SOLUTIONS"
          title={
            <>
              Kết nối công nghệ.
              <br />
              <span className="text-gradient-brand">Giải quyết bài toán.</span>
            </>
          }
          description="LITADA phụ trách tư vấn, kiến trúc và quản trị triển khai; đối tác công nghệ đảm nhận các nền tảng và năng lực chuyên sâu."
        />

        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {solutionPillars.map((pillar) => (
            <RevealItem key={pillar.index} className="h-full">
              <div className="group h-full rounded-2xl border border-white/10 bg-white/3 p-7 backdrop-blur transition-colors duration-300 hover:border-fuchsia-400/40 hover:bg-white/6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-lg shadow-fuchsia-500/20">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-semibold tracking-[0.15em] text-slate-400">
                  {pillar.index} / {pillar.label}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{pillar.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
