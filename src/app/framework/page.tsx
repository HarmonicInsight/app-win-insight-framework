"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ChevronDown,
  Circle,
  GitBranch,
  HelpCircle,
  Layers,
  Lightbulb,
  List,
  Network,
  Target,
  Users,
  Zap,
} from "lucide-react";

const tabs = [
  { id: "two-phase", label: "2フェーズモデル", icon: GitBranch },
  { id: "decision-box", label: "意思決定Box", icon: Layers },
  { id: "isomorphism", label: "組織×PJの同型性", icon: Network },
];

const decisionBoxElements = [
  {
    id: "purpose",
    label: "Purpose",
    labelJa: "目的",
    description: "この意思決定は何のためか？上位目標との接続。",
    color: "var(--accent-purple)",
    icon: Target,
  },
  {
    id: "question",
    label: "Question",
    labelJa: "問い",
    description: "具体的に何を決めるのか？明確な判断基準。",
    color: "var(--accent-primary)",
    icon: HelpCircle,
  },
  {
    id: "input",
    label: "Input",
    labelJa: "入力",
    description: "判断に必要な情報・データは何か？",
    color: "var(--accent-teal)",
    icon: List,
  },
  {
    id: "options",
    label: "Options",
    labelJa: "選択肢",
    description: "どんな選択肢があるか？それぞれの特徴。",
    color: "var(--accent-orange)",
    icon: Lightbulb,
  },
  {
    id: "output",
    label: "Output",
    labelJa: "出力",
    description: "決定した内容と、次のアクション。",
    color: "var(--accent-green)",
    icon: Zap,
  },
];

export default function FrameworkPage() {
  const [activeTab, setActiveTab] = useState("two-phase");
  const [activePhase, setActivePhase] = useState<1 | 2>(1);
  const [activeBoxElement, setActiveBoxElement] = useState<string | null>(null);

  return (
    <div className="bg-gradient-page min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="section-label">Framework</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              意思決定の構造を理解する
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
              Insight Frameworkは、組織の意思決定を科学的に分析し、
              改善するための3つのモデルから構成されています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 md:top-20 z-30 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-[var(--accent-primary)] text-white"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
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
      <section className="section">
        <div className="container">
          <AnimatePresence mode="wait">
            {activeTab === "two-phase" && (
              <motion.div
                key="two-phase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                id="two-phase"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                      2フェーズモデル
                    </h2>
                    <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
                      目標設定（Phase 1）と達成手段の選択（Phase 2）を明確に分離することで、
                      意思決定の質を向上させます。
                    </p>
                  </div>

                  {/* Phase Toggle */}
                  <div className="flex justify-center gap-4 mb-8">
                    <button
                      onClick={() => setActivePhase(1)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        activePhase === 1
                          ? "bg-[var(--accent-primary)] text-white shadow-[var(--shadow-glow)]"
                          : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
                      }`}
                    >
                      Phase 1: 目標設定
                    </button>
                    <button
                      onClick={() => setActivePhase(2)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        activePhase === 2
                          ? "bg-[var(--accent-teal)] text-white"
                          : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
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
                        className="card"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                            <Target className="w-5 h-5 text-[var(--accent-primary)]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                              Phase 1: 目標設定
                            </h3>
                            <p className="text-sm text-[var(--text-muted)]">
                              What & Why - 何を達成するか、なぜ重要か
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            {
                              title: "ビジョン・ミッション",
                              desc: "組織の存在意義と長期的な方向性を定義する",
                            },
                            {
                              title: "戦略目標",
                              desc: "中期的に達成すべき具体的な目標を設定する",
                            },
                            {
                              title: "KGI（重要目標達成指標）",
                              desc: "目標達成を測定する定量的な指標を決める",
                            },
                            {
                              title: "優先順位",
                              desc: "複数の目標間の重要度と優先順位を決定する",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-elevated)]"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 shrink-0" />
                              <div>
                                <h4 className="font-medium text-[var(--text-primary)]">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-[var(--text-muted)]">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 rounded-lg bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/20">
                          <p className="text-sm text-[var(--text-secondary)]">
                            <strong className="text-[var(--accent-primary)]">
                              重要なポイント：
                            </strong>{" "}
                            Phase 1では「手段」について議論しない。
                            まず「何を達成するか」を明確にすることで、
                            後の手段選択がブレなくなる。
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="phase2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="card"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-[var(--accent-teal)]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                              Phase 2: 手段選択
                            </h3>
                            <p className="text-sm text-[var(--text-muted)]">
                              How - どのように達成するか
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            {
                              title: "施策の洗い出し",
                              desc: "目標達成に向けた複数の選択肢を検討する",
                            },
                            {
                              title: "リソース配分",
                              desc: "人・モノ・金・時間をどう配分するか決める",
                            },
                            {
                              title: "KPI設定",
                              desc: "施策の進捗を測定する先行指標を設定する",
                            },
                            {
                              title: "実行計画",
                              desc: "具体的なアクションプランとスケジュールを策定する",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-elevated)]"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[var(--accent-teal)] mt-0.5 shrink-0" />
                              <div>
                                <h4 className="font-medium text-[var(--text-primary)]">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-[var(--text-muted)]">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 rounded-lg bg-[var(--accent-teal)]/5 border border-[var(--accent-teal)]/20">
                          <p className="text-sm text-[var(--text-secondary)]">
                            <strong className="text-[var(--accent-teal)]">
                              重要なポイント：
                            </strong>{" "}
                            Phase 2では Phase 1で決めた目標を前提として進める。
                            目標に疑問が出たら、再度 Phase 1に戻る勇気を持つ。
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Flow Diagram */}
                  <div className="mt-12 flex flex-col items-center gap-4">
                    <div
                      className={`card text-center transition-all ${
                        activePhase === 1
                          ? "border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-[var(--accent-primary)]">
                        Phase 1
                      </span>
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        目標設定
                      </h4>
                    </div>
                    <ArrowDown className="w-6 h-6 text-[var(--text-muted)]" />
                    <div
                      className={`card text-center transition-all ${
                        activePhase === 2
                          ? "border-[var(--accent-teal)] ring-2 ring-[var(--accent-teal)]/20"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-[var(--accent-teal)]">
                        Phase 2
                      </span>
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        手段選択
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "decision-box" && (
              <motion.div
                key="decision-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                id="decision-box"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                      意思決定Box
                    </h2>
                    <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
                      すべての意思決定を5つの要素で構造化することで、
                      判断の質と透明性を高めます。
                    </p>
                  </div>

                  {/* Interactive Box Diagram */}
                  <div className="card p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {decisionBoxElements.map((element) => {
                        const Icon = element.icon;
                        const isActive = activeBoxElement === element.id;
                        return (
                          <button
                            key={element.id}
                            onClick={() =>
                              setActiveBoxElement(
                                isActive ? null : element.id
                              )
                            }
                            className={`p-4 rounded-xl text-center transition-all ${
                              isActive
                                ? "ring-2 scale-105"
                                : "hover:scale-102"
                            }`}
                            style={{
                              backgroundColor: `${element.color}15`,
                              borderColor: isActive
                                ? element.color
                                : "transparent",
                              boxShadow: isActive
                                ? `0 0 20px ${element.color}30`
                                : "none",
                            }}
                          >
                            <div
                              className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                              style={{ backgroundColor: `${element.color}20` }}
                            >
                              <Icon
                                className="w-5 h-5"
                                style={{ color: element.color }}
                              />
                            </div>
                            <div
                              className="font-semibold text-sm"
                              style={{ color: element.color }}
                            >
                              {element.label}
                            </div>
                            <div className="text-xs text-[var(--text-muted)]">
                              {element.labelJa}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Element Detail */}
                    <AnimatePresence>
                      {activeBoxElement && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 p-4 rounded-lg bg-[var(--bg-elevated)]">
                            {decisionBoxElements
                              .filter((e) => e.id === activeBoxElement)
                              .map((element) => (
                                <div key={element.id}>
                                  <h4
                                    className="font-semibold mb-2"
                                    style={{ color: element.color }}
                                  >
                                    {element.label}（{element.labelJa}）
                                  </h4>
                                  <p className="text-[var(--text-secondary)]">
                                    {element.description}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Example */}
                  <div className="card">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                      例：新規システム導入の判断
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          element: decisionBoxElements[0],
                          example: "業務効率化による残業時間削減",
                        },
                        {
                          element: decisionBoxElements[1],
                          example: "A社のシステムを導入すべきか？",
                        },
                        {
                          element: decisionBoxElements[2],
                          example:
                            "現在の業務フロー、予算、競合製品比較",
                        },
                        {
                          element: decisionBoxElements[3],
                          example:
                            "A社導入 / B社導入 / 内製開発 / 現状維持",
                        },
                        {
                          element: decisionBoxElements[4],
                          example:
                            "A社システムを導入、来月からトライアル開始",
                        },
                      ].map(({ element, example }) => {
                        const Icon = element.icon;
                        return (
                          <div
                            key={element.id}
                            className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-elevated)]"
                          >
                            <Icon
                              className="w-4 h-4 mt-1 shrink-0"
                              style={{ color: element.color }}
                            />
                            <div>
                              <span
                                className="text-sm font-medium"
                                style={{ color: element.color }}
                              >
                                {element.label}:
                              </span>
                              <span className="text-sm text-[var(--text-secondary)] ml-2">
                                {example}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "isomorphism" && (
              <motion.div
                key="isomorphism"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                id="isomorphism"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                      組織 × PJ の同型性
                    </h2>
                    <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
                      組織の年度計画とプロジェクト管理は、
                      同じ構造（意思決定Box）で理解できます。
                    </p>
                  </div>

                  {/* Comparison Diagram */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="card">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[var(--accent-primary)]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                          組織の年度計画
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: "Purpose", value: "経営理念・ビジョン" },
                          { label: "Question", value: "今期の重点目標は？" },
                          { label: "Input", value: "市場分析・財務状況" },
                          { label: "Options", value: "事業ポートフォリオ" },
                          { label: "Output", value: "年度計画・予算" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex justify-between items-center p-2 rounded bg-[var(--bg-elevated)]"
                          >
                            <span className="text-sm text-[var(--accent-primary)]">
                              {item.label}
                            </span>
                            <span className="text-sm text-[var(--text-secondary)]">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="card">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                          <Network className="w-5 h-5 text-[var(--accent-teal)]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                          プロジェクト管理
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: "Purpose", value: "プロジェクト目的" },
                          { label: "Question", value: "何を作るか？" },
                          { label: "Input", value: "要件・リソース" },
                          { label: "Options", value: "技術選定・設計案" },
                          { label: "Output", value: "成果物・ドキュメント" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex justify-between items-center p-2 rounded bg-[var(--bg-elevated)]"
                          >
                            <span className="text-sm text-[var(--accent-teal)]">
                              {item.label}
                            </span>
                            <span className="text-sm text-[var(--text-secondary)]">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Insight */}
                  <div className="card bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-teal)]/5 border-[var(--accent-primary)]/20">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                      同型性の意味
                    </h3>
                    <div className="space-y-4 text-[var(--text-secondary)]">
                      <p>
                        組織運営もプロジェクト管理も、本質的には同じ「意思決定の連鎖」です。
                        スケールが異なるだけで、必要な思考プロセスは共通しています。
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-1 shrink-0" />
                          <span>
                            組織で学んだ意思決定スキルは、プロジェクトでも活かせる
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-1 shrink-0" />
                          <span>
                            プロジェクトでの経験は、組織運営の視座を高める
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-1 shrink-0" />
                          <span>
                            同じフレームワークで、異なるレベルの意思決定を整理できる
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              実際の事例で理解を深める
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              建設会社、システム導入プロジェクト、コンサルティング会社の
              3つのストーリーで、フレームワークの活用方法を見てみましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/stories" className="btn btn-primary">
                ストーリーを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/japan-context" className="btn btn-ghost">
                日本文化との関係
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
