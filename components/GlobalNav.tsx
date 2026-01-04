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
          <div className="flex items-center overflow-x-auto">
            <span className="text-gray-400 tracking-wider font-medium whitespace-nowrap mr-3">
              Harmonic Insight
            </span>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <nav className="hidden sm:flex items-center">
              {sites.map((site, index) => (
                <span key={site.id} className="flex items-center whitespace-nowrap">
                  {site.id === CURRENT_SITE_ID ? (
                    <span className="text-white px-2 font-medium">{site.name}</span>
                  ) : (
                    <a href={site.url} className="text-gray-400 hover:text-white px-2 transition-colors">
                      {site.name}
                    </a>
                  )}
                  {index < sites.length - 1 && <span className="text-gray-700">|</span>}
                </span>
              ))}
            </nav>
          </div>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
            お問い合わせ →
          </a>
          <button className="sm:hidden p-1 text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden py-2 border-t border-gray-800">
            {sites.map((site) => (
              <a
                key={site.id}
                href={site.url}
                className={`block py-2 px-2 ${site.id === CURRENT_SITE_ID ? "text-white font-medium" : "text-gray-400"}`}
              >
                {site.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
