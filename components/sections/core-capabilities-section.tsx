import { Card, CardContent } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/data/site-data";

export function CoreCapabilitiesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="WHAT WE DO"
        title={
          <>
            6 năng lực cốt lõi. Một mục tiêu:{" "}
            <span className="text-gradient-brand">kết quả thật.</span>
          </>
        }
        description="Bắt đầu từ bài toán kinh doanh, xác định kiến trúc phù hợp và đồng hành đến triển khai. Tư vấn gắn với quản trị, công nghệ và năng lực đội ngũ."
      />

      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => (
          <RevealItem key={cap.number} className="h-full">
            <Card className="group relative h-full overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              <CardContent className="p-7">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-50 via-violet-50 to-fuchsia-50 text-indigo-600 ring-1 ring-indigo-100 transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white group-hover:ring-transparent">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <p className="text-4xl font-extrabold leading-none text-slate-100 transition-colors group-hover:text-indigo-100">
                    {cap.number}
                  </p>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{cap.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{cap.description}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-[15px] text-slate-600">
                  {cap.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
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
