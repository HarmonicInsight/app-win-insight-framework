"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Eye,
  GitBranch,
  Box,
  ArrowRight,
  Lightbulb,
  Scale,
  Layers,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const definitions = [
  {
    id: "decision",
    term: "判断",
    english: "Decision",
    icon: GitBranch,
    definition: "複数の選択肢から一つを選ぶ「点」",
    description:
      "判断は外部に結果を生む行為です。思考や分析とは異なり、必ず一つの選択肢を選ぶことで完了します。判断なき分析は価値を生みません。",
    keyPoints: [
      "選択肢から一つを選ぶ行為",
      "外部に結果を生む",
      "思考・分析とは異なる",
    ],
  },
  {
    id: "decision-making",
    term: "意思決定",
    english: "Decision Making",
    icon: Layers,
    definition: "判断に至る「過程全体」を示す線",
    description:
      "意思決定は、情報収集から判断、そして実行までの一連のプロセスを指します。判断が「点」なら、意思決定は「線」です。",
    keyPoints: [
      "情報収集→分析→判断→実行",
      "プロセス全体を指す",
      "再現可能な構造化が重要",
    ],
  },
  {
    id: "problem",
    term: "問題",
    english: "Problem",
    icon: Target,
    definition: "理想と現実の間に存在する差分",
    description:
      "問題は主観的な感情ではなく、測定可能な「距離」として捉えます。理想を言語化し、現実を観測することで、初めて問題が定義されます。",
    keyPoints: [
      "理想と現実のギャップ",
      "測定可能な距離",
      "感情ではなく事実ベース",
    ],
  },
  {
    id: "ideal",
    term: "理想",
    english: "Ideal State",
    icon: Lightbulb,
    definition: "こうあるべき状態を言語化したもの",
    description:
      "理想は曖昧な夢や希望ではありません。具体的に言語化され、他者と共有可能な「あるべき姿」です。理想なき改善は方向を見失います。",
    keyPoints: [
      "具体的に言語化された目標",
      "共有可能な基準",
      "曖昧な夢とは異なる",
    ],
  },
  {
    id: "reality",
    term: "現実",
    english: "Current State",
    icon: Eye,
    definition: "観測可能な事実",
    description:
      "現実は共有可能な基準点です。観測できないものは現実ではありません。データ、証拠、観察によって確認された事実のみが現実です。",
    keyPoints: [
      "観測可能な事実のみ",
      "共有可能な基準点",
      "推測や憶測は含まない",
    ],
  },
];

const boxElements = [
  {
    name: "インプット",
    english: "Input",
    description: "判断の材料となるすべての情報・事実・素材",
    note: "網羅的に集める。足りない情報は判断を歪める。",
    color: "var(--accent-primary)",
  },
  {
    name: "コンディション",
    english: "Condition",
    description: "変更不可能な制約と、その判断における優先順位",
    note: "制約は事実。優先順位は意思。両者を分けて考える。",
    color: "var(--accent-teal)",
  },
  {
    name: "選択肢",
    english: "Options",
    description: "コンディションを通過した、選びうるすべての実行可能案",
    note: "有限に絞る。無限の選択肢は選択を不可能にする。",
    color: "var(--accent-purple)",
  },
  {
    name: "アウトプット",
    english: "Output",
    description: "選択肢の中から選ばれた、たった一つの決定事項",
    note: "名詞で表現する。動詞は曖昧さを残す。",
    color: "var(--accent-green)",
  },
];

export default function DefinitionsPage() {
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
            <span className="section-label">Definitions</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              定義集
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              意思決定を構造化するための基本概念を定義します。
              <br className="hidden sm:block" />
              共通言語なくして、共通理解なし。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Definitions */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Core Concepts</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              基本概念
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {definitions.map((def, index) => {
              const Icon = def.icon;
              return (
                <motion.div
                  key={def.id}
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
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">
                          {def.term}
                        </h3>
                        <span className="text-sm text-[var(--text-muted)]">
                          {def.english}
                        </span>
                      </div>
                      <p className="text-lg text-[var(--accent-primary)] font-medium mb-3">
                        「{def.definition}」
                      </p>
                      <p className="text-[var(--text-secondary)] mb-4">
                        {def.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {def.keyPoints.map((point, i) => (
                          <span
                            key={i}
                            className="text-sm px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] rounded-full"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decision Box Definition */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Decision Box</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              意思決定Boxの構成要素
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              すべての判断は、この4つの要素で構造化できます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {boxElements.map((element, index) => (
              <motion.div
                key={element.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ borderLeftColor: element.color, borderLeftWidth: "3px" }}
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {element.name}
                  </h3>
                  <span className="text-sm text-[var(--text-muted)]">
                    {element.english}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-3">
                  {element.description}
                </p>
                <p className="text-sm text-[var(--text-muted)] italic">
                  {element.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Box Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="card bg-[var(--bg-elevated)] p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-center p-4 bg-[var(--accent-primary)]/10 rounded-lg flex-1">
                  <div className="text-sm text-[var(--accent-primary)] font-medium">
                    Input
                  </div>
                  <div className="text-[var(--text-primary)] mt-1">インプット</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-muted)] rotate-90 md:rotate-0" />
                <div className="text-center p-4 bg-[var(--accent-teal)]/10 rounded-lg flex-1">
                  <div className="text-sm text-[var(--accent-teal)] font-medium">
                    Condition
                  </div>
                  <div className="text-[var(--text-primary)] mt-1">コンディション</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-muted)] rotate-90 md:rotate-0" />
                <div className="text-center p-4 bg-[var(--accent-purple)]/10 rounded-lg flex-1">
                  <div className="text-sm text-[var(--accent-purple)] font-medium">
                    Options
                  </div>
                  <div className="text-[var(--text-primary)] mt-1">選択肢</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-muted)] rotate-90 md:rotate-0" />
                <div className="text-center p-4 bg-[var(--accent-green)]/10 rounded-lg flex-1">
                  <div className="text-sm text-[var(--accent-green)] font-medium">
                    Output
                  </div>
                  <div className="text-[var(--text-primary)] mt-1">アウトプット</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Principles</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              判断の原則
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <Scale className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                判断と思考を分ける
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                思考は無限、判断は有限。判断の瞬間を明確にする。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <Box className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                構造で再現する
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                属人的な勘から、共有可能な構造へ。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <BookOpen className="w-8 h-8 text-[var(--accent-primary)] mx-auto mb-4" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">
                記録で資産化する
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                判断の履歴は組織の知的資産になる。
              </p>
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
              定義を理解したら、次は具体例へ
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              日常から業務まで、同じ構造で判断を表現できることを確認しましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/examples" className="btn btn-primary">
                具体例を見る
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
