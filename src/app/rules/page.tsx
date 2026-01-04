"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown, FileText, Calculator, CreditCard, ClipboardCheck, Scale, BookOpen } from "lucide-react";

export default function RulesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-amber-700 tracking-widest mb-8">
              INSIGHT AUTOMATIC RULES
            </p>

            <h1 className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8">
              書いたら動く。
              <br />
              <span className="text-amber-700">でも、嘘はつかない。</span>
            </h1>

            <p className="text-sm text-gray-600 leading-loose mb-6">
              人が意図を書き、
              <br />
              AIが翻訳し、
              <br />
              テストが保証する。
            </p>

            <p className="text-xs text-gray-400 tracking-widest">
              Intent → Translate → Verify
            </p>
          </motion.div>
        </div>
      </section>

      {/* 問題提起 */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-gray-900 mb-8">
              なぜ「自動化」は失敗し続けるのか
            </h2>

            <ul className="space-y-4 text-sm text-gray-600 mb-10">
              <li>ローコードは複雑になると止まる</li>
              <li>RPAは「意味」を理解していない</li>
              <li>ワークフローは例外で破綻する</li>
            </ul>

            <p className="text-sm text-gray-900 border-l-2 border-amber-700 pl-4">
              共通点：「人の意図」が、どこにも残らない
            </p>
          </motion.div>
        </div>
      </section>

      {/* 既存概念との比較 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-gray-900 mb-8">
              これは、既存の延長ではありません
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 text-gray-500 font-normal">アプローチ</th>
                    <th className="text-left py-3 pr-4 text-gray-500 font-normal">仕組み</th>
                    <th className="text-left py-3 text-gray-500 font-normal">限界</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">ローコード</td>
                    <td className="py-3 pr-4">GUIで設定 → 実行</td>
                    <td className="py-3">複雑な判断は表現できない</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">RPA</td>
                    <td className="py-3 pr-4">操作を記録 → 再生</td>
                    <td className="py-3">ルールの意味を理解していない</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">BPM</td>
                    <td className="py-3 pr-4">フローを定義 → 実行</td>
                    <td className="py-3">条件が増えると破綻</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="py-3 pr-4 text-amber-700 font-medium">IAR</td>
                    <td className="py-3 pr-4">意図 → AI翻訳 → 検証 → 実行</td>
                    <td className="py-3 text-amber-700">検証済みのみ動く</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ITV Development */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-gray-900 mb-4">
              ITV Development
            </h2>
            <p className="text-sm text-gray-500 mb-12">
              Intent / Translate / Verify
            </p>

            {/* Flow */}
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200">
                <p className="text-xs text-amber-700 tracking-widest mb-2">INTENT</p>
                <p className="text-gray-900">人が自然言語で「意図」を書く</p>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-gray-300" />
              </div>

              <div className="bg-white p-6 border border-gray-200">
                <p className="text-xs text-teal-600 tracking-widest mb-2">TRANSLATE</p>
                <p className="text-gray-900">AIがルール・コードに翻訳</p>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-gray-300" />
              </div>

              <div className="bg-white p-6 border border-gray-200">
                <p className="text-xs text-blue-600 tracking-widest mb-2">VERIFY</p>
                <p className="text-gray-900">テストで挙動を検証</p>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-gray-300" />
              </div>

              <div className="bg-amber-50 p-6 border border-amber-200">
                <p className="text-xs text-amber-700 tracking-widest mb-2">EXECUTE</p>
                <p className="text-gray-900">合格したものだけが動く</p>
              </div>
            </div>

            <p className="text-sm text-gray-900 mt-12 border-l-2 border-amber-700 pl-4">
              AIが賢いから動かすのではない。
              <br />
              検証されたから動かす。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 核となる思想 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-gray-900 mb-8">
              AIに「正解」を任せない
            </h2>

            <ul className="space-y-4 text-sm text-gray-600 mb-12">
              <li>AIは考えるが、決めない</li>
              <li>AIは書くが、保証しない</li>
              <li>保証するのはテスト</li>
            </ul>

            <div className="bg-gray-50 p-8">
              <p className="text-base text-gray-900 leading-relaxed">
                Automatic なのは「翻訳と検証」であり、
                <br />
                <span className="text-amber-700">判断の責任は人の意図にある。</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 適用領域 */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-gray-900 mb-4">
              業務・判断・ルールがあるところすべてに
            </h2>
            <p className="text-sm text-gray-500 mb-10">
              用途例
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: FileText, label: "稟議承認ルール" },
                { icon: Calculator, label: "経費精算ルール" },
                { icon: CreditCard, label: "与信判断ロジック" },
                { icon: ClipboardCheck, label: "見積承認基準" },
                { icon: Scale, label: "業務判断の標準化" },
                { icon: BookOpen, label: "規程・内規の実装" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4 border border-gray-200">
                  <item.icon className="w-5 h-5 text-amber-700 mb-3" />
                  <p className="text-sm text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insight稟議との関係 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-gray-900 mb-4">
              最初の適用：Insight稟議
            </h2>

            <p className="text-sm text-gray-600 leading-loose mb-8">
              Insight Automatic Rulesの最初の実装として、
              稟議システムを開発中。
            </p>

            <ul className="space-y-3 text-sm text-gray-600 mb-10">
              <li>・自然言語でルール定義</li>
              <li>・AIがコード生成</li>
              <li>・テストで検証</li>
              <li>・人は例外だけ判断</li>
            </ul>

            <p className="text-xs text-gray-400 tracking-widest">
              COMING SOON
            </p>
          </motion.div>
        </div>
      </section>

      {/* クロージング */}
      <section className="px-6 py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-300 leading-loose mb-12">
              自動化の問題は、技術ではありません。
              <br />
              「何を信じて動かすか」です。
            </p>

            <p className="text-xs text-amber-500 tracking-widest mb-2">
              INSIGHT AUTOMATIC RULES
            </p>
            <p className="text-sm text-gray-400">
              Automatic, but verified.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-900 mb-8">
            意思決定の構造を理解する
          </p>
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white text-sm hover:bg-amber-800 transition-colors"
          >
            フレームワークを見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
