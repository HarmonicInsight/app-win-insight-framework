"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  Network,
  Target,
  Zap,
} from "lucide-react";

const tabs = [
  { id: "two-phase", label: "2フェーズモデル", icon: GitBranch },
  { id: "decision-box", label: "意思決定Box", icon: Layers },
  { id: "isomorphism", label: "組織×PJの同型性", icon: Network },
];

export default function FrameworkPage() {
  const [activeTab, setActiveTab] = useState("two-phase");
  const [activePhase, setActivePhase] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-[var(--accent-primary)] tracking-[0.3em] mb-8">
              FRAMEWORK
            </p>
            <h1 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] leading-[1.8] mb-8">
              意思決定の構造を理解する
            </h1>
            <p className="text-sm text-[var(--text-secondary)] leading-[2]">
              組織の意思決定を科学的に分析し、改善するための
              <br />
              3つのモデルから構成されています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="container max-w-3xl px-6 md:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-[var(--accent-primary)] text-white"
                      : "text-[var(--text-secondary)] hover:bg-neutral-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl px-6 md:px-8">
          <AnimatePresence mode="wait">
            {activeTab === "two-phase" && (
              <motion.div
                key="two-phase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* 2フェーズモデル */}
                <div className="mb-16">
                  <h2 className="text-xl md:text-2xl font-normal text-[var(--text-primary)] mb-6">
                    2フェーズモデル
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                    目標設定（Phase 1）と達成手段の選択（Phase 2）を
                    <br />
                    明確に分離することで、意思決定の質を向上させます。
                  </p>
                </div>

                {/* Phase Toggle */}
                <div className="flex gap-4 mb-12">
                  <button
                    onClick={() => setActivePhase(1)}
                    className={`px-6 py-3 rounded-lg text-sm transition-all ${
                      activePhase === 1
                        ? "bg-[var(--accent-primary)] text-white"
                        : "bg-neutral-100 text-[var(--text-secondary)] hover:bg-neutral-200"
                    }`}
                  >
                    Phase 1: 目標設定
                  </button>
                  <button
                    onClick={() => setActivePhase(2)}
                    className={`px-6 py-3 rounded-lg text-sm transition-all ${
                      activePhase === 2
                        ? "bg-teal-600 text-white"
                        : "bg-neutral-100 text-[var(--text-secondary)] hover:bg-neutral-200"
                    }`}
                  >
                    Phase 2: 手段選択
                  </button>
                </div>

                {/* Phase Content */}
                <AnimatePresence mode="wait">
                  {activePhase === 1 ? (
                    <motion.div
                      key="phase1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-white border border-neutral-200 p-8 md:p-10"
                    >
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                          <Target className="w-6 h-6 text-[var(--accent-primary)]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-normal text-[var(--text-primary)]">
                            Phase 1: 目標設定
                          </h3>
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            What & Why - 何を達成するか、なぜ重要か
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          { title: "ビジョン・ミッション", desc: "組織の存在意義と長期的な方向性を定義する" },
                          { title: "戦略目標", desc: "中期的に達成すべき具体的な目標を設定する" },
                          { title: "KGI（重要目標達成指標）", desc: "目標達成を測定する定量的な指標を決める" },
                          { title: "優先順位", desc: "複数の目標間の重要度と優先順位を決定する" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-neutral-50">
                            <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 shrink-0" />
                            <div>
                              <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">
                                {item.title}
                              </h4>
                              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 p-6 rounded-lg bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/20">
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          <strong className="text-[var(--accent-primary)]">重要：</strong>{" "}
                          Phase 1では「手段」について議論しない。
                          まず「何を達成するか」を明確にする。
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="phase2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white border border-neutral-200 p-8 md:p-10"
                    >
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-lg bg-teal-600/10 flex items-center justify-center">
                          <Zap className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-normal text-[var(--text-primary)]">
                            Phase 2: 手段選択
                          </h3>
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            How - どのように達成するか
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          { title: "施策の洗い出し", desc: "目標達成に向けた複数の選択肢を検討する" },
                          { title: "リソース配分", desc: "人・モノ・金・時間をどう配分するか決める" },
                          { title: "KPI設定", desc: "施策の進捗を測定する先行指標を設定する" },
                          { title: "実行計画", desc: "具体的なアクションプランを策定する" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-neutral-50">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                            <div>
                              <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">
                                {item.title}
                              </h4>
                              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 p-6 rounded-lg bg-teal-600/5 border border-teal-600/20">
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          <strong className="text-teal-600">重要：</strong>{" "}
                          Phase 2では Phase 1で決めた目標を前提として進める。
                          目標に疑問が出たら、再度 Phase 1に戻る。
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {activeTab === "decision-box" && (
              <motion.div
                key="decision-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-16">
                  <h2 className="text-xl md:text-2xl font-normal text-[var(--text-primary)] mb-6">
                    意思決定Box
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                    すべての意思決定を5つの要素で構造化することで、
                    <br />
                    判断の質と透明性を高めます。
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Purpose", labelJa: "目的", desc: "この意思決定は何のためか？上位目標との接続。", color: "#8b5cf6" },
                    { label: "Question", labelJa: "問い", desc: "具体的に何を決めるのか？明確な判断基準。", color: "#8b6914" },
                    { label: "Input", labelJa: "入力", desc: "判断に必要な情報・データは何か？", color: "#0d9488" },
                    { label: "Options", labelJa: "選択肢", desc: "どんな選択肢があるか？それぞれの特徴。", color: "#ea580c" },
                    { label: "Output", labelJa: "出力", desc: "決定した内容と、次のアクション。", color: "#16a34a" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white border border-neutral-200 p-8"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: item.color }}
                        >
                          {item.label}
                        </span>
                        <span className="text-sm text-[var(--text-muted)]">
                          {item.labelJa}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "isomorphism" && (
              <motion.div
                key="isomorphism"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-16">
                  <h2 className="text-xl md:text-2xl font-normal text-[var(--text-primary)] mb-6">
                    組織 × PJ の同型性
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-[2]">
                    組織の年度計画とプロジェクト管理は、
                    <br />
                    同じ構造（意思決定Box）で理解できます。
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-white border border-neutral-200 p-8">
                    <h3 className="text-base font-normal text-[var(--text-primary)] mb-8">
                      組織の年度計画
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "Purpose", value: "経営理念・ビジョン" },
                        { label: "Question", value: "今期の重点目標は？" },
                        { label: "Input", value: "市場分析・財務状況" },
                        { label: "Options", value: "事業ポートフォリオ" },
                        { label: "Output", value: "年度計画・予算" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-3 border-b border-neutral-100 last:border-0">
                          <span className="text-sm text-[var(--accent-primary)]">{item.label}</span>
                          <span className="text-sm text-[var(--text-secondary)]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 p-8">
                    <h3 className="text-base font-normal text-[var(--text-primary)] mb-8">
                      プロジェクト管理
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "Purpose", value: "プロジェクト目的" },
                        { label: "Question", value: "何を作るか？" },
                        { label: "Input", value: "要件・リソース" },
                        { label: "Options", value: "技術選定・設計案" },
                        { label: "Output", value: "成果物・ドキュメント" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-3 border-b border-neutral-100 last:border-0">
                          <span className="text-sm text-teal-600">{item.label}</span>
                          <span className="text-sm text-[var(--text-secondary)]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container max-w-xl px-6 md:px-8 text-center">
          <h2 className="text-lg md:text-xl font-normal text-[var(--text-primary)] leading-[2] mb-10">
            実際の事例で理解を深める
          </h2>
          <Link
            href="/examples"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-primary)] text-white text-sm tracking-wide hover:bg-[var(--accent-primary-light)] transition-colors"
          >
            事例を見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
