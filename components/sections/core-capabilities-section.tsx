import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { capabilities } from "@/data/site-data";

export function CoreCapabilitiesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <div>
            <p className="text-base font-bold tracking-wide text-indigo-600">
              WHAT WE DO
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
              6 năng lực cốt lõi. Một mục tiêu:{" "}
              <span className="text-gradient-brand">kết quả thật.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-slate-600">
            Bắt đầu từ bài toán kinh doanh, xác định kiến trúc phù hợp và đồng
            hành đến triển khai. Tư vấn gắn với quản trị, công nghệ và năng lực
            đội ngũ.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => (
          <RevealItem key={cap.number}>
            <Card className="h-full overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="h-1 bg-gradient-brand" />
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 via-violet-50 to-fuchsia-50 text-indigo-600">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-400">{cap.number}</p>
                </div>
                <h3 className="mt-4 text-lg font-bold">{cap.title}</h3>
                <p className="mt-2 text-base text-slate-600">{cap.description}</p>
                <ul className="mt-4 space-y-1.5 text-base text-slate-600">
                  {cap.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
