"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Target,
  Users,
  Layers,
  ChevronRight,
  Lightbulb,
  BookOpen,
  Briefcase,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const axes = [
  {
    id: "scope",
    name: "スコープ軸",
    nameEn: "Scope",
    description: "意思決定の影響範囲",
    color: "var(--accent-primary)",
    levels: [
      {
        level: "自己",
        description: "自分の業務範囲の意思決定",
        examples: ["タスクの優先順位", "作業方法の選択"],
      },
      {
        level: "チーム",
        description: "チーム全体に影響する意思決定",
        examples: ["プロジェクト方針", "リソース配分"],
      },
      {
        level: "組織",
        description: "組織全体に影響する意思決定",
        examples: ["事業戦略", "組織構造"],
      },
      {
        level: "社会",
        description: "社会全体に影響する意思決定",
        examples: ["業界標準", "規制対応"],
      },
    ],
  },
  {
    id: "time",
    name: "時間軸",
    nameEn: "Time Horizon",
    description: "意思決定の時間的影響範囲",
    color: "var(--accent-teal)",
    levels: [
      {
        level: "即時",
        description: "数日〜数週間の影響",
        examples: ["日々のタスク", "緊急対応"],
      },
      {
        level: "短期",
        description: "数ヶ月〜1年の影響",
        examples: ["四半期計画", "プロジェクト"],
      },
      {
        level: "中期",
        description: "1〜3年の影響",
        examples: ["年度計画", "システム導入"],
      },
      {
        level: "長期",
        description: "3年以上の影響",
        examples: ["経営ビジョン", "人材育成"],
      },
    ],
  },
  {
    id: "complexity",
    name: "複雑性軸",
    nameEn: "Complexity",
    description: "意思決定の複雑さ・不確実性",
    color: "var(--accent-purple)",
    levels: [
      {
        level: "単純",
        description: "明確な正解がある問題",
        examples: ["ルーティン業務", "定型判断"],
      },
      {
        level: "複雑",
        description: "複数の要素を考慮する問題",
        examples: ["トレードオフ判断", "リスク評価"],
      },
      {
        level: "困難",
        description: "専門知識が必要な問題",
        examples: ["技術選定", "法務判断"],
      },
      {
        level: "混沌",
        description: "正解がない、前例のない問題",
        examples: ["新規事業", "危機対応"],
      },
    ],
  },
];

const careerLevels = [
  {
    level: "メンバー",
    icon: Users,
    color: "var(--accent-teal)",
    scope: "自己〜チーム",
    time: "即時〜短期",
    complexity: "単純〜複雑",
    focus: "自分の業務を確実に遂行し、チームに貢献する",
  },
  {
    level: "リーダー",
    icon: Briefcase,
    color: "var(--accent-primary)",
    scope: "チーム",
    time: "短期〜中期",
    complexity: "複雑〜困難",
    focus: "チームの成果を最大化し、メンバーを育成する",
  },
  {
    level: "マネージャー",
    icon: Target,
    color: "var(--accent-orange)",
    scope: "チーム〜組織",
    time: "中期〜長期",
    complexity: "困難〜混沌",
    focus: "組織目標を達成し、次世代リーダーを育てる",
  },
  {
    level: "エグゼクティブ",
    icon: TrendingUp,
    color: "var(--accent-purple)",
    scope: "組織〜社会",
    time: "長期",
    complexity: "混沌",
    focus: "組織の方向性を決め、社会に価値を提供する",
  },
];

const useCases = [
  {
    title: "キャリア開発計画",
    description:
      "現在の自分の位置と目指すポジションを可視化し、成長に必要なスキルを特定する",
    icon: Compass,
  },
  {
    title: "育成計画策定",
    description:
      "部下の現状と目標を3軸で把握し、適切な経験・研修を設計する",
    icon: BookOpen,
  },
  {
    title: "採用要件定義",
    description:
      "ポジションに必要な意思決定レベルを明確化し、適切な人材を採用する",
    icon: Users,
  },
  {
    title: "組織設計",
    description:
      "各役職の意思決定範囲を明確にし、権限委譲と責任を整理する",
    icon: Layers,
  },
];

export default function SkillMapPage() {
  const [activeAxis, setActiveAxis] = useState<string | null>(null);

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
            <span className="section-label">Skill Map</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              人材マップ
              <span className="gradient-text">3軸構造</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
              意思決定の「スコープ」「時間軸」「複雑性」の3軸で、
              人材の能力と役割を可視化します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Axes Explanation */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">3 Axes</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              3つの軸
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              意思決定能力を測る3つの軸。
              それぞれの軸でレベルが上がるほど、より大きな意思決定ができるようになります。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {axes.map((axis, index) => (
              <motion.div
                key={axis.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() =>
                    setActiveAxis(activeAxis === axis.id ? null : axis.id)
                  }
                  className="card w-full text-left h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${axis.color}15` }}
                    >
                      <Compass
                        className="w-6 h-6"
                        style={{ color: axis.color }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">
                        {axis.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {axis.nameEn}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {axis.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: axis.color }}>
                    詳細を見る
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeAxis === axis.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {activeAxis === axis.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                          <div className="space-y-3">
                            {axis.levels.map((level, levelIndex) => (
                              <div
                                key={level.level}
                                className="p-3 rounded-lg bg-[var(--bg-elevated)]"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <span
                                    className="text-xs font-semibold px-2 py-0.5 rounded"
                                    style={{
                                      backgroundColor: `${axis.color}15`,
                                      color: axis.color,
                                    }}
                                  >
                                    Lv.{levelIndex + 1}
                                  </span>
                                  <span className="font-medium text-[var(--text-primary)]">
                                    {level.level}
                                  </span>
                                </div>
                                <p className="text-xs text-[var(--text-muted)]">
                                  {level.description}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {level.examples.map((ex) => (
                                    <span
                                      key={ex}
                                      className="text-xs px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                                    >
                                      {ex}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Levels */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Career Levels</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              キャリアレベルと3軸の関係
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              各キャリアレベルで求められる意思決定の範囲を3軸で表現。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {careerLevels.map((career, index) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={career.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${career.color}15` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: career.color }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                    {career.level}
                  </h3>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent-primary)]">
                        スコープ:
                      </span>
                      <span className="text-[var(--text-secondary)]">
                        {career.scope}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent-teal)]">
                        時間軸:
                      </span>
                      <span className="text-[var(--text-secondary)]">
                        {career.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent-purple)]">
                        複雑性:
                      </span>
                      <span className="text-[var(--text-secondary)]">
                        {career.complexity}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      {career.focus}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Use Cases</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              活用方法
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              人材マップは、個人のキャリア開発から組織設計まで、
              さまざまな場面で活用できます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      {useCase.description}
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
            <div className="card bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-teal)]/5 border-[var(--accent-primary)]/20">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  人材マップの本質
                </h3>
              </div>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  人材マップは、単なるスキル評価ツールではありません。
                  「どのような意思決定ができるか」という観点で人材を捉えることで、
                  適切な役割分担と育成計画が可能になります。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-1 shrink-0" />
                    <span>
                      スキルではなく「意思決定力」で人材を評価する
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-1 shrink-0" />
                    <span>
                      キャリアパスが「意思決定範囲の拡大」として明確になる
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-1 shrink-0" />
                    <span>
                      育成は「次のレベルの意思決定を経験させる」ことになる
                    </span>
                  </li>
                </ul>
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
              noteで詳しく解説しています
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              人材マップの詳細な使い方や、実際の組織での活用事例を
              noteの連載で公開しています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/note" className="btn btn-primary">
                連載を読む
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
