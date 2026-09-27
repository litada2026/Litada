"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  /** Animation delay in seconds — use to stagger siblings. */
  delay?: number;
  /** "onload" plays once when the page mounts (use for the hero). "onview" plays the first time the element scrolls into the viewport (use for every other section). */
  trigger?: "onload" | "onview";
  /** Vertical offset (px) the element travels while fading in. */
  distance?: number;
  className?: string;
  as?: "div" | "span";
};

/**
 * Shared entrance-animation primitive. Keeps every section's "fade + slide up"
 * reveal consistent and respects prefers-reduced-motion automatically via
 * motion's built-in accessibility handling.
 */
export function Reveal({
  children,
  delay = 0,
  trigger = "onview",
  distance = 24,
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  const hidden = { opacity: 0, y: distance };
  const shown = { opacity: 1, y: 0 };

  const viewportProps =
    trigger === "onview"
      ? { whileInView: shown, viewport: { once: true, margin: "-80px" } }
      : { animate: shown };

  return (
    <Component
      className={className}
      initial={hidden}
      {...viewportProps}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}

/**
 * Stagger container: fades in a group of children one after another.
 * Wrap a row of cards with this instead of hand-rolling incremental delays.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  trigger = "onview",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  trigger?: "onload" | "onview";
}) {
  const viewportProps =
    trigger === "onview"
      ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } }
      : { animate: "visible" };

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...viewportProps}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  distance = 20,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
