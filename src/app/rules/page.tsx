"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, XCircle, CheckCircle2, Bot, User } from "lucide-react";

export default function RulesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-amber-700 tracking-widest mb-8">
              INSIGHT AUTOMATIC RULES
            </p>

            <h1 className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8">
              プロセスをシステム化しても、
              <br />
              <span className="text-amber-700">効率化はできない。</span>
            </h1>

            <p className="text-base text-gray-600 leading-loose">
              今のワークフローをそのままシステム化しても意味がない。
              <br />
              業務を「判断」として再設計し、
              <br />
              AIに任せる部分を明確にする。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 問題提起 */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-10">
              なぜ「効率化」は失敗するのか
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <p className="text-base text-gray-600">
                  <span className="font-medium text-gray-900">プロセスをそのままシステム化</span>
                  <br />
                  紙の稟議をデジタル化しても、承認待ちの時間は変わらない
                </p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <p className="text-base text-gray-600">
                  <span className="font-medium text-gray-900">人の作業をRPAで自動化</span>
                  <br />
                  操作を記録しても、判断のロジックは自動化されない
                </p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <p className="text-base text-gray-600">
                  <span className="font-medium text-gray-900">ワークフローを電子化</span>
                  <br />
                  承認者が増えるほど、ボトルネックも増える
                </p>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-amber-700">
              <p className="text-base text-gray-900 leading-relaxed">
                共通の問題：<span className="font-medium">「人＝作業者」</span>として業務を設計している。
                <br />
                本当の問いは「人は何を<span className="text-amber-700 font-medium">判断</span>すべきか」である。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 業務の再設計 */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
              業務を「判断」として再設計する
            </h2>
            <p className="text-base text-gray-600 leading-loose mb-12">
              意思決定Boxの5要素のうち、
              <span className="font-medium">Input</span>と
              <span className="font-medium">Options</span>は
              <span className="text-teal-600 font-medium">AIで完全に代替できる</span>。
            </p>

            <div className="space-y-6">
              {/* Input */}
              <div className="bg-teal-50 p-6 border border-teal-200">
                <div className="flex items-center gap-3 mb-3">
                  <Bot className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-teal-600 font-medium tracking-widest">INPUT</span>
                  <span className="text-xs bg-teal-600 text-white px-2 py-0.5">人は不要</span>
                </div>
                <p className="text-base text-gray-900 font-medium mb-2">
                  判断に必要な情報を集める
                </p>
                <p className="text-sm text-gray-600">
                  データの収集、レポートの作成、情報の整理。
                  AIは人間の何倍もの速度で、より正確に情報を集められる。
                </p>
              </div>

              {/* Options */}
              <div className="bg-teal-50 p-6 border border-teal-200">
                <div className="flex items-center gap-3 mb-3">
                  <Bot className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-teal-600 font-medium tracking-widest">OPTIONS</span>
                  <span className="text-xs bg-teal-600 text-white px-2 py-0.5">人は不要</span>
                </div>
                <p className="text-base text-gray-900 font-medium mb-2">
                  選択肢を整理し、比較する
                </p>
                <p className="text-sm text-gray-600">
                  選択肢の洗い出し、メリット・デメリットの整理、比較表の作成。
                  AIは漏れなく、バイアスなく選択肢を提示できる。
                </p>
              </div>

              {/* 人が担う部分 */}
              <div className="bg-white p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <User className="w-5 h-5 text-amber-700" />
                  <span className="text-sm text-amber-700 font-medium tracking-widest">PURPOSE / OUTPUT</span>
                  <span className="text-xs bg-amber-700 text-white px-2 py-0.5">人が担う</span>
                </div>
                <p className="text-base text-gray-900 font-medium mb-2">
                  目的を定め、最終決定を下す
                </p>
                <p className="text-sm text-gray-600">
                  なぜこの判断をするのか、最終的に何を選ぶのか。
                  これだけは人が責任を持って決める必要がある。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 従来 vs 新しいアプローチ */}
      <section className="px-6 py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl mb-12">
              アプローチの違い
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 従来 */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 font-medium">従来のアプローチ</p>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li>プロセスをそのまま電子化</li>
                  <li>人の作業をAIで補助</li>
                  <li>承認フローを維持</li>
                  <li>「人＝作業者」として設計</li>
                </ul>
              </div>

              {/* 新しい */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <p className="text-teal-400 font-medium">Insight Automatic Rules</p>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li>業務を「判断」として再設計</li>
                  <li>Input/OptionsはAIに完全移管</li>
                  <li>人は例外判断のみ</li>
                  <li>「人＝判断者」として設計</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-base leading-relaxed">
                業務効率化の本質は「人の作業を減らす」ことではない。
                <br />
                <span className="text-white">「人が判断すべきことだけに集中させる」</span>ことである。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insight稟議 */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
              最初の適用：Insight稟議
            </h2>

            <p className="text-base text-gray-600 leading-loose mb-10">
              従来の稟議システムを根本から再設計。
              <br />
              AIが情報収集と選択肢の整理を担い、
              <br />
              人は「承認すべきか否か」の判断のみに集中する。
            </p>

            <ul className="space-y-4 text-base text-gray-600 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-teal-600">AI</span>
                <span>過去の類似案件、リスク分析、比較データを自動収集</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600">AI</span>
                <span>承認・却下・条件付き承認の選択肢と判断基準を提示</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-700">人</span>
                <span>提示された情報をもとに最終判断を下す</span>
              </li>
            </ul>

            <p className="text-sm text-gray-400 tracking-widest">
              COMING SOON
            </p>
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
