"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// グローバルサイトリンク（上段バー）
const globalSites = [
  { name: "Harmonic Insight", url: "https://harmonic-insight-corporate.vercel.app/" },
  { name: "Home", url: "https://harmonic-insight-corporate.vercel.app/" },
  { name: "建設DX", url: "https://const-dx-home.vercel.app/" },
  { name: "Insight Series", url: "https://insight-series-site.vercel.app/" },
  { name: "Apps/Lab", url: "https://h-insight-apps-portal.vercel.app/" },
  { name: "Insight BI", url: "https://app-web-insight-bi.vercel.app/" },
];

// メニュー構造（カテゴリ別）
const menuCategories = [
  {
    title: "課題を知る",
    links: [
      { name: "なぜKPIは機能しないのか", href: "/challenges/kpi" },
      { name: "日本文化と意思決定", href: "/japan-context" },
      { name: "AI時代の判断とは", href: "/challenges/ai-era" },
    ],
  },
  {
    title: "フレームワーク",
    links: [
      { name: "意思決定Boxとは", href: "/framework" },
      { name: "定義集", href: "/definitions" },
      { name: "具体例で理解する", href: "/examples" },
    ],
  },
  {
    title: "実装する",
    links: [
      { name: "Pixieフレームワーク", href: "/pixie" },
      { name: "AI BPO方法論", href: "/ai-bpo" },
      { name: "人材マップ", href: "/skill-map" },
    ],
  },
  {
    title: "事例・連載",
    links: [
      { name: "導入ストーリー", href: "/stories" },
      { name: "note連載", href: "/note" },
      { name: "About", href: "/about" },
    ],
  },
];

// フラットなリンクリスト
const allLinks = menuCategories.flatMap((cat) => cat.links);

export function SiteNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Global Sites Bar - 上段ダークバー */}
      <div className="bg-neutral-900 text-sm">
        <div className="container">
          <div className="flex items-center justify-between h-10">
            {/* Left: Site Links */}
            <div className="hidden md:flex items-center">
              {globalSites.map((site, index) => (
                <span key={site.name} className="flex items-center">
                  {index > 0 && (
                    <span className="text-neutral-600 mx-2">|</span>
                  )}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {site.name}
                  </a>
                </span>
              ))}
            </div>
            {/* Right: CTA */}
            <a
              href="/about"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 ml-auto"
            >
              <span>お問い合わせ</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - 下段メインヘッダー */}
      <header
        className={`sticky top-0 z-50 bg-[var(--bg-primary)] transition-shadow duration-300 ${
          isScrolled ? "shadow-sm border-b border-[var(--border-subtle)]" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Site Name */}
            <Link href="/" className="group">
              <span className="text-xl md:text-2xl font-normal text-[var(--text-primary)] tracking-wide">
                AI時代の意思決定
              </span>
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="メニュー"
              >
                <span className="text-sm hidden sm:inline">メニュー</span>
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay - 建設DXスタイル */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ top: "104px" }}
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-0 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] shadow-lg"
            >
              <div className="container py-8">
                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {menuCategories.map((category) => (
                    <div key={category.title}>
                      <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-1">
                        {category.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={`block py-2 text-sm transition-colors border-l-2 pl-3 ${
                                pathname === link.href
                                  ? "text-[var(--accent-primary)] border-[var(--accent-primary)]"
                                  : "text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)] hover:border-[var(--border-default)]"
                              }`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Global Sites for Mobile */}
                <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] md:hidden">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                    関連サイト
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {globalSites.slice(1).map((site) => (
                      <a
                        key={site.name}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        {site.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
