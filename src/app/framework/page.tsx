"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Zap } from "lucide-react";

export default function FrameworkPage() {
  const [activePhase, setActivePhase] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container max-w-2xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-[var(--accent-primary)] tracking-[0.3em] mb-12">
              FRAMEWORK
            </p>
            <h1 className="text-xl md:text-2xl font-normal text-[var(--text-primary)] leading-[2] mb-12">
              意思決定の構造を理解する
            </h1>
            <p className="text-sm text-[var(--text-secondary)] leading-[2.2]">
              組織の意思決定を科学的に分析し、
              <br />
              改善するためのフレームワーク。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2フェーズモデル */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container max-w-2xl px-8">
          <h2 className="text-lg font-normal text-[var(--text-primary)] mb-8">
            2フェーズモデル
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-[2.2] mb-16">
            目標設定と手段選択を分離することで、
            <br />
            意思決定の質を向上させます。
          </p>

          {/* Phase Toggle */}
          <div className="flex gap-4 mb-16">
            <button
              onClick={() => setActivePhase(1)}
              className={`px-6 py-4 text-sm transition-all ${
                activePhase === 1
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-white text-[var(--text-secondary)] border border-neutral-200"
              }`}
            >
              Phase 1
            </button>
            <button
              onClick={() => setActivePhase(2)}
              className={`px-6 py-4 text-sm transition-all ${
                activePhase === 2
                  ? "bg-teal-600 text-white"
                  : "bg-white text-[var(--text-secondary)] border border-neutral-200"
              }`}
            >
              Phase 2
            </button>
          </div>

          {/* Phase Content */}
          <AnimatePresence mode="wait">
            {activePhase === 1 ? (
              <motion.div
                key="phase1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-normal text-[var(--text-primary)] mb-2">
                      目標設定
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      何を達成するか
                    </p>
                  </div>
                </div>

                <ul className="space-y-8 text-sm text-[var(--text-secondary)] leading-[2]">
                  <li>ビジョン・ミッションの定義</li>
                  <li>戦略目標の設定</li>
                  <li>KGI（重要目標達成指標）の決定</li>
                  <li>優先順位の明確化</li>
                </ul>
              </motion.div>
            ) : (
              <motion.div
                key="phase2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-14 h-14 rounded-full bg-teal-600/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-normal text-[var(--text-primary)] mb-2">
                      手段選択
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      どう達成するか
                    </p>
                  </div>
                </div>

                <ul className="space-y-8 text-sm text-[var(--text-secondary)] leading-[2]">
                  <li>施策の洗い出し</li>
                  <li>リソース配分の決定</li>
                  <li>KPI設定</li>
                  <li>実行計画の策定</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 意思決定Box */}
      <section className="py-20 md:py-28">
        <div className="container max-w-2xl px-8">
          <h2 className="text-lg font-normal text-[var(--text-primary)] mb-8">
            意思決定Box
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-[2.2] mb-16">
            すべての意思決定を5つの要素で構造化。
          </p>

          <ul className="space-y-10">
            {[
              { label: "Purpose", desc: "何のための意思決定か" },
              { label: "Question", desc: "具体的に何を決めるか" },
              { label: "Input", desc: "判断に必要な情報" },
              { label: "Options", desc: "選択肢は何か" },
              { label: "Output", desc: "決定内容と次のアクション" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-8">
                <span className="text-sm text-[var(--accent-primary)] w-20 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container max-w-2xl px-8 text-center">
          <p className="text-base text-[var(--text-primary)] mb-12">
            実際の事例で理解を深める
          </p>
          <Link
            href="/examples"
            className="inline-flex items-center gap-3 px-8 py-5 bg-[var(--accent-primary)] text-white text-sm tracking-wide"
          >
            事例を見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
