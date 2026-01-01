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

const sites = [
  {
    name: "Corporate",
    description: "会社情報・思想",
    url: "https://harmonic-insight-corporate.vercel.app/",
    icon: Home,
  },
  {
    name: "建設DXの窓口",
    description: "建設業DXコンサル",
    url: "https://const-dx-home.vercel.app/",
    icon: Building2,
  },
  {
    name: "Insight Series",
    description: "ソフトウェア製品群",
    url: "https://insight-series-site.vercel.app/",
    icon: Layers,
  },
  {
    name: "Apps Portal",
    description: "モバイルアプリ",
    url: "https://h-insight-apps-portal.vercel.app/",
    icon: AppWindow,
  },
  {
    name: "Dashboard",
    description: "ビジネスダッシュボード",
    url: "https://toko-bi.vercel.app/",
    icon: LayoutDashboard,
  },
];

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { name: "フレームワーク", href: "/framework" },
      { name: "日本文化×KPI", href: "/japan-context" },
      { name: "ストーリー", href: "/stories" },
      { name: "人材マップ", href: "/skill-map" },
    ],
  },
  {
    title: "その他",
    links: [
      { name: "note連載", href: "/note" },
      { name: "About", href: "/about" },
    ],
  },
];

export function SiteFooter() {
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
          {sites.map((site) => {
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
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-[var(--text-primary)]">
                  Insight Framework
                </span>
              </Link>
              <p className="text-sm text-[var(--text-muted)] max-w-sm mb-6">
                意思決定を科学的に構造化するフレームワーク。
                日本の組織文化に合った、実践的な意思決定設計の方法論を提供します。
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
                  note連載
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
