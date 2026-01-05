import type { Metadata } from "next";
import "./globals.css";
import { GlobalNav, SiteNav } from "@/components/GlobalNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "AI意思決定 | 判断の構造を、変える",
    template: "%s | AI意思決定",
  },
  description:
    "AIは判断を代替しない。判断の構造を変える。KPIが機能しない本当の理由と、意思決定の設計方法。",
  keywords: [
    "意思決定",
    "KPI",
    "フレームワーク",
    "AI",
    "経営",
    "Harmonic Insight",
  ],
  authors: [{ name: "Harmonic Insight" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <GlobalNav />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
