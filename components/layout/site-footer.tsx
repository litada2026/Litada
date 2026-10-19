import Image from "next/image";
import { Globe, Mail, MapPin } from "lucide-react";

import logo from "@/app/public/logo-mark.png";
import { contact, navLinks } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" className="inline-flex items-center gap-2.5">
            <Image src={logo} alt="LITADA" className="h-10 w-10" />
            <span className="leading-none">
              <span className="block text-lg font-extrabold tracking-[0.18em] text-white">
                LITADA
              </span>
              <span className="mt-1 block text-[10px] font-semibold tracking-[0.32em] text-slate-500">
                CONSULTING
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-sm leading-relaxed">
            Strategy. Architecture. Execution. Đồng hành từ chiến lược đến kết
            quả triển khai.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold tracking-[0.15em] text-white">KHÁM PHÁ</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold tracking-[0.15em] text-white">LIÊN HỆ</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.websiteUrl} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Globe className="h-4 w-4" /> {contact.website}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4" /> {contact.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm sm:px-6">
          © {new Date().getFullYear()} LITADA Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
