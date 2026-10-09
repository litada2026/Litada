import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { audiences } from "@/data/site-data";

export function AudienceSection() {
  return (
    <section className="bg-tint-brand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="mb-10 text-center text-2xl font-extrabold sm:text-3xl">
            Đồng hành cùng doanh nghiệp và tổ chức giáo dục.
          </h2>
        </Reveal>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <RevealGroup className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {audiences.map((item) => (
                <RevealItem key={item.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-bold">{item.title}</h4>
                  <p className="mt-1 text-base text-slate-600">{item.desc}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
