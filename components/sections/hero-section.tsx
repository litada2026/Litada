import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { heroHighlights, heroTags } from "@/data/site-data";
import Image from "next/image";
import logo from "@/app/public/logo.png"
export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-14 lg:pb-20">
        <div>
          <Reveal trigger="onload">
            <Badge variant="outline" className="bg-white shadow-sm">
              Boutique Consulting • Technology • Academy
            </Badge>
          </Reveal>

          <Reveal trigger="onload" delay={0.1}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Strategy.
              <br />
              Architecture.
              <br />
              <span className="text-gradient-brand">Execution.</span>
            </h1>
          </Reveal>

          <Reveal trigger="onload" delay={0.2}>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Từ chiến lược đến kết quả triển khai. LITADA đồng hành cùng doanh
              nghiệp về chuyển đổi số, kiến trúc, AI và quản trị dự án — kết hợp
              đào tạo thực chiến và hệ sinh thái chuyên gia.
            </p>
          </Reveal>

          <Reveal trigger="onload" delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#services">Khám phá dịch vụ</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#academy">LITADA Academy</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal trigger="onload" delay={0.25}>
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl sm:p-10">
            <div className="flex items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 via-violet-100 to-fuchsia-100 py-10">
              <Image src={logo} alt="logo" className="flex h-56 w-56 items-center justify-center rounded-2xl text-5xl font-extrabold text-white sm:h-72 sm:w-72 sm:text-6xl"/>
            </div>

            <RevealGroup
              trigger="onload"
              className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <RevealItem key={item.title}>
                  <div className="h-full rounded-xl border border-slate-200 p-4">
                    <p className="text-base font-bold">{item.title}</p>
                    <p className="mt-1 text-base text-slate-500">{item.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 py-5 sm:px-6">
          {heroTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
