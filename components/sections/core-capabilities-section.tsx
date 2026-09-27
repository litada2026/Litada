import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { capabilities } from "@/data/site-data";

export function CoreCapabilitiesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <div>
            <p className="text-sm font-bold tracking-wide text-indigo-600">
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
            <Card className="h-full overflow-hidden">
              <div className="h-1 bg-gradient-brand" />
              <CardContent className="pt-6">
                <p className="text-xs font-bold text-slate-400">{cap.number}</p>
                <h3 className="mt-1 text-lg font-bold">{cap.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{cap.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
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
