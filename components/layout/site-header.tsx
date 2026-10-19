"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import logo from "@/app/public/logo-mark.png";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site-data";
import { cn } from "@/lib/utils";

const menuItem = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg transition-[box-shadow,border-color] duration-300 [padding-top:env(safe-area-inset-top,0px)]",
        scrolled || open
          ? "border-slate-200/70 shadow-[0_8px_30px_-12px_rgb(15_23_42/0.15)]"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <Image src={logo} alt="LITADA" priority className="h-10 w-10" />
          <span className="whitespace-nowrap leading-none">
            <span className="block text-lg font-extrabold tracking-[0.18em] text-slate-900">
              LITADA
            </span>
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.32em] text-slate-500">
              CONSULTING
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 whitespace-nowrap text-[15px] font-semibold text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden shrink-0 rounded-full px-5 lg:inline-flex">
          <a href="#contact">
            Trao đổi cùng LITADA <ArrowRight className="h-4 w-4" />
          </a>
        </Button>

        <button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
              className="px-4 py-4 sm:px-6"
            >
              <nav className="flex flex-col gap-1 text-base font-semibold text-slate-700">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    variants={menuItem}
                    className="rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div variants={menuItem}>
                <Button asChild className="mt-3 w-full rounded-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Trao đổi cùng LITADA <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
