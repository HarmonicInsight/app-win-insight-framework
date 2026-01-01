"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeftRight,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Globe,
  Heart,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Scale,
  Handshake,
  Clock,
  Layers,
} from "lucide-react";

const culturalDifferences = [
  {
    category: "成果の捉え方",
    western: {
      title: "結果重視",
      description: "数値化された目標の達成度で評価",
      icon: Target,
    },
    japanese: {
      title: "プロセス重視",
      description: "取り組み姿勢や改善努力も評価",
      icon: TrendingUp,
    },
  },
  {
    category: "責任の所在",
    western: {
      title: "個人責任",
      description: "個人の目標と評価が明確に紐づく",
      icon: Users,
    },
    japanese: {
      title: "集団責任",
      description: "チーム全体で成果を出す意識",
      icon: Handshake,
    },
  },
  {
    category: "時間軸",
    western: {
      title: "短期サイクル",
      description: "四半期ごとの厳格な評価",
      icon: Clock,
    },
    japanese: {
      title: "長期視点",
      description: "長期的な成長と関係性を重視",
      icon: Layers,
    },
  },
  {
    category: "コミュニケーション",
    western: {
      title: "明示的",
      description: "目標と期待を言語化して共有",
      icon: Globe,
    },
    japanese: {
      title: "暗黙的",
      description: "「空気を読む」文化、阿吽の呼吸",
      icon: Heart,
    },
  },
];

const kpiProblems = [
  {
    problem: "数字の独り歩き",
    description: "KPI達成が目的化し、本来の目標を見失う",
    example: "売上KPIを達成するために値引きしすぎて利益率が悪化",
  },
  {
    problem: "部分最適化",
    description: "自部門のKPIを追求し、全体最適が損なわれる",
    example: "営業がノルマ達成のために無理な受注、現場が疲弊",
  },
  {
    problem: "測定できるものだけを追う",
    description: "数値化しにくい重要な要素が軽視される",
    example: "顧客満足度より処理件数を優先、長期的な信頼を失う",
  },
  {
    problem: "形骸化",
    description: "設定したKPIが実態と乖離し、意味をなさなくなる",
    example: "年度初めに設定したKPIが、環境変化で的外れに",
  },
];

const japaneseKpiDesign = [
  {
    principle: "目的の共有から始める",
    description:
      "数字の前に「なぜこれが重要か」を全員で腹落ちさせる。日本の組織では、納得感がなければ形骸化する。",
    icon: Heart,
    color: "var(--accent-purple)",
  },
  {
    principle: "プロセス指標も設定する",
    description:
      "結果だけでなく、取り組みの質を測る指標も設ける。「頑張っている」を可視化する。",
    icon: TrendingUp,
    color: "var(--accent-primary)",
  },
  {
    principle: "チーム目標を重視する",
    description:
      "個人KPIだけでなく、チーム全体の成果を評価する仕組みを作る。協力を促進する設計。",
    icon: Users,
    color: "var(--accent-teal)",
  },
  {
    principle: "定期的な振り返りを組み込む",
    description:
      "KPIは固定ではなく、環境変化に応じて見直す。PDCAサイクルを制度化する。",
    icon: Scale,
    color: "var(--accent-orange)",
  },
  {
    principle: "対話の場を設ける",
    description:
      "数字だけで評価せず、1on1や面談で文脈を共有する。暗黙知を言語化する機会を作る。",
    icon: Handshake,
    color: "var(--accent-green)",
  },
];

export default function JapanContextPage() {
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

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
            <span className="section-label">Japan Context</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              日本文化と
              <span className="gradient-text">KPI</span>の関係
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
              欧米発のKPI手法をそのまま導入しても機能しない理由と、
              日本の組織文化に合った意思決定設計のあり方を考えます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cultural Differences */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Cultural Gap</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              欧米と日本の文化的差異
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              KPIは欧米の経営思想から生まれたもの。
              日本の組織文化との違いを理解することが、適切な運用の第一歩です。
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {culturalDifferences.map((diff, index) => {
              const WesternIcon = diff.western.icon;
              const JapaneseIcon = diff.japanese.icon;
              return (
                <motion.div
                  key={diff.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-center mb-4">
                    <span className="text-sm font-medium text-[var(--text-muted)]">
                      {diff.category}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    {/* Western */}
                    <div className="p-4 rounded-lg bg-[var(--bg-elevated)]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                          <WesternIcon className="w-4 h-4 text-[var(--accent-primary)]" />
                        </div>
                        <span className="text-xs text-[var(--text-muted)]">
                          欧米型
                        </span>
                      </div>
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        {diff.western.title}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                        {diff.western.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex justify-center">
                      <ArrowLeftRight className="w-6 h-6 text-[var(--text-subtle)]" />
                    </div>

                    {/* Japanese */}
                    <div className="p-4 rounded-lg bg-[var(--bg-elevated)]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center">
                          <JapaneseIcon className="w-4 h-4 text-[var(--accent-teal)]" />
                        </div>
                        <span className="text-xs text-[var(--text-muted)]">
                          日本型
                        </span>
                      </div>
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        {diff.japanese.title}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                        {diff.japanese.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KPI Problems in Japan */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Common Issues</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              日本企業でKPIが機能しない4つの理由
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {kpiProblems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() =>
                    setExpandedProblem(
                      expandedProblem === index ? null : index
                    )
                  }
                  className="card w-full text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-red)]/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-[var(--accent-red)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[var(--text-primary)]">
                          {item.problem}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 text-[var(--text-muted)] transition-transform ${
                            expandedProblem === index ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                        {item.description}
                      </p>

                      <AnimatePresence>
                        {expandedProblem === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 p-3 rounded-lg bg-[var(--accent-red)]/5 border border-[var(--accent-red)]/20">
                              <p className="text-sm text-[var(--text-secondary)]">
                                <strong className="text-[var(--accent-red)]">
                                  例：
                                </strong>
                                {item.example}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Japanese KPI Design Principles */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Solutions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              日本に合ったKPI設計の5原則
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              日本の組織文化を活かしながら、KPIを機能させるための設計原則。
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {japaneseKpiDesign.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        原則 {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-2">
                      {item.principle}
                    </h3>
                    <p className="text-[var(--text-secondary)] mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="card bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-purple)]/5 border-[var(--accent-primary)]/20">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  重要な視点
                </h3>
              </div>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  KPIが機能しないのは、日本の組織が「遅れている」からではありません。
                  欧米発のフレームワークを、文化的背景を考慮せずに導入したことが原因です。
                </p>
                <p>
                  日本の組織には、長期的な関係性を重視し、暗黙知を共有し、
                  全体最適を志向する強みがあります。
                  これらの強みを活かしながら、意思決定を「見える化」することが、
                  日本に合ったKPI設計のポイントです。
                </p>
                <div className="flex items-center gap-2 pt-4">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)]" />
                  <span className="font-medium text-[var(--text-primary)]">
                    Insight Frameworkは、この視点で設計されています
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              人材育成にも応用できる
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              意思決定の構造化は、個人のキャリア開発や組織の人材育成にも活用できます。
              人材マップで、能力と役割を可視化しましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/skill-map" className="btn btn-primary">
                人材マップを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/framework" className="btn btn-ghost">
                フレームワークに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
