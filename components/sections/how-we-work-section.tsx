import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { workSteps } from "@/data/site-data";

export function HowWeWorkSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-base font-bold tracking-wide text-indigo-600">
          HOW WE WORK
        </p>
      </Reveal>

      <div className="mb-12 mt-3 grid gap-8 lg:grid-cols-2 lg:items-end">
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

      <div className="relative">
        {/* Connector: vertical on mobile, horizontal across step centers on desktop */}
        <div
          aria-hidden
          className="absolute bottom-7 left-7 top-7 w-0.5 -translate-x-1/2 bg-linear-to-b from-brand-indigo via-brand-purple to-brand-pink lg:hidden"
        />
        <div
          aria-hidden
          className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-0.5 -translate-y-1/2 bg-gradient-brand lg:block"
        />

        <RevealGroup className="grid gap-8 lg:grid-cols-6 lg:gap-4">
          {workSteps.map((step, index) => (
            <RevealItem key={step.title}>
              <div className="group flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 shadow-md ring-4 ring-violet-50 transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="pt-1 lg:pt-4">
                  <p className="text-xs font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-0.5 text-base font-bold text-indigo-600">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
