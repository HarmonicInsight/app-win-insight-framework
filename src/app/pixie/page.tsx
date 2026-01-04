"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FileJson,
  ArrowRight,
  RefreshCw,
  Users,
  Database,
  Bot,
  User,
  Cloud,
  CheckCircle2,
  XCircle,
  Package,
  FileOutput,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const promises = [
  {
    icon: RefreshCw,
    title: "再現性",
    description: "同じジョブ定義で、同じ構造の成果物が生成される",
    detail: "誰が実行しても、いつ実行しても、同じ品質の結果が得られます。",
  },
  {
    icon: Users,
    title: "差し替え可能性",
    description: "実行者（人間、AI、外部サービス）を容易に切り替え可能",
    detail: "今日は人間、明日はAI。ジョブ定義を変えずに実行者だけ変更できます。",
  },
  {
    icon: Database,
    title: "資産化",
    description: "すべての実行が記録され、後の監査・改善に活用できる",
    detail: "過去の判断と結果がすべてトレース可能。組織の知的資産として蓄積されます。",
  },
];

const executors = [
  { icon: User, name: "人間", description: "従来通りの担当者" },
  { icon: Bot, name: "AIエージェント", description: "Claude, GPT等" },
  { icon: Cloud, name: "外部サービス", description: "SaaS, API連携" },
];

const comparison = [
  {
    aspect: "管理対象",
    traditional: "タスク（何をするか）",
    pixie: "成果物（何を出すか）",
  },
  {
    aspect: "更新方法",
    traditional: "手動でステータス変更",
    pixie: "実行結果を自動記録",
  },
  {
    aspect: "実行者",
    traditional: "人間が前提",
    pixie: "人間・AI・外部サービスを選択可能",
  },
  {
    aspect: "再利用性",
    traditional: "同じタスクを毎回作成",
    pixie: "ジョブ定義を再利用",
  },
];

export default function PixiePage() {
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
            <span className="section-label">Pixie Framework</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Pixieフレームワーク
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              業務を「入力 → 処理 → 出力」の関数として捉え、
              <br className="hidden sm:block" />
              再現可能な成果物を生成する。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Core Concept</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              基本構造
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              Pixieは「ジョブ」を定義し、「成果物」を生成するシンプルな構造です。
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* job.json */}
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <FileJson className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">job.json</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-2">
                    ジョブ定義
                  </p>
                  <div className="mt-4 p-3 bg-[var(--bg-tertiary)] rounded-lg text-left">
                    <code className="text-xs text-[var(--text-secondary)]">
                      {`{
  "type": "report",
  "input": {...},
  "output": "analysis.pdf"
}`}
                    </code>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-[var(--text-muted)] rotate-90 md:rotate-0" />

                {/* Pixie */}
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-xl bg-[var(--accent-purple)]/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-[var(--accent-purple)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">Pixie</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-2">
                    実行者
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    {executors.map((executor) => {
                      const Icon = executor.icon;
                      return (
                        <div
                          key={executor.name}
                          className="p-2 bg-[var(--bg-tertiary)] rounded-lg"
                          title={executor.name}
                        >
                          <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-[var(--text-muted)] rotate-90 md:rotate-0" />

                {/* Output */}
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-xl bg-[var(--accent-green)]/10 flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-[var(--accent-green)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">成果物</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-2">
                    result.json + Artifact
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="p-2 bg-[var(--bg-tertiary)] rounded-lg">
                      <FileOutput className="w-5 h-5 text-[var(--text-muted)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Promises */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Promises</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              3つの約束
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {promises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <motion.div
                  key={promise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-[var(--accent-primary)] font-medium text-sm mb-3">
                    {promise.description}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {promise.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison with Task Management */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Comparison</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              従来のタスク管理との違い
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)]">
                    <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">
                      観点
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-[var(--text-muted)]">
                      従来のタスク管理
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-[var(--accent-primary)]">
                      Pixie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={
                        index < comparison.length - 1
                          ? "border-b border-[var(--border-subtle)]"
                          : ""
                      }
                    >
                      <td className="p-4 text-sm font-medium text-[var(--text-primary)]">
                        {row.aspect}
                      </td>
                      <td className="p-4 text-sm text-[var(--text-muted)]">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-[var(--accent-red)]" />
                          {row.traditional}
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)]" />
                          {row.pixie}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executors */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Executors</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              差し替え可能な実行者
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              ジョブ定義は同じ。実行者だけを状況に応じて切り替えられます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {executors.map((executor, index) => {
              const Icon = executor.icon;
              return (
                <motion.div
                  key={executor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)]">
                    {executor.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-2">
                    {executor.description}
                  </p>
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
            className="max-w-3xl mx-auto"
          >
            <div className="highlight-box">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                AI協働時代の業務設計
              </h3>
              <p className="text-[var(--text-secondary)]">
                Pixieフレームワークは、AIエージェントとの協働を前提とした業務設計を可能にします。
                属人的な業務を構造化し、実行者が誰（何）であっても同じ品質の成果物を得ることができます。
                今日は人間が実行し、明日はAIが実行する。そんな柔軟な業務運用を実現します。
              </p>
            </div>
          </motion.div>
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
              次のステップ
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              Pixieの考え方をBPO改革に応用したAI BPO方法論も確認してみましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/ai-bpo" className="btn btn-primary">
                AI BPO方法論
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/framework" className="btn btn-ghost">
                フレームワーク詳細
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
