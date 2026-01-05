"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2, AlertTriangle } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "数字を追うことが目的化",
    description: "KPIの達成自体が目的になり、本来の事業目標との接続が失われる。",
    stat: "67%",
    statLabel: "の企業がKPIと戦略の乖離を認識",
  },
  {
    number: "02",
    title: "短期最適化の罠",
    description: "四半期ごとの数字に追われ、中長期の価値創造が軽視される。",
    stat: "3.2x",
    statLabel: "短期KPI重視企業の離職率",
  },
  {
    number: "03",
    title: "測定できるものだけを測定",
    description: "定量化しやすい指標に偏り、本当に重要な要素が見落とされる。",
    stat: "82%",
    statLabel: "の重要成功要因は数値化困難",
  },
  {
    number: "04",
    title: "ゲーミングの発生",
    description: "KPIを操作する行動が発生し、組織の実態と乖離した数字が生まれる。",
    stat: "41%",
    statLabel: "の従業員がKPI操作を目撃",
  },
];

const solutions = [
  {
    title: "判断の構造化",
    description: "KPIを「判断のインプット」として再定義。数字自体ではなく、数字が導く判断を設計する。",
    href: "/framework",
  },
  {
    title: "2フェーズ分離",
    description: "目標設定（Phase1）と達成手段（Phase2）を分離し、KPIを適切なフェーズに配置する。",
    href: "/framework#two-phase",
  },
  {
    title: "意思決定Boxへの接続",
    description: "すべてのKPIを意思決定Boxのインプットとして位置づけ、判断への貢献を明確化する。",
    href: "/definitions",
  },
];

export default function KPIChallengePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-gray-500 tracking-wider mb-6">
              課題を知る
            </p>
            <h1 className="text-2xl md:text-3xl font-normal text-gray-900 leading-relaxed mb-8">
              なぜKPIは機能しないのか
            </h1>
            <p className="text-base text-gray-600 leading-loose">
              KPIを設定しても形骸化する。数字を追っても経営が良くならない。
              <br />
              問題はKPIの設計ではなく、KPIと「判断」の断絶にある。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-gray-900 font-light leading-loose">
              「KPIは判断を支援するためのものであり、
              <br className="hidden md:block" />
              判断を代替するものではない」
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Problems */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500 tracking-wider mb-4">
              PROBLEMS
            </p>
            <h2 className="text-xl md:text-2xl font-normal text-gray-900">
              KPIが機能しない4つの理由
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gray-200 bg-white"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-light text-amber-700">
                    {problem.number}
                  </span>
                  <div className="text-right">
                    <span className="block text-2xl font-light text-amber-700">
                      {problem.stat}
                    </span>
                    <span className="text-xs text-gray-500">
                      {problem.statLabel}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Root Cause */}
      <section className="px-6 py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400 tracking-wider mb-6">
              ROOT CAUSE
            </p>
            <h2 className="text-xl md:text-2xl font-normal mb-10">
              根本原因：KPIと判断の断絶
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium text-base">従来のアプローチ</p>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    KPIを設定 → 数字を追跡 → 結果を報告
                    <br />
                    <span className="text-sm">
                      → 判断との接続がない。数字が存在しても使われない。
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium text-base">意思決定Box アプローチ</p>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    判断を定義 → 必要なインプットを特定 → KPIとして設計
                    <br />
                    <span className="text-sm">
                      → すべてのKPIが具体的な判断に接続される。
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500 tracking-wider mb-4">
              SOLUTIONS
            </p>
            <h2 className="text-xl md:text-2xl font-normal text-gray-900">
              解決への3つのアプローチ
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={solution.href}
                  className="block p-6 border border-gray-200 hover:border-amber-700 transition-colors h-full group"
                >
                  <h3 className="text-base font-medium text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-normal text-gray-900 mb-6">
              KPIを「判断のインプット」として再設計する
            </h2>
            <p className="text-base text-gray-600 mb-10 leading-relaxed">
              意思決定Boxを理解することで、KPIは初めて本来の機能を果たします。
            </p>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white font-medium hover:bg-amber-800 transition-colors"
            >
              フレームワークを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
