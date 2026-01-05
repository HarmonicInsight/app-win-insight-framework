"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  RefreshCw,
  Users,
  Database,
  Bot,
  User,
  Cloud,
  FileJson,
  Package,
} from "lucide-react";
import Link from "next/link";

const executors = [
  { icon: User, name: "人間", description: "従来通りの担当者" },
  { icon: Bot, name: "AIエージェント", description: "Claude, GPT等" },
  { icon: Cloud, name: "外部サービス", description: "SaaS, API連携" },
];

const promises = [
  {
    icon: RefreshCw,
    title: "再現性",
    description: "同じジョブ定義で、同じ構造の成果物が生成される",
  },
  {
    icon: Users,
    title: "差し替え可能性",
    description: "実行者（人間、AI、外部サービス）を容易に切り替え可能",
  },
  {
    icon: Database,
    title: "資産化",
    description: "すべての実行が記録され、後の監査・改善に活用できる",
  },
];

export default function PixiePage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-amber-700 tracking-widest mb-6">
              AI AGENT FRAMEWORK
            </p>
            <h1 className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8">
              AIエージェントフレームワーク
            </h1>
            <p className="text-base text-gray-600 leading-loose">
              業務を「入力 → 処理 → 出力」の関数として捉え、
              <br />
              再現可能な成果物を生成する。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 基本構造 */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
              基本構造
            </h2>
            <p className="text-base text-gray-600 leading-loose mb-12">
              ジョブを定義し、成果物を生成するシンプルな構造。
            </p>

            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 border border-gray-200">
              {/* job.json */}
              <div className="flex-1 text-center">
                <div className="w-14 h-14 bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <FileJson className="w-7 h-7 text-amber-700" />
                </div>
                <p className="text-base font-medium text-gray-900">job.json</p>
                <p className="text-sm text-gray-500 mt-1">ジョブ定義</p>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0" />

              {/* Executor */}
              <div className="flex-1 text-center">
                <div className="w-14 h-14 bg-teal-50 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-7 h-7 text-teal-600" />
                </div>
                <p className="text-base font-medium text-gray-900">Executor</p>
                <p className="text-sm text-gray-500 mt-1">実行者</p>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0" />

              {/* 成果物 */}
              <div className="flex-1 text-center">
                <div className="w-14 h-14 bg-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-7 h-7 text-purple-600" />
                </div>
                <p className="text-base font-medium text-gray-900">成果物</p>
                <p className="text-sm text-gray-500 mt-1">result.json + Artifact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3つの約束 */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-12">
              3つの約束
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {promises.map((promise) => {
                const Icon = promise.icon;
                return (
                  <div key={promise.title}>
                    <Icon className="w-6 h-6 text-amber-700 mb-4" />
                    <h3 className="text-base font-medium text-gray-900 mb-3">
                      {promise.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 差し替え可能な実行者 */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
              差し替え可能な実行者
            </h2>
            <p className="text-base text-gray-600 leading-loose mb-12">
              ジョブ定義は同じ。実行者だけを状況に応じて切り替えられます。
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {executors.map((executor) => {
                const Icon = executor.icon;
                return (
                  <div
                    key={executor.name}
                    className="bg-white p-6 border border-gray-200 text-center"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-base font-medium text-gray-900">
                      {executor.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {executor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI協働時代の業務設計 */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-10">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                AI協働時代の業務設計
              </h3>
              <p className="text-base text-gray-600 leading-loose">
                AIエージェントフレームワークは、AIエージェントとの協働を前提とした業務設計を可能にします。
                属人的な業務を構造化し、実行者が誰（何）であっても同じ品質の成果物を得ることができます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-900 mb-10">
            意思決定の構造を理解する
          </p>
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white text-base hover:bg-amber-800 transition-colors"
          >
            フレームワークを見る
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
