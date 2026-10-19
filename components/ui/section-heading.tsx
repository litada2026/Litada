import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** "split" puts the description beside the title on desktop; "center" stacks everything centered. */
  layout?: "split" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Eyebrow + title + description block shared by every content section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  layout = "split",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-12 grid gap-6",
        layout === "split" ? "lg:grid-cols-2 lg:items-end lg:gap-16" : "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <div>
        {eyebrow && (
          <Reveal>
            <p
              className={cn(
                "inline-flex items-center gap-3 text-sm font-bold tracking-[0.18em]",
                layout === "center" && "justify-center",
                dark ? "text-fuchsia-300" : "text-indigo-600",
              )}
            >
              <span aria-hidden className="h-px w-8 bg-gradient-brand" />
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>
      </div>

      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-lg leading-relaxed text-pretty",
              dark ? "text-slate-300" : "text-slate-600",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
