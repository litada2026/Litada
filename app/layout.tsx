import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LITADA Consulting — Strategy. Architecture. Execution.",
  description:
    "LITADA đồng hành cùng doanh nghiệp về chuyển đổi số, kiến trúc, AI và quản trị dự án — kết hợp đào tạo thực chiến và hệ sinh thái chuyên gia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
