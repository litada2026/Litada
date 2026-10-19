import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/data/site-data";

export function CtaSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-4xl bg-gradient-brand px-8 py-12 text-white shadow-2xl shadow-indigo-500/25 sm:px-12 sm:py-16">
          <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10 opacity-60" />
          <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border-48 border-white/10" />
          <div aria-hidden className="absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Bắt đầu bằng một bài toán thật.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                Gửi LITADA vấn đề doanh nghiệp đang vướng. Chúng tôi sẽ đề xuất
                cách tiếp cận, phạm vi và mô hình triển khai phù hợp.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="white"
              className="w-full rounded-full shadow-lg md:w-auto"
            >
              <a href={`mailto:${contact.email}`}>
                Gửi yêu cầu tư vấn <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
