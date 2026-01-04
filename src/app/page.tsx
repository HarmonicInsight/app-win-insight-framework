"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - シンプルに */}
      <section className="py-24 md:py-40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-widest mb-6">
              AI時代の経営インフラ
            </p>
            <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] leading-relaxed mb-8">
              AIは、判断を代替しない。
              <br />
              <span className="text-[var(--accent-primary)]">
                判断の構造を、変える。
              </span>
            </h1>
            <p className="text-[var(--text-secondary)] leading-loose mb-12">
              ダッシュボードを作っても見られない。KPIを設定しても形骸化する。
              <br />
              原因は「意思決定の構造」にある。
              <br />
              AIを導入する前に、判断そのものを設計し直す。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
              >
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--border-default)] text-[var(--text-primary)] text-sm tracking-wide hover:border-[var(--text-primary)] transition-colors"
              >
                具体例で理解する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards - コンテンツへの導線 */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border-subtle)]">
            {/* 課題を知る */}
            <Link
              href="/challenges/kpi"
              className="bg-white p-12 hover:bg-neutral-50 transition-colors group"
            >
              <p className="text-xs text-[var(--text-muted)] tracking-widest mb-4">
                CHALLENGES
              </p>
              <h2 className="text-xl font-normal text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                課題を知る
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                なぜKPIは機能しないのか。
                <br />
                日本文化と意思決定の関係。
              </p>
            </Link>

            {/* フレームワーク */}
            <Link
              href="/framework"
              className="bg-white p-12 hover:bg-neutral-50 transition-colors group"
            >
              <p className="text-xs text-[var(--text-muted)] tracking-widest mb-4">
                FRAMEWORK
              </p>
              <h2 className="text-xl font-normal text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                意思決定を構造化する
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                意思決定Boxの4要素。
                <br />
                判断を再現可能にする方法。
              </p>
            </Link>

            {/* 実装する */}
            <Link
              href="/pixie"
              className="bg-white p-12 hover:bg-neutral-50 transition-colors group"
            >
              <p className="text-xs text-[var(--text-muted)] tracking-widest mb-4">
                IMPLEMENTATION
              </p>
              <h2 className="text-xl font-normal text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                実装する
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Pixieフレームワーク。
                <br />
                AI BPO方法論。
              </p>
            </Link>

            {/* 事例 */}
            <Link
              href="/stories"
              className="bg-white p-12 hover:bg-neutral-50 transition-colors group"
            >
              <p className="text-xs text-[var(--text-muted)] tracking-widest mb-4">
                STORIES
              </p>
              <h2 className="text-xl font-normal text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                事例を見る
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                建設・IT・コンサルの導入事例。
                <br />
                note連載。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-normal text-[var(--text-primary)] mb-6">
              AIを導入する前に、
              <br />
              判断を設計する。
            </h2>
            <p className="text-[var(--text-secondary)] mb-10">
              意思決定の構造を理解することで、
              <br />
              AIは初めて本当の力を発揮します。
            </p>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-primary)] text-white tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
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
