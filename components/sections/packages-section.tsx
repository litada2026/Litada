import { Check, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { packages } from "@/data/site-data";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-tint-brand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PACKAGES"
          title={
            <>
              Gói rõ ràng. <span className="text-gradient-brand">Bắt đầu dễ.</span>
            </>
          }
          description="Không cần khởi động bằng một dự án lớn. Chọn một sprint ngắn để nhìn thấy vấn đề, roadmap và quyết định tiếp theo."
        />

        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <RevealItem key={pkg.title} className="h-full">
              <Card className="group h-full rounded-2xl border-white bg-white/90 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <CardContent className="flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <Badge variant="soft" className="gap-1.5 rounded-full">
                      <Clock className="h-3.5 w-3.5" />
                      {pkg.duration}
                    </Badge>
                    <span className="text-sm font-bold text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight">{pkg.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{pkg.description}</p>
                  <ul className="mt-6 grid gap-x-4 gap-y-2.5 border-t border-slate-100 pt-6 text-[15px] text-slate-700 sm:grid-cols-2">
                    {pkg.tags.map((tag) => (
                      <li key={tag} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
