import { Mail, Globe, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { leadership } from "@/data/site-data";

export function LeadershipSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
      <Reveal>
        <p className="text-sm font-bold tracking-wide text-indigo-600">
          LEADERSHIP & EXPERT NETWORK
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-10 mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
          Chuyên môn phù hợp.
          <br />
          <span className="text-gradient-brand">Một đầu mối xuyên suốt.</span>
        </h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 p-8 text-white">
            <p className="text-xs font-bold tracking-wide text-fuchsia-300">
              {leadership.role}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">{leadership.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{leadership.focus}</p>

            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {leadership.email}
              </p>
              <p className="flex items-center gap-2">
                <Globe className="h-4 w-4" /> {leadership.website}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {leadership.location}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-extrabold">
                Founder-led thinking. Partner-powered delivery.
              </h3>
              <p className="mt-3 text-sm text-slate-600">{leadership.summary}</p>

              <div className="mt-5 grid grid-cols-1 gap-2 text-sm font-medium sm:grid-cols-2">
                {leadership.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-slate-200 p-4 text-sm text-slate-600">
                <span className="font-bold text-slate-900">Expert Network:</span>{" "}
                {leadership.expertNetworkNote}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
