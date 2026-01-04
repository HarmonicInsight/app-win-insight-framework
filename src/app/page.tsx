"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-32 md:pt-20 md:pb-48">
        <div className="container max-w-2xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[var(--text-muted)] tracking-[0.3em] mb-16">
              AI時代の経営インフラ
            </p>

            <h1 className="text-xl md:text-2xl font-normal text-[var(--text-primary)] leading-[2.2] mb-20">
              AIは、判断を代替しない。
              <br />
              <span className="text-[var(--accent-primary)]">
                判断の構造を、変える。
              </span>
            </h1>

            <p className="text-sm text-[var(--text-secondary)] leading-[2.4] mb-20">
              ダッシュボードを作っても見られない。
              <br />
              KPIを設定しても形骸化する。
            </p>

            <p className="text-sm text-[var(--text-secondary)] leading-[2.4] mb-20">
              原因は「意思決定の構造」にある。
            </p>

            <Link
              href="/framework"
              className="inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
            >
              フレームワークを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="container max-w-2xl px-8">
          <nav className="space-y-12">
            <Link href="/challenges/kpi" className="block group">
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                CHALLENGES
              </p>
              <p className="text-base text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                課題を知る
              </p>
            </Link>

            <div className="border-t border-neutral-200" />

            <Link href="/framework" className="block group">
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                FRAMEWORK
              </p>
              <p className="text-base text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                意思決定を構造化する
              </p>
            </Link>

            <div className="border-t border-neutral-200" />

            <Link href="/pixie" className="block group">
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                IMPLEMENTATION
              </p>
              <p className="text-base text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                実装する
              </p>
            </Link>

            <div className="border-t border-neutral-200" />

            <Link href="/examples" className="block group">
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                STORIES
              </p>
              <p className="text-base text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                事例を見る
              </p>
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
