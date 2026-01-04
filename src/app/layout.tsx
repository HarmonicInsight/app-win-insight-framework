import type { Metadata } from "next";
import "./globals.css";
import { GlobalNav } from "@/components/GlobalNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Insight Framework | 意思決定を、科学する",
    template: "%s | Insight Framework",
  },
  description:
    "KPIが機能しない本当の理由と、日本に合った意思決定の設計。2フェーズモデル、意思決定Box、人材マップで組織の意思決定を構造化する。",
  keywords: [
    "意思決定",
    "KPI",
    "フレームワーク",
    "経営",
    "マネジメント",
    "組織設計",
    "Harmonic Insight",
  ],
  authors: [{ name: "Harmonic Insight" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://insight-framework.vercel.app",
    siteName: "Insight Framework",
    title: "Insight Framework | 意思決定を、科学する",
    description:
      "KPIが機能しない本当の理由と、日本に合った意思決定の設計。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insight Framework | 意思決定を、科学する",
    description:
      "KPIが機能しない本当の理由と、日本に合った意思決定の設計。",
  },
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
      <body className="antialiased">
        <GlobalNav />
        <main className="pt-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
