/**
 * Harmonic Insight ナビゲーション設定
 */

export type SiteId = "about" | "construction" | "decision" | "apps" | "series" | "blog";

export interface SiteConfig {
  id: SiteId;
  name: string;
  nameEn: string;
  url: string;
  description: string;
  showInGlobalNav: boolean;
  showInFooter: boolean;
  order: number;
}

export const CURRENT_SITE_ID: SiteId = "decision";

export const SITES: SiteConfig[] = [
  {
    id: "about",
    name: "会社概要",
    nameEn: "About",
    url: "https://harmonic-insight-corporate.vercel.app/",
    description: "Harmonic Insight 会社概要",
    showInGlobalNav: true,
    showInFooter: true,
    order: 0,
  },
  {
    id: "construction",
    name: "建設DX",
    nameEn: "Construction DX",
    url: "https://const-dx-home.vercel.app/",
    description: "建設業界のDX支援",
    showInGlobalNav: true,
    showInFooter: true,
    order: 10,
  },
  {
    id: "decision",
    name: "AI意思決定",
    nameEn: "AI Decision",
    url: "https://app-win-insight-framework.vercel.app/",
    description: "AI時代の意思決定フレームワーク",
    showInGlobalNav: true,
    showInFooter: true,
    order: 11,
  },
  {
    id: "apps",
    name: "Apps/Lab",
    nameEn: "Apps/Lab",
    url: "https://h-insight-apps-portal.vercel.app/",
    description: "アプリケーション一覧",
    showInGlobalNav: true,
    showInFooter: true,
    order: 20,
  },
  {
    id: "series",
    name: "Insight Series",
    nameEn: "Insight Series",
    url: "https://insight-series-site.vercel.app/",
    description: "サービス・価格",
    showInGlobalNav: true,
    showInFooter: true,
    order: 21,
  },
  {
    id: "blog",
    name: "Blog",
    nameEn: "Blog",
    url: "https://insight-blog-olive.vercel.app/",
    description: "技術・ビジネス情報",
    showInGlobalNav: true,
    showInFooter: true,
    order: 30,
  },
];
