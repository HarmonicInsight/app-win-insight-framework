"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

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
              自然言語がプログラムになる
            </h1>
            <p className="text-base text-gray-600 leading-loose">
              要件を自然言語で書く。
              <br />
              AIが瞬時にプログラムを生成し、そのまま運用する。
            </p>
          </motion.div>
        </div>
      </section>

      {/* パラダイムシフト */}
      <section className="px-6 py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-6">
              PARADIGM SHIFT
            </p>
            <h2 className="text-xl md:text-2xl mb-12">
              プログラミングの再定義
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 従来 */}
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-4">
                  従来
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4">
                    <p className="text-sm text-gray-400">1. 要件定義</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-800 p-4">
                    <p className="text-sm text-gray-400">2. 設計</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-800 p-4">
                    <p className="text-sm text-gray-400">3. コーディング</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-800 p-4">
                    <p className="text-sm text-gray-400">4. テスト</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-800 p-4">
                    <p className="text-sm text-gray-400">5. デプロイ・運用</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  数週間〜数ヶ月
                </p>
              </div>

              {/* AIエージェント */}
              <div>
                <p className="text-xs tracking-widest text-amber-500 mb-4">
                  AIエージェント
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-900/30 border border-amber-700 p-4">
                    <p className="text-sm text-amber-500">1. 自然言語で要件を書く</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-amber-700" />
                  </div>
                  <div className="bg-amber-900/30 border border-amber-700 p-4">
                    <p className="text-sm text-amber-500">2. AIがプログラムを生成</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-amber-700" />
                  </div>
                  <div className="bg-amber-900/30 border border-amber-700 p-4">
                    <p className="text-sm text-amber-500">3. そのまま実行・運用</p>
                  </div>
                </div>
                <p className="text-sm text-amber-500 mt-6">
                  数分〜数時間
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 構造図 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12"
          >
            <svg viewBox="0 0 800 300" className="w-full h-auto">
              {/* 自然言語 */}
              <g>
                <rect
                  x="40"
                  y="100"
                  width="180"
                  height="100"
                  fill="white"
                  stroke="#e0e0e0"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="130"
                  y="135"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="11"
                  letterSpacing="0.1em"
                >
                  NATURAL LANGUAGE
                </text>
                <text
                  x="130"
                  y="160"
                  textAnchor="middle"
                  fill="#1a1a1a"
                  fontSize="15"
                >
                  自然言語の要件
                </text>
                <text
                  x="130"
                  y="182"
                  textAnchor="middle"
                  fill="#737373"
                  fontSize="11"
                >
                  「〜してほしい」
                </text>
              </g>

              {/* 矢印1 */}
              <line
                x1="220"
                y1="150"
                x2="290"
                y2="150"
                stroke="#8b6914"
                strokeWidth="2"
              />
              <polygon points="300,150 288,144 288,156" fill="#8b6914" />

              {/* AIエージェント */}
              <g>
                <rect
                  x="310"
                  y="80"
                  width="180"
                  height="140"
                  fill="#1a1a1a"
                  rx="4"
                />
                <text
                  x="400"
                  y="115"
                  textAnchor="middle"
                  fill="#a3a3a3"
                  fontSize="11"
                  letterSpacing="0.1em"
                >
                  AI AGENT
                </text>
                <text
                  x="400"
                  y="145"
                  textAnchor="middle"
                  fill="white"
                  fontSize="15"
                >
                  AIエージェント
                </text>
                <text
                  x="400"
                  y="175"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="12"
                >
                  瞬時にプログラム生成
                </text>
                <text
                  x="400"
                  y="200"
                  textAnchor="middle"
                  fill="#525252"
                  fontSize="10"
                >
                  Claude / GPT / Gemini
                </text>
              </g>

              {/* 矢印2 */}
              <line
                x1="490"
                y1="150"
                x2="560"
                y2="150"
                stroke="#8b6914"
                strokeWidth="2"
              />
              <polygon points="570,150 558,144 558,156" fill="#8b6914" />

              {/* 実行・運用 */}
              <g>
                <rect
                  x="580"
                  y="100"
                  width="180"
                  height="100"
                  fill="white"
                  stroke="#8b6914"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="670"
                  y="135"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="11"
                  letterSpacing="0.1em"
                >
                  EXECUTION
                </text>
                <text
                  x="670"
                  y="160"
                  textAnchor="middle"
                  fill="#1a1a1a"
                  fontSize="15"
                >
                  実行・運用
                </text>
                <text
                  x="670"
                  y="182"
                  textAnchor="middle"
                  fill="#737373"
                  fontSize="11"
                >
                  即座に動く
                </text>
              </g>

              {/* 説明 */}
              <text
                x="400"
                y="270"
                textAnchor="middle"
                fill="#525252"
                fontSize="13"
              >
                コードを書く工程が消える
              </text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 本質 */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-6">
              KEY INSIGHT
            </p>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              プログラムは
              <span className="text-amber-700">書くもの</span>
              から
              <br />
              <span className="text-amber-700">生成されるもの</span>
              へ。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 何が変わるか */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-12">
              何が変わるか
            </h2>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-gray-100 p-6">
                  <p className="text-xs tracking-widest text-gray-500 mb-2">従来</p>
                  <p className="text-base text-gray-600">
                    要件を伝える → エンジニアが開発 → 数週間後に納品
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6">
                  <p className="text-xs tracking-widest text-amber-700 mb-2">これから</p>
                  <p className="text-base text-gray-900">
                    要件を書く → AIが生成 → すぐ動く
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-gray-100 p-6">
                  <p className="text-xs tracking-widest text-gray-500 mb-2">従来</p>
                  <p className="text-base text-gray-600">
                    仕様変更 → 改修依頼 → また数週間
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6">
                  <p className="text-xs tracking-widest text-amber-700 mb-2">これから</p>
                  <p className="text-base text-gray-900">
                    要件を書き換える → 再生成 → すぐ反映
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-gray-100 p-6">
                  <p className="text-xs tracking-widest text-gray-500 mb-2">従来</p>
                  <p className="text-base text-gray-600">
                    プログラムは資産。保守が必要
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6">
                  <p className="text-xs tracking-widest text-amber-700 mb-2">これから</p>
                  <p className="text-base text-gray-900">
                    要件が資産。プログラムは使い捨て
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 要件が資産 */}
      <section className="px-6 py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-6">
              ASSET
            </p>
            <h2 className="text-xl md:text-2xl mb-8">
              要件が資産になる
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              従来、プログラムコードは資産でした。
              <br />
              保守し、引き継ぎ、ドキュメントを整備する必要がありました。
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              AIエージェント時代は、
              <span className="text-amber-500">自然言語の要件</span>
              が資産になります。
              <br />
              プログラムは要件から何度でも再生成できる。
            </p>
            <div className="bg-gray-800 p-6 border-l-4 border-amber-700">
              <p className="text-base text-white leading-relaxed">
                保守すべきは「何をしたいか」であり、
                <br />
                「どう実装したか」ではない。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 意思決定との関係 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-8">
              意思決定フレームワークとの関係
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              意思決定Boxで定義した「Input収集」「Options生成」を、
              <br />
              AIエージェントが自動実行します。
            </p>
            <div className="bg-gray-50 p-8 border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-teal-600 font-medium shrink-0">Input</span>
                  <span className="text-sm text-gray-600">
                    「〜のデータを集めて」→ AIがプログラムを生成して収集
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-teal-600 font-medium shrink-0">Options</span>
                  <span className="text-sm text-gray-600">
                    「選択肢を整理して」→ AIがプログラムを生成して分析・整理
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-amber-700 font-medium shrink-0">Output</span>
                  <span className="text-sm text-gray-600">
                    最終判断は人が行う
                  </span>
                </li>
              </ul>
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
