import Image from "next/image";
import { ArrowRight } from "lucide-react";

import logo from "@/app/public/logo-mark.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { heroHighlights, heroTags } from "@/data/site-data";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background: soft brand wash, blueprint grid and two blurred glows */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-indigo-50/70 via-white to-white" />
        <div className="bg-grid mask-fade-y absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-300/25 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <Reveal trigger="onload">
            <Badge variant="outline" className="gap-2 bg-white/80 py-2 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
              </span>
              Boutique Consulting • Technology • Academy
            </Badge>
          </Reveal>

          <Reveal trigger="onload" delay={0.1}>
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Strategy.
              <br />
              Architecture.
              <br />
              <span className="text-gradient-brand">Execution.</span>
            </h1>
          </Reveal>

          <Reveal trigger="onload" delay={0.2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Từ chiến lược đến kết quả triển khai. LITADA đồng hành cùng doanh
              nghiệp về chuyển đổi số, kiến trúc, AI và quản trị dự án — kết hợp
              đào tạo thực chiến và hệ sinh thái chuyên gia.
            </p>
          </Reveal>

          <Reveal trigger="onload" delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <Button asChild size="lg" className="rounded-full shadow-lg shadow-indigo-500/25">
                <a href="#services">
                  Khám phá dịch vụ <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-white/70 backdrop-blur">
                <a href="#academy">LITADA Academy</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal trigger="onload" delay={0.25}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl"
            />
            <div className="rounded-4xl border border-white/80 bg-white/80 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:p-8">
              <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-indigo-50 via-violet-50 to-fuchsia-50 py-12 sm:py-16">
                <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
                <div aria-hidden className="absolute h-56 w-56 rounded-full bg-violet-400/30 blur-3xl" />
                <Image
                  src={logo}
                  alt="LITADA"
                  priority
                  className="relative h-40 w-40 animate-float drop-shadow-[0_20px_30px_rgb(99_102_241/0.35)] sm:h-52 sm:w-52"
                />
              </div>

              <RevealGroup trigger="onload" className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {heroHighlights.map((item, index) => (
                  <RevealItem key={item.title}>
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-4 transition-colors hover:border-indigo-200">
                      <p className="text-xs font-bold text-indigo-500">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-bold text-slate-900">{item.title}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mask-fade-x mx-auto max-w-7xl overflow-hidden py-5">
          <div className="flex w-max animate-marquee gap-3 pr-3 hover:[animation-play-state:paused]">
            {[...heroTags, ...heroTags].map((tag, i) => (
              <Badge
                key={`${tag}-${i}`}
                variant="outline"
                aria-hidden={i >= heroTags.length}
                className="rounded-full px-4 py-2 text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
