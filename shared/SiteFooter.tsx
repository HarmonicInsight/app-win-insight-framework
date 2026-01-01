"use client";

import Link from "next/link";
import {
  Building2,
  Layers,
  AppWindow,
  BookOpen,
  LayoutDashboard,
  Home,
  ExternalLink,
  Mail,
  ArrowUpRight,
} from "lucide-react";

/**
 * Harmonic Insight 共通フッター
 *
 * 使用方法:
 * 1. このファイルを src/components/common/ にコピー
 * 2. layout.tsx で import して使用
 * 3. currentSite と footerLinks を設定
 *
 * 例:
 * <SiteFooter
 *   currentSite="construction-dx"
 *   footerLinks={[
 *     { title: "サービス", links: [...] },
 *   ]}
 * />
 */

export type SiteId =
  | "corporate"
  | "construction-dx"
  | "insight-series"
  | "apps"
  | "framework"
  | "dashboard";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface SiteFooterProps {
  currentSite: SiteId;
  footerLinks?: FooterLinkGroup[];
  description?: string;
}

const sites = [
  {
    id: "corporate" as SiteId,
    name: "Corporate",
    description: "会社情報・思想",
    url: "https://harmonic-insight-corporate.vercel.app/",
    icon: Home,
  },
  {
    id: "construction-dx" as SiteId,
    name: "建設DXの窓口",
    description: "建設業DXコンサル",
    url: "https://const-dx-home.vercel.app/",
    icon: Building2,
  },
  {
    id: "insight-series" as SiteId,
    name: "Insight Series",
    description: "ソフトウェア製品群",
    url: "https://insight-series-site.vercel.app/",
    icon: Layers,
  },
  {
    id: "apps" as SiteId,
    name: "Apps Portal",
    description: "モバイルアプリ",
    url: "https://h-insight-apps-portal.vercel.app/",
    icon: AppWindow,
  },
  {
    id: "framework" as SiteId,
    name: "Framework",
    description: "意思決定フレームワーク",
    url: "https://insight-framework.vercel.app/",
    icon: BookOpen,
  },
  {
    id: "dashboard" as SiteId,
    name: "Dashboard",
    description: "ビジネスダッシュボード",
    url: "https://toko-bi.vercel.app/",
    icon: LayoutDashboard,
  },
];

const siteLogos: Record<SiteId, { icon: typeof Home; name: string }> = {
  "corporate": { icon: Home, name: "Harmonic Insight" },
  "construction-dx": { icon: Building2, name: "建設DXの窓口" },
  "insight-series": { icon: Layers, name: "Insight Series" },
  "apps": { icon: AppWindow, name: "Apps Portal" },
  "framework": { icon: BookOpen, name: "Insight Framework" },
  "dashboard": { icon: LayoutDashboard, name: "Dashboard" },
};

export function SiteFooter({
  currentSite,
  footerLinks = [],
  description = "Harmonic Insight は、建設業界を中心としたDXソリューションを提供しています。",
}: SiteFooterProps) {
  const currentSiteInfo = siteLogos[currentSite];
  const LogoIcon = currentSiteInfo.icon;

  // 現在のサイトを除外した関連サイト
  const relatedSites = sites.filter((site) => site.id !== currentSite);

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      {/* Related Sites Section */}
      <div className="container section">
        <div className="text-center mb-12">
          <span className="section-label">Harmonic Insight</span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-2">
            関連サイト
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {relatedSites.map((site) => {
            const Icon = site.icon;
            return (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex flex-col items-center text-center p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)]/10 transition-colors">
                  <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-1">
                  {site.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  {site.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-[var(--border-subtle)]">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-teal)] flex items-center justify-center">
                  <LogoIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-[var(--text-primary)]">
                  {currentSiteInfo.name}
                </span>
              </Link>
              <p className="text-sm text-[var(--text-muted)] max-w-sm mb-6">
                {description}
              </p>

              {/* Contact */}
              <div className="flex items-center gap-4">
                <a
                  href="https://note.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 text-sm"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  note
                </a>
                <a
                  href="mailto:contact@harmonic-insight.com"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  お問い合わせ
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-[var(--text-primary)] mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--border-subtle)]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Harmonic Insight. All rights
            reserved.
          </p>
          <p className="text-sm text-[var(--text-subtle)]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
