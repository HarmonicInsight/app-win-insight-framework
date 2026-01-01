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

/**
 * Harmonic Insight 共通ナビゲーション
 *
 * 使用方法:
 * 1. このファイルを src/components/common/ にコピー
 * 2. layout.tsx で import して使用
 * 3. currentSite prop で現在のサイトを指定
 *
 * 例: <SiteNavigation currentSite="construction-dx" />
 */

export type SiteId =
  | "corporate"
  | "construction-dx"
  | "insight-series"
  | "apps"
  | "framework"
  | "dashboard";

interface SiteNavigationProps {
  currentSite: SiteId;
  navLinks?: Array<{ name: string; href: string }>;
  ctaButton?: { text: string; href: string };
}

const sites = [
  {
    id: "corporate" as SiteId,
    name: "Home",
    url: "https://harmonic-insight-corporate.vercel.app/",
    icon: Home,
  },
  {
    id: "construction-dx" as SiteId,
    name: "建設DX",
    url: "https://const-dx-home.vercel.app/",
    icon: Building2,
  },
  {
    id: "insight-series" as SiteId,
    name: "Insight Series",
    url: "https://insight-series-site.vercel.app/",
    icon: Layers,
  },
  {
    id: "apps" as SiteId,
    name: "Apps",
    url: "https://h-insight-apps-portal.vercel.app/",
    icon: AppWindow,
  },
  {
    id: "framework" as SiteId,
    name: "Framework",
    url: "https://insight-framework.vercel.app/",
    icon: BookOpen,
  },
  {
    id: "dashboard" as SiteId,
    name: "Dashboard",
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

export function SiteNavigation({
  currentSite,
  navLinks = [],
  ctaButton
}: SiteNavigationProps) {
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

  const currentSiteInfo = siteLogos[currentSite];
  const LogoIcon = currentSiteInfo.icon;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-teal)] flex items-center justify-center">
                <LogoIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-[var(--text-primary)] hidden sm:block">
                {currentSiteInfo.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            {navLinks.length > 0 && (
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      pathname === link.href
                        ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Sites Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSitesMenuOpen(!isSitesMenuOpen)}
                  onBlur={() => setTimeout(() => setIsSitesMenuOpen(false), 150)}
                  className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
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
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-xl shadow-lg overflow-hidden"
                    >
                      {sites.map((site) => {
                        const Icon = site.icon;
                        const isCurrent = site.id === currentSite;
                        return isCurrent ? (
                          <div
                            key={site.name}
                            className="flex items-center gap-3 px-4 py-3 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {site.name}
                            </span>
                            <span className="ml-auto text-xs bg-[var(--accent-primary)]/20 px-2 py-0.5 rounded">
                              現在
                            </span>
                          </div>
                        ) : (
                          <a
                            key={site.name}
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{site.name}</span>
                            <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              {ctaButton && (
                <Link
                  href={ctaButton.href}
                  className="hidden sm:flex btn btn-primary text-sm"
                >
                  {ctaButton.text}
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors"
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
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
                {navLinks.length > 0 && (
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                          pathname === link.href
                            ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="my-6 border-t border-[var(--border-subtle)]" />

                {/* Sites */}
                <div className="space-y-1">
                  <p className="px-4 py-2 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    関連サイト
                  </p>
                  {sites.map((site) => {
                    const Icon = site.icon;
                    const isCurrent = site.id === currentSite;
                    return isCurrent ? (
                      <div
                        key={site.name}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{site.name}</span>
                      </div>
                    ) : (
                      <a
                        key={site.name}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{site.name}</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
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
      <div className="h-16 md:h-20" />
    </>
  );
}
