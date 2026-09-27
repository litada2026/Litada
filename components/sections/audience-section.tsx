import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { audiences } from "@/data/site-data";

export function AudienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
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
                <h4 className="font-bold">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </CardContent>
      </Card>
    </section>
  );
}
