import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { workSteps } from "@/data/site-data";

export function HowWeWorkSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
      <Reveal>
        <p className="text-sm font-bold tracking-wide text-indigo-600">
          HOW WE WORK
        </p>
      </Reveal>

      <div className="mb-10 mt-3 grid gap-8 lg:grid-cols-2 lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Một hành trình <span className="text-gradient-brand">liền mạch.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-slate-600">
            Khách hàng có thể vào LITADA ở bất kỳ điểm nào — assessment,
            architecture, PMO, training hay implementation governance.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {workSteps.map((step) => (
          <RevealItem key={step.title}>
            <div className="h-full rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-sm font-bold text-indigo-600">{step.title}</p>
              <p className="mt-1 text-xs text-slate-600">{step.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
