"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Building2,
  Layers,
  AppWindow,
  BookOpen,
  LayoutDashboard,
  Home,
} from "lucide-react";

const sites = [
  {
    name: "Home",
    url: "https://harmonic-insight-corporate.vercel.app/",
    icon: Home,
    current: false,
  },
  {
    name: "建設DX",
    url: "https://const-dx-home.vercel.app/",
    icon: Building2,
    current: false,
  },
  {
    name: "Insight Series",
    url: "https://insight-series-site.vercel.app/",
    icon: Layers,
    current: false,
  },
  {
    name: "Apps",
    url: "https://h-insight-apps-portal.vercel.app/",
    icon: AppWindow,
    current: false,
  },
  {
    name: "Framework",
    url: "/",
    icon: BookOpen,
    current: true,
  },
  {
    name: "Dashboard",
    url: "https://toko-bi.vercel.app/",
    icon: LayoutDashboard,
    current: false,
  },
];

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
  const [isSitesMenuOpen, setIsSitesMenuOpen] = useState(false);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]"
            : "bg-[var(--bg-primary)]"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <span className="text-lg font-medium text-[var(--text-primary)] tracking-wide">
                Insight Framework
              </span>
            </Link>

            {/* Desktop Navigation - 建設DXスタイル */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-[var(--accent-primary)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Sites Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSitesMenuOpen(!isSitesMenuOpen)}
                  onBlur={() => setTimeout(() => setIsSitesMenuOpen(false), 150)}
                  className="hidden md:flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>関連サイト</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSitesMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isSitesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] shadow-lg"
                    >
                      {sites.map((site) => {
                        const Icon = site.icon;
                        return site.current ? (
                          <div
                            key={site.name}
                            className="flex items-center gap-3 px-4 py-2.5 bg-[var(--bg-accent)] text-[var(--accent-primary)] border-l-2 border-[var(--accent-primary)]"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{site.name}</span>
                          </div>
                        ) : (
                          <a
                            key={site.name}
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2.5 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{site.name}</span>
                            <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
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
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[var(--bg-secondary)] border-l border-[var(--border-subtle)] overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2.5 text-sm transition-colors border-l-2 ${
                        pathname === link.href
                          ? "text-[var(--accent-primary)] border-[var(--accent-primary)] bg-[var(--bg-accent)]"
                          : "text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)] hover:border-[var(--border-default)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-[var(--border-subtle)]" />

                {/* Sites */}
                <div className="space-y-1">
                  <p className="px-3 py-2 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    関連サイト
                  </p>
                  {sites.map((site) => {
                    const Icon = site.icon;
                    return site.current ? (
                      <div
                        key={site.name}
                        className="flex items-center gap-3 px-3 py-2.5 text-[var(--accent-primary)] border-l-2 border-[var(--accent-primary)] bg-[var(--bg-accent)]"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{site.name}</span>
                      </div>
                    ) : (
                      <a
                        key={site.name}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 text-[var(--text-secondary)] border-l-2 border-transparent hover:text-[var(--text-primary)] hover:border-[var(--border-default)] transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{site.name}</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
