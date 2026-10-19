import { Globe, Mail, MapPin, Network } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact, expertNetwork } from "@/data/site-data";

const contactItems = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Globe, label: contact.website, href: contact.websiteUrl },
  { icon: MapPin, label: contact.location },
];

export function ExpertNetworkSection() {
  return (
    <section className="bg-tint-brand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="EXPERT NETWORK"
          title={
            <>
              Chuyên môn phù hợp.
              <br />
              <span className="text-gradient-brand">Một đầu mối xuyên suốt.</span>
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal delay={0.1} className="h-full">
            <div className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-fuchsia-950 p-8 text-white shadow-xl sm:p-10">
              <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10" />
              <div aria-hidden className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-3xl" />

              <p className="text-xs font-bold tracking-[0.15em] text-fuchsia-300">
                LITADA CONSULTING
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                Founder-led thinking.
                <br />
                Partner-powered delivery.
              </h3>
              <p className="mt-3 text-slate-300">{expertNetwork.focus}</p>

              <ul className="mt-auto space-y-3 pt-10">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                        <item.icon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-3 text-slate-200 transition-colors hover:text-white"
                        >
                          {content}
                        </a>
                      ) : (
                        <span className="flex items-center gap-3 text-slate-200">{content}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <Card className="h-full rounded-3xl border-white bg-white/90">
              <CardContent className="p-8 sm:p-10">
                <p className="text-lg leading-relaxed text-slate-700">{expertNetwork.summary}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {expertNetwork.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-indigo-50/60 px-4 py-2 text-sm font-semibold text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Network className="h-5 w-5" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    <span className="font-bold text-slate-900">Expert Network:</span>{" "}
                    {expertNetwork.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
