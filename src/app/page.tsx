"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - ゆったりと */}
      <section className="py-32 md:py-48">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[var(--text-muted)] tracking-[0.2em] mb-10">
              AI時代の経営インフラ
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--text-primary)] leading-[1.8] md:leading-[2] mb-16">
              AIは、判断を代替しない。
              <br />
              <span className="text-[var(--accent-primary)]">
                判断の構造を、変える。
              </span>
            </h1>

            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-[2.5] mb-16 max-w-xl">
              ダッシュボードを作っても見られない。
              <br className="hidden md:block" />
              KPIを設定しても形骸化する。
              <br />
              <br />
              原因は「意思決定の構造」にある。
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/framework"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
              >
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-[var(--border-default)] text-[var(--text-primary)] text-sm tracking-wide hover:border-[var(--text-primary)] transition-colors"
              >
                具体例で理解する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards - 大きな余白で見やすく */}
      <section className="py-32 bg-neutral-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 課題を知る */}
            <Link
              href="/challenges/kpi"
              className="block bg-white p-10 md:p-14 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] mb-6">
                CHALLENGES
              </p>
              <h2 className="text-lg md:text-xl font-normal text-[var(--text-primary)] mb-6 group-hover:text-[var(--accent-primary)] transition-colors">
                課題を知る
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                なぜKPIは機能しないのか
              </p>
            </Link>

            {/* フレームワーク */}
            <Link
              href="/framework"
              className="block bg-white p-10 md:p-14 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] mb-6">
                FRAMEWORK
              </p>
              <h2 className="text-lg md:text-xl font-normal text-[var(--text-primary)] mb-6 group-hover:text-[var(--accent-primary)] transition-colors">
                意思決定を構造化する
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                意思決定Boxの4要素
              </p>
            </Link>

            {/* 実装する */}
            <Link
              href="/pixie"
              className="block bg-white p-10 md:p-14 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] mb-6">
                IMPLEMENTATION
              </p>
              <h2 className="text-lg md:text-xl font-normal text-[var(--text-primary)] mb-6 group-hover:text-[var(--accent-primary)] transition-colors">
                実装する
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                Pixie / AI BPO
              </p>
            </Link>

            {/* 事例 */}
            <Link
              href="/examples"
              className="block bg-white p-10 md:p-14 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
            >
              <p className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] mb-6">
                STORIES
              </p>
              <h2 className="text-lg md:text-xl font-normal text-[var(--text-primary)] mb-6 group-hover:text-[var(--accent-primary)] transition-colors">
                事例を見る
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                建設・IT・コンサルの導入事例
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-normal text-[var(--text-primary)] leading-[2] mb-10">
              AIを導入する前に、
              <br />
              判断を設計する。
            </h2>
            <Link
              href="/framework"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
            >
              フレームワークを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
