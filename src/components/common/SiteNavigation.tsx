"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// グローバルサイトリンク（上段バー）
const globalSites = [
  { name: "Harmonic Insight", url: "https://harmonic-insight-corporate.vercel.app/", current: false },
  { name: "Home", url: "https://harmonic-insight-corporate.vercel.app/", current: false },
  { name: "建設DX", url: "https://const-dx-home.vercel.app/", current: false },
  { name: "Insight Series", url: "https://insight-series-site.vercel.app/", current: false },
  { name: "Apps/Lab", url: "https://h-insight-apps-portal.vercel.app/", current: false },
  { name: "Dashboard", url: "https://app-web-insight-bi.vercel.app/", current: false },
];

// ローカルナビゲーション（下段）
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
      <div className="bg-[#1a1a1a] text-white">
        <div className="container">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-1">
              {globalSites.map((site, index) => (
                <span key={site.name} className="flex items-center">
                  {index > 0 && (
                    <span className="text-gray-500 mx-2">|</span>
                  )}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {site.name}
                  </a>
                </span>
              ))}
            </div>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              お問い合わせ
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - 下段メインナビ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[var(--bg-primary)] ${
          isScrolled ? "border-b border-[var(--border-subtle)] shadow-sm" : ""
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-14">
            {/* Site Name */}
            <Link href="/" className="text-xl font-medium text-[var(--text-primary)] tracking-wide">
              Insight Framework
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center">
              {navLinks.map((link, index) => (
                <span key={link.href} className="flex items-center">
                  {index > 0 && (
                    <span className="text-[var(--border-default)] mx-3">|</span>
                  )}
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      pathname === link.href
                        ? "text-[var(--accent-primary)] font-medium"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </span>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 xl:hidden"
            style={{ top: "96px" }}
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-0 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] shadow-lg"
            >
              <div className="container py-4">
                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-[var(--accent-primary)] bg-[var(--bg-accent)] border-l-2 border-[var(--accent-primary)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-[var(--border-subtle)]" />

                {/* Global Sites */}
                <p className="px-4 py-2 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                  関連サイト
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {globalSites.slice(1).map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                    >
                      {site.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-0" />
    </>
  );
}
