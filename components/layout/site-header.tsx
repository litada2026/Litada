"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur [padding-top:env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-lg font-extrabold text-white">
            TD
          </span>
          <span className="leading-tight">
            <span className="block font-extrabold tracking-tight text-slate-900">
              LITADA
            </span>
            <span className="block text-[11px] tracking-wide text-slate-500">
              CONSULTING
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden rounded-full md:inline-flex">
          <a href="#contact">Trao đổi cùng LITADA →</a>
        </Button>

        <button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="mt-3 w-full rounded-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Trao đổi cùng LITADA →
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
