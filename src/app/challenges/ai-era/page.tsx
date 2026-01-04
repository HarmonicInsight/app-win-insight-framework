"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Zap, Users } from "lucide-react";

const shifts = [
  {
    number: "01",
    before: "AIが判断を代替する",
    after: "AIが判断の材料を整える",
    description: "AIは判断そのものを行うのではなく、判断に必要なインプットを高速・高精度に準備する。最終判断は人間が行う。",
  },
  {
    number: "02",
    before: "AIツールを導入する",
    after: "AI前提で業務を設計する",
    description: "既存業務にAIを追加するのではなく、AIが存在することを前提に業務フローそのものを再設計する。",
  },
  {
    number: "03",
    before: "人間の仕事が減る",
    after: "人間の判断が増える",
    description: "定型作業はAIに移行し、人間はより多くの判断・意思決定に時間を使えるようになる。",
  },
];

const implications = [
  {
    icon: Brain,
    title: "判断の構造化が必須に",
    description: "AIに渡すインプットを定義するため、判断の構造を明示的に設計する必要がある。",
  },
  {
    icon: Zap,
    title: "判断速度の加速",
    description: "AIがインプット準備を高速化することで、判断のサイクルタイムが劇的に短縮される。",
  },
  {
    icon: Users,
    title: "判断の民主化",
    description: "専門家の暗黙知がAIを通じて構造化され、より多くの人が質の高い判断を行えるようになる。",
  },
  {
    icon: Bot,
    title: "人とAIの役割分担",
    description: "「何を判断するか」は人間、「判断材料の準備」はAI。明確な役割分担が生産性を最大化する。",
  },
];

export default function AIEraChallengePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-4">
              課題を知る
            </p>
            <h1 className="text-3xl md:text-4xl font-normal text-[var(--text-primary)] leading-tight mb-6">
              AI時代の判断とは
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              AIは判断を代替しない。判断の構造を変える。
              <br />
              AI時代に求められるのは、判断そのものの再設計である。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-12 bg-neutral-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              「AIを使いこなす」のではなく、
              <br />
              「AIと共に判断する」時代へ。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Paradigm Shifts */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-2">
              PARADIGM SHIFT
            </p>
            <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)]">
              3つのパラダイムシフト
            </h2>
          </motion.div>

          <div className="space-y-6">
            {shifts.map((shift, index) => (
              <motion.div
                key={shift.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-[var(--border-subtle)] bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="text-3xl font-light text-[var(--accent-primary)]">
                    {shift.number}
                  </span>
                  <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="p-4 bg-neutral-100">
                      <p className="text-xs text-[var(--text-muted)] mb-1">BEFORE</p>
                      <p className="text-[var(--text-secondary)] line-through decoration-red-400">
                        {shift.before}
                      </p>
                    </div>
                    <div className="p-4 bg-[var(--bg-accent)]">
                      <p className="text-xs text-[var(--accent-primary)] mb-1">AFTER</p>
                      <p className="text-[var(--text-primary)] font-medium">
                        {shift.after}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-4 md:ml-16">
                  {shift.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implications */}
      <section className="py-16 bg-neutral-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-2">
              IMPLICATIONS
            </p>
            <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)]">
              AI時代に必要なこと
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {implications.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white border border-[var(--border-subtle)]"
                >
                  <Icon className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                  <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Framework Connection */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-4">
              OUR APPROACH
            </p>
            <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] mb-6">
              意思決定Boxで、AI時代の判断を設計する
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              意思決定Boxは、判断を4つの要素（インプット・コンディション・選択肢・アウトプット）に分解します。
              この構造化により、AIに任せる部分と人間が判断する部分を明確に分離できます。
            </p>
            <div className="p-6 bg-neutral-100 border-l-2 border-[var(--accent-primary)]">
              <p className="text-[var(--text-primary)] font-medium mb-2">
                AIが担う領域
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                インプットの収集・整理、選択肢の列挙、過去事例の検索
              </p>
              <p className="text-[var(--text-primary)] font-medium mb-2">
                人間が担う領域
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                コンディション（優先順位）の設定、最終的なアウトプット（決定）の選択
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-normal mb-4">
              AI時代の意思決定を始める
            </h2>
            <p className="text-neutral-400 mb-8">
              まずは意思決定Boxの構造を理解し、あなたの組織の判断を設計してみてください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-primary-light)] transition-colors"
              >
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pixie"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-white font-medium hover:border-white transition-colors"
              >
                Pixieフレームワーク
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
