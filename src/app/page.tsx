"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="container max-w-3xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[var(--text-muted)] tracking-[0.3em] mb-12">
              AI時代の経営インフラ
            </p>

            <h1 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] leading-[2] mb-12">
              AIは、判断を代替しない。
              <br />
              <span className="text-[var(--accent-primary)]">
                判断の構造を、変える。
              </span>
            </h1>

            <p className="text-sm text-[var(--text-secondary)] leading-[2.2] mb-16">
              ダッシュボードを作っても見られない。
              <br />
              KPIを設定しても形骸化する。
              <br />
              <br />
              原因は「意思決定の構造」にある。
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/framework"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
              >
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border-default)] text-[var(--text-primary)] text-sm tracking-wide hover:border-[var(--text-primary)] transition-colors"
              >
                具体例で理解する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container max-w-3xl px-6 md:px-8">
          <div className="space-y-6">
            {/* 課題を知る */}
            <Link
              href="/challenges/kpi"
              className="block bg-white p-8 md:p-10 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                CHALLENGES
              </p>
              <h2 className="text-base md:text-lg font-normal text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                課題を知る
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                なぜKPIは機能しないのか
              </p>
            </Link>

            {/* フレームワーク */}
            <Link
              href="/framework"
              className="block bg-white p-8 md:p-10 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                FRAMEWORK
              </p>
              <h2 className="text-base md:text-lg font-normal text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                意思決定を構造化する
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                意思決定Boxの4要素
              </p>
            </Link>

            {/* 実装する */}
            <Link
              href="/pixie"
              className="block bg-white p-8 md:p-10 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                IMPLEMENTATION
              </p>
              <h2 className="text-base md:text-lg font-normal text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                実装する
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Pixie / AI BPO
              </p>
            </Link>

            {/* 事例 */}
            <Link
              href="/examples"
              className="block bg-white p-8 md:p-10 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.3em] mb-4">
                STORIES
              </p>
              <h2 className="text-base md:text-lg font-normal text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                事例を見る
              </h2>
              <p className="text-sm text-[var(--text-secondary)]">
                建設・IT・コンサルの導入事例
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container max-w-xl px-6 md:px-8 text-center">
          <h2 className="text-lg md:text-xl font-normal text-[var(--text-primary)] leading-[2] mb-12">
            AIを導入する前に、
            <br />
            判断を設計する。
          </h2>
          <Link
            href="/framework"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
          >
            フレームワークを見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
