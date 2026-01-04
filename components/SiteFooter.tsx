"use client";

import Link from "next/link";
import { SITES, CURRENT_SITE_ID } from "@/lib/navigation";

export function SiteFooter() {
  const sites = SITES.filter((s) => s.showInFooter).sort((a, b) => a.order - b.order);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-xs text-gray-500 mb-4 tracking-wider uppercase">Harmonic Insight Group</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {sites.map((site) => (
              <a
                key={site.id}
                href={site.url}
                className={`text-sm transition-colors ${
                  site.id === CURRENT_SITE_ID ? "text-white font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                {site.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Harmonic Insight LLC</p>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              プライバシー
            </Link>
            <Link href="/company" className="text-sm text-gray-400 hover:text-white transition-colors">
              会社概要
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
