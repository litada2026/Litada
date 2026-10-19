import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { audiences } from "@/data/site-data";

export function AudienceSection() {
  return (
    <section className="bg-tint-brand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          layout="center"
          eyebrow="WHO WE SERVE"
          title="Đồng hành cùng doanh nghiệp và tổ chức giáo dục."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <div className="group h-full rounded-2xl border border-white bg-white/90 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 motion-reduce:hover:translate-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-1.5 text-[15px] text-slate-600">{item.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
