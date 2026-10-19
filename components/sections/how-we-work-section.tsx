import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { workSteps } from "@/data/site-data";

export function HowWeWorkSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="HOW WE WORK"
        title={
          <>
            Một hành trình <span className="text-gradient-brand">liền mạch.</span>
          </>
        }
        description="Khách hàng có thể vào LITADA ở bất kỳ điểm nào — assessment, architecture, PMO, training hay implementation governance."
      />

      <div className="relative">
        {/* Connector: vertical on mobile, horizontal across step centers on desktop */}
        <div
          aria-hidden
          className="absolute bottom-8 left-8 top-8 w-0.5 -translate-x-1/2 bg-linear-to-b from-brand-indigo via-brand-purple to-brand-pink lg:hidden"
        />
        <div
          aria-hidden
          className="absolute left-[8.33%] right-[8.33%] top-8 hidden h-0.5 -translate-y-1/2 bg-gradient-brand lg:block"
        />

        <RevealGroup className="grid gap-8 lg:grid-cols-6 lg:gap-4">
          {workSteps.map((step, index) => (
            <RevealItem key={step.title}>
              <div className="group flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gradient-brand group-hover:text-white group-hover:ring-transparent motion-reduce:group-hover:translate-y-0">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="pt-1.5 lg:pt-5">
                  <p className="text-xs font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-bold tracking-wide text-slate-900">{step.title}</p>
                  <p className="mt-1 text-[15px] text-slate-600">{step.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
