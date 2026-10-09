import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-gradient-brand p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Bắt đầu bằng một bài toán thật.
            </h2>
            <p className="mt-2 max-w-xl text-white/90">
              Gửi LITADA vấn đề doanh nghiệp đang vướng. Chúng tôi sẽ đề xuất
              cách tiếp cận, phạm vi và mô hình triển khai phù hợp.
            </p>
          </div>
          <Button asChild size="lg" variant="white" className="w-full whitespace-nowrap md:w-auto">
            <a href="mailto:it@litada.com">Gửi yêu cầu tư vấn →</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
