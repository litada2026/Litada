"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import logo from '@/app/public/1791470533863_1207292598529529321_1207292598529529321_c7ba59bb9a5c85e5ec63e4cde29b382a.jpg'

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site-data";
import Image from "next/image";

const menuItem = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur [padding-top:env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-lg font-extrabold text-white">
            TD
          </span> */}
          <Image src={logo} alt="logo" className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-brand text-lg font-extrabold text-white"/>
          <span className="whitespace-nowrap leading-tight">
            <span className="block font-extrabold tracking-[0.2em] text-slate-900">
              LITADA
            </span>
            <span className="block text-[11px] tracking-[0.3em] text-slate-500">
              CONSULTING
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 whitespace-nowrap text-base font-bold text-slate-700 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden shrink-0 rounded-full xl:inline-flex">
          <a href="#contact">Trao đổi cùng LITADA →</a>
        </Button>

        <button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
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
              <nav className="flex flex-col gap-3 text-base font-medium text-slate-700">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    variants={menuItem}
                    className="py-1.5"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div variants={menuItem}>
                <Button asChild size="sm" className="mt-3 w-full rounded-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Trao đổi cùng LITADA →
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
