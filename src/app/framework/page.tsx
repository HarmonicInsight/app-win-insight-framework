"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Zap } from "lucide-react";

export default function FrameworkPage() {
  const [activePhase, setActivePhase] = useState<1 | 2>(1);

  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs text-amber-700 tracking-widest mb-6">
              FRAMEWORK
            </p>
            <h1 className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-6">
              意思決定の構造を理解する
            </h1>
            <p className="text-sm text-gray-600 leading-loose">
              組織の意思決定を科学的に分析し、
              <br />
              改善するためのフレームワーク。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2フェーズモデル */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg text-gray-900 mb-4">
            2フェーズモデル
          </h2>
          <p className="text-sm text-gray-600 leading-loose mb-10">
            目標設定と手段選択を分離することで、
            <br />
            意思決定の質を向上させます。
          </p>

          {/* Phase Toggle */}
          <div className="flex gap-3 mb-10">
            <button
              onClick={() => setActivePhase(1)}
              className={`px-5 py-2.5 text-sm transition-colors ${
                activePhase === 1
                  ? "bg-amber-700 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              Phase 1
            </button>
            <button
              onClick={() => setActivePhase(2)}
              className={`px-5 py-2.5 text-sm transition-colors ${
                activePhase === 2
                  ? "bg-teal-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
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
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-gray-900">目標設定</p>
                    <p className="text-sm text-gray-500">何を達成するか</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-gray-600">
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
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">手段選択</p>
                    <p className="text-sm text-gray-500">どう達成するか</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-gray-600">
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
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg text-gray-900 mb-4">
            意思決定Box
          </h2>
          <p className="text-sm text-gray-600 leading-loose mb-10">
            すべての意思決定を5つの要素で構造化。
          </p>

          <div className="space-y-6">
            {[
              { label: "Purpose", desc: "何のための意思決定か" },
              { label: "Question", desc: "具体的に何を決めるか" },
              { label: "Input", desc: "判断に必要な情報" },
              { label: "Options", desc: "選択肢は何か" },
              { label: "Output", desc: "決定内容と次のアクション" },
            ].map((item) => (
              <div key={item.label} className="flex gap-6">
                <span className="text-sm text-amber-700 w-20 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-gray-600">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-900 mb-8">
            実際の事例で理解を深める
          </p>
          <Link
            href="/examples"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white text-sm hover:bg-amber-800 transition-colors"
          >
            事例を見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
