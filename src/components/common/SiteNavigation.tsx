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

// ローカルナビゲーション
const navLinks = [
  { name: "フレームワーク", href: "/framework" },
  { name: "定義集", href: "/definitions" },
  { name: "具体例", href: "/examples" },
  { name: "Pixie", href: "/pixie" },
  { name: "AI BPO", href: "/ai-bpo" },
  { name: "日本文化×KPI", href: "/japan-context" },
  { name: "ストーリー", href: "/stories" },
  { name: "人材マップ", href: "/skill-map" },
  { name: "note連載", href: "/note" },
  { name: "About", href: "/about" },
];

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
      <div className="bg-neutral-900 text-white text-sm">
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

      {/* Main Header - 下段メインヘッダー（建設DXスタイル） */}
      <header
        className={`sticky top-0 z-50 bg-[var(--bg-primary)] transition-shadow duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Site Name */}
            <Link
              href="/"
              className="text-2xl font-normal text-[var(--text-primary)] tracking-wide"
            >
              Insight Framework
            </Link>

            {/* Right Side: JP/EN style toggle (placeholder) + Menu */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="メニュー"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Desktop Menu Overlay */}
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
              <div className="container py-6">
                {/* Navigation Links - 2 columns on larger screens */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`py-3 text-sm transition-colors border-b border-transparent hover:border-[var(--accent-primary)] ${
                        pathname === link.href
                          ? "text-[var(--accent-primary)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Global Sites for Mobile */}
                <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] md:hidden">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                    関連サイト
                  </p>
                  <div className="flex flex-wrap gap-3">
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
