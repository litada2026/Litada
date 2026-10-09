import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { packages } from "@/data/site-data";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-tint-brand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Gói rõ ràng. <span className="text-gradient-brand">Bắt đầu dễ.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-600">
              Không cần khởi động bằng một dự án lớn. Chọn một sprint ngắn để nhìn
              thấy vấn đề, roadmap và quyết định tiếp theo.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          {packages.map((pkg) => (
            <RevealItem key={pkg.title}>
              <Card className="h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <CardContent className="pt-6">
                  <Badge variant="soft" className="rounded-full">
                    {pkg.duration}
                  </Badge>
                  <h3 className="mt-3 text-xl font-bold">{pkg.title}</h3>
                  <p className="mt-1 text-base text-slate-600">{pkg.description}</p>
                  <div className="mt-4 grid grid-cols-1 gap-2 text-base sm:grid-cols-2">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 px-3 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
