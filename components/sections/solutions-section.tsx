import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { solutionPillars } from "@/data/site-data";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-base font-bold tracking-wide text-fuchsia-400">
            LITADA SOLUTIONS
          </p>
        </Reveal>

        <div className="mb-12 mt-3 grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Kết nối công nghệ.
              <br />
              <span className="text-gradient-brand">Giải quyết bài toán.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-300">
              LITADA phụ trách tư vấn, kiến trúc và quản trị triển khai; đối tác
              công nghệ đảm nhận các nền tảng và năng lực chuyên sâu.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          {solutionPillars.map((pillar) => (
            <RevealItem key={pillar.index}>
              <p className="text-xs font-semibold text-slate-400">
                {pillar.index} / {pillar.label}
              </p>
              <h3 className="mt-2 text-xl font-bold">{pillar.title}</h3>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
