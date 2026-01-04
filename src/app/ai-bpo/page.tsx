"use client";

import { motion } from "framer-motion";
import {
  Bot,
  ArrowRight,
  Workflow,
  MonitorOff,
  Users,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  Layers,
  Target,
  Zap,
  ClipboardList,
  Settings,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const changes = [
  {
    icon: Workflow,
    title: "自動化の拡大",
    subtitle: "承認・処理・ワークフローが消える",
    description:
      "人による画面判断プロセスが不要化。AIが判断し、人は例外対応に集中します。",
    color: "var(--accent-primary)",
  },
  {
    icon: MonitorOff,
    title: "UI簡素化",
    subtitle: "UIは「事実入力」と「結果モニター」だけ残る",
    description:
      "中間処理画面の廃止。入力と出力だけのシンプルなインターフェースへ。",
    color: "var(--accent-teal)",
  },
  {
    icon: Users,
    title: "人員配置の再考",
    subtitle: "人を前提条件ではなく、設計後の結果として判断",
    description:
      "まず業務を設計し、その後で必要な人員を配置。逆転の発想です。",
    color: "var(--accent-purple)",
  },
];

const methodology = [
  {
    phase: "Problem",
    title: "現行プロセスの限界診断",
    icon: AlertTriangle,
    description: "現行プロセスを踏襲することの限界を診断します。",
    items: [
      "現行フローの可視化",
      "ボトルネックの特定",
      "自動化可能領域の洗い出し",
    ],
  },
  {
    phase: "Method",
    title: "AI前提での再構築",
    icon: Settings,
    description: "Decision BoxとPixieを活用して業務を再設計します。",
    items: [
      "Actor定義（誰が/何が実行するか）",
      "Decision Box（判断の構造化）",
      "job.json（ジョブ定義）",
      "Artifact（成果物定義）",
    ],
  },
  {
    phase: "Fit Check",
    title: "適合条件の確認",
    icon: Target,
    description: "この方法論が適用可能かどうかを事前検証します。",
    items: ["適合条件の確認", "非適合条件の確認", "リスク評価"],
  },
  {
    phase: "Deliverables",
    title: "成果物の提示",
    icon: FileText,
    description: "実装に必要なドキュメントとテンプレートを提供します。",
    items: ["ヒアリングシート", "テンプレート", "ジョブ定義書"],
  },
];

const fitConditions = {
  fit: [
    "定型業務が多い",
    "判断基準が明文化できる",
    "例外処理のパターンが限定的",
    "データがデジタル化されている",
  ],
  notFit: [
    "高度な専門判断が必要",
    "対人コミュニケーションが中心",
    "判断基準が暗黙知に依存",
    "法規制でAI利用が制限",
  ],
};

export default function AIBPOPage() {
  return (
    <div className="bg-gradient-page">
      {/* Hero Section */}
      <section className="section bg-gradient-hero">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="section-label">AI BPO Methodology</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              AI BPO 新メソドロジー
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              AIで人を速くするのではなく、
              <br className="hidden sm:block" />
              AI前提で業務そのものを作り直す。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Message */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="highlight-box text-center">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                プロセス中心のBPOから、
                <span className="text-[var(--accent-primary)]">判断中心のAI BPO</span>
                へ
              </h2>
              <p className="text-[var(--text-secondary)] mt-4">
                従来のBPOは「プロセス」を外部委託しました。
                AI時代のBPOは「判断」を構造化し、人とAIで最適に分担します。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Changes */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Transformation</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              3つの変化
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {changes.map((change, index) => {
              const Icon = change.icon;
              return (
                <motion.div
                  key={change.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                  style={{
                    borderTopColor: change.color,
                    borderTopWidth: "3px",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${change.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: change.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                    {change.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: change.color }}
                  >
                    {change.subtitle}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {change.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UI-less Architecture */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Architecture</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              UI-less Business Architecture
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              画面レス業務アーキテクチャ。中間処理を廃止し、入力と出力だけを残します。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Before */}
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-[var(--accent-red)] mb-4">
                    従来
                  </h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-[var(--bg-tertiary)] rounded text-xs text-[var(--text-muted)]">
                      入力画面
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-[var(--text-muted)] rotate-90" />
                    <div className="p-2 bg-[var(--accent-red)]/10 rounded text-xs text-[var(--accent-red)]">
                      確認画面
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-[var(--text-muted)] rotate-90" />
                    <div className="p-2 bg-[var(--accent-red)]/10 rounded text-xs text-[var(--accent-red)]">
                      承認画面
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-[var(--text-muted)] rotate-90" />
                    <div className="p-2 bg-[var(--accent-red)]/10 rounded text-xs text-[var(--accent-red)]">
                      処理画面
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-[var(--text-muted)] rotate-90" />
                    <div className="p-2 bg-[var(--bg-tertiary)] rounded text-xs text-[var(--text-muted)]">
                      結果画面
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Zap className="w-8 h-8 text-[var(--accent-primary)]" />
                    <span className="text-sm font-medium text-[var(--accent-primary)] mt-2">
                      AI BPO
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-[var(--accent-green)] mb-4">
                    AI BPO後
                  </h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-[var(--accent-green)]/10 rounded text-sm text-[var(--accent-green)] font-medium">
                      事実入力
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-[var(--text-muted)] rotate-90" />
                    <div className="p-3 bg-[var(--accent-purple)]/10 rounded text-sm text-[var(--accent-purple)]">
                      <Bot className="w-4 h-4 mx-auto mb-1" />
                      AI処理
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-[var(--text-muted)] rotate-90" />
                    <div className="p-3 bg-[var(--accent-green)]/10 rounded text-sm text-[var(--accent-green)] font-medium">
                      結果モニター
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Methodology</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              4ステップ方法論
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {methodology.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-2 py-0.5 rounded">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="font-bold text-[var(--text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">
                        {step.description}
                      </p>
                      <ul className="space-y-1">
                        {step.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-[var(--text-muted)] flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-[var(--accent-primary)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Fit Check</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              適合条件
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              AI BPO方法論が適用可能かどうかを事前に確認しましょう。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Fit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="flex items-center gap-2 font-bold text-[var(--accent-green)] mb-4">
                <CheckCircle2 className="w-5 h-5" />
                適合する条件
              </h3>
              <ul className="space-y-2">
                {fitConditions.fit.map((condition, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0" />
                    {condition}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Fit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h3 className="flex items-center gap-2 font-bold text-[var(--accent-red)] mb-4">
                <XCircle className="w-5 h-5" />
                適合しない条件
              </h3>
              <ul className="space-y-2">
                {fitConditions.notFit.map((condition, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <XCircle className="w-4 h-4 text-[var(--accent-red)] shrink-0" />
                    {condition}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              AI時代の業務設計を始める
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              意思決定の構造化から始めて、AI BPOへと展開しましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/framework" className="btn btn-primary">
                フレームワーク詳細
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/definitions" className="btn btn-ghost">
                定義集を確認
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
