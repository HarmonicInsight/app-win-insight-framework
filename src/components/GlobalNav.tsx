"use client";

import { useState } from "react";
import { SITES, CURRENT_SITE_ID } from "@/lib/navigation";

export function GlobalNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sites = SITES.filter((s) => s.showInGlobalNav).sort((a, b) => a.order - b.order);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-[60]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-10 text-xs">
          {/* Left: Brand + Nav */}
          <div className="flex items-center min-w-0">
            <span className="text-gray-400 tracking-wider font-medium whitespace-nowrap mr-2 sm:mr-3">
              Harmonic Insight
            </span>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex items-center">
              {sites.map((site, index) => (
                <span key={site.id} className="flex items-center">
                  {index === 0 && <span className="text-gray-700 mx-1">|</span>}
                  {site.id === CURRENT_SITE_ID ? (
                    <span className="text-white px-1.5 font-medium whitespace-nowrap">{site.name}</span>
                  ) : (
                    <a
                      href={site.url}
                      className="text-gray-400 hover:text-white px-1.5 transition-colors whitespace-nowrap"
                    >
                      {site.name}
                    </a>
                  )}
                  {index < sites.length - 1 && <span className="text-gray-700">|</span>}
                </span>
              ))}
            </nav>
          </div>

          {/* Right: CTA + Mobile Menu */}
          <div className="flex items-center">
            <a
              href="https://harmonic-insight-corporate.vercel.app/#contact"
              className="text-gray-400 hover:text-white transition-colors hidden sm:block whitespace-nowrap text-xs"
            >
              お問い合わせ →
            </a>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-1.5 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニュー"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-3 border-t border-gray-800">
            {sites.map((site) => (
              <a
                key={site.id}
                href={site.url}
                className={`block py-2.5 px-1 text-sm ${
                  site.id === CURRENT_SITE_ID
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {site.name}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-800">
              <a
                href="https://harmonic-insight-corporate.vercel.app/#contact"
                className="block py-2 px-1 text-sm text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GlobalNav;
