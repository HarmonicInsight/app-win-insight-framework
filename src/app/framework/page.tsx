"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FrameworkPage() {
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
              DECISION BOX
            </p>
            <h1 className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8">
              意思決定の構造
            </h1>
            <p className="text-base text-gray-600 leading-loose">
              すべての意思決定は
              <br />
              「入力 → 処理 → 出力」と「制約条件」で構造化できる。
            </p>
          </motion.div>
        </div>
      </section>

      {/* IPO図解 */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12"
          >
            <svg viewBox="0 0 800 420" className="w-full h-auto">
              {/* 制約条件 (Constraints) - 上部 */}
              <g>
                <rect
                  x="280"
                  y="20"
                  width="240"
                  height="60"
                  fill="#1a1a1a"
                  rx="4"
                />
                <text
                  x="400"
                  y="45"
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  letterSpacing="0.1em"
                >
                  CONSTRAINTS
                </text>
                <text
                  x="400"
                  y="65"
                  textAnchor="middle"
                  fill="#a3a3a3"
                  fontSize="13"
                >
                  制約条件
                </text>

                {/* 下向き矢印 */}
                <line
                  x1="400"
                  y1="80"
                  x2="400"
                  y2="130"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                />
                <polygon points="400,140 394,128 406,128" fill="#1a1a1a" />
              </g>

              {/* メインフロー */}
              <g>
                {/* Input ボックス */}
                <rect
                  x="60"
                  y="180"
                  width="140"
                  height="120"
                  fill="white"
                  stroke="#e0e0e0"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="130"
                  y="215"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="11"
                  letterSpacing="0.1em"
                  fontWeight="500"
                >
                  INPUT
                </text>
                <text
                  x="130"
                  y="245"
                  textAnchor="middle"
                  fill="#1a1a1a"
                  fontSize="16"
                >
                  入力
                </text>
                <text
                  x="130"
                  y="275"
                  textAnchor="middle"
                  fill="#737373"
                  fontSize="12"
                >
                  事実・データ
                </text>

                {/* Input → Process 矢印 */}
                <line
                  x1="200"
                  y1="240"
                  x2="270"
                  y2="240"
                  stroke="#8b6914"
                  strokeWidth="2"
                />
                <polygon points="280,240 268,234 268,246" fill="#8b6914" />

                {/* Process ボックス */}
                <rect
                  x="290"
                  y="150"
                  width="220"
                  height="180"
                  fill="white"
                  stroke="#8b6914"
                  strokeWidth="3"
                  rx="4"
                />
                <text
                  x="400"
                  y="180"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="11"
                  letterSpacing="0.1em"
                  fontWeight="500"
                >
                  PROCESS
                </text>
                <text
                  x="400"
                  y="208"
                  textAnchor="middle"
                  fill="#1a1a1a"
                  fontSize="16"
                >
                  処理
                </text>

                {/* 選択肢ボックス（Process内部） */}
                <rect
                  x="320"
                  y="225"
                  width="160"
                  height="80"
                  fill="#fffbf0"
                  stroke="#8b6914"
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                  rx="4"
                />
                <text
                  x="400"
                  y="255"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="11"
                  letterSpacing="0.05em"
                >
                  OPTIONS
                </text>
                <text
                  x="400"
                  y="280"
                  textAnchor="middle"
                  fill="#1a1a1a"
                  fontSize="14"
                >
                  選択肢
                </text>
                <text
                  x="400"
                  y="298"
                  textAnchor="middle"
                  fill="#737373"
                  fontSize="11"
                >
                  A案 / B案 / C案...
                </text>

                {/* Process → Output 矢印 */}
                <line
                  x1="510"
                  y1="240"
                  x2="580"
                  y2="240"
                  stroke="#8b6914"
                  strokeWidth="2"
                />
                <polygon points="590,240 578,234 578,246" fill="#8b6914" />

                {/* Output ボックス */}
                <rect
                  x="600"
                  y="180"
                  width="140"
                  height="120"
                  fill="white"
                  stroke="#e0e0e0"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="670"
                  y="215"
                  textAnchor="middle"
                  fill="#8b6914"
                  fontSize="11"
                  letterSpacing="0.1em"
                  fontWeight="500"
                >
                  OUTPUT
                </text>
                <text
                  x="670"
                  y="245"
                  textAnchor="middle"
                  fill="#1a1a1a"
                  fontSize="16"
                >
                  出力
                </text>
                <text
                  x="670"
                  y="275"
                  textAnchor="middle"
                  fill="#737373"
                  fontSize="12"
                >
                  選ばれた一案
                </text>
              </g>

              {/* 制約条件の影響範囲を示す点線 */}
              <rect
                x="280"
                y="140"
                width="240"
                height="200"
                fill="none"
                stroke="#a3a3a3"
                strokeWidth="1"
                strokeDasharray="6,4"
                rx="8"
              />

              {/* 説明テキスト */}
              <text
                x="400"
                y="390"
                textAnchor="middle"
                fill="#525252"
                fontSize="13"
              >
                制約条件の中で、選択肢から最適な一案を選ぶ
              </text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 各要素の説明 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8"
            >
              <p className="text-xs tracking-widest text-amber-700 font-medium mb-3">
                INPUT
              </p>
              <h3 className="text-lg text-gray-900 mb-4">入力</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                判断に必要な情報。事実、データ、過去の実績、市場情報、相手の期待値など。
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1">
                  AIで収集・整理可能
                </span>
              </div>
            </motion.div>

            {/* Process / Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-amber-700 p-8"
            >
              <p className="text-xs tracking-widest text-amber-700 font-medium mb-3">
                PROCESS / OPTIONS
              </p>
              <h3 className="text-lg text-gray-900 mb-4">処理（選択肢）</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                選択肢を比較検討する。A案、B案、C案...それぞれのメリット・デメリット。
              </p>
              <div className="mt-4 pt-4 border-t border-amber-100">
                <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1">
                  AIで選択肢生成可能
                </span>
              </div>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 p-8"
            >
              <p className="text-xs tracking-widest text-amber-700 font-medium mb-3">
                OUTPUT
              </p>
              <h3 className="text-lg text-gray-900 mb-4">出力</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                選ばれた一案。これが次のアクションや指示になる。決定の責任はここに帰属する。
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-amber-700 bg-amber-50 px-2 py-1">
                  人が最終決定
                </span>
              </div>
            </motion.div>

            {/* Constraints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 p-8"
            >
              <p className="text-xs tracking-widest text-gray-400 font-medium mb-3">
                CONSTRAINTS
              </p>
              <h3 className="text-lg text-white mb-4">制約条件</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                時間、予算、人員、ルール、価値観。選択肢を絞り込み、判断の方向性を決める条件。
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-xs text-amber-500 bg-amber-900/30 px-2 py-1">
                  人が設定
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY INSIGHT */}
      <section className="px-6 py-16 md:py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-6">
              KEY INSIGHT
            </p>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              意思決定とは、
              <span className="text-amber-500">制約条件の中で</span>、
              <br />
              入力された情報をもとに、
              <br />
              <span className="text-amber-500">選択肢から一つを選ぶ</span>
              こと。
            </p>
          </motion.div>
        </div>
      </section>

      {/* AIと人の役割分担 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-12 text-center">
              AIと人の役割分担
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI */}
              <div className="bg-teal-50 border border-teal-200 p-8">
                <p className="text-xs tracking-widest text-teal-600 mb-4">
                  AIが担う
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-medium">Input</span>
                    <span className="text-sm text-gray-600">
                      情報を集める、データを整理する
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-medium">Options</span>
                    <span className="text-sm text-gray-600">
                      選択肢を生成する、比較表を作る
                    </span>
                  </li>
                </ul>
              </div>

              {/* 人 */}
              <div className="bg-amber-50 border border-amber-200 p-8">
                <p className="text-xs tracking-widest text-amber-700 mb-4">
                  人が担う
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 font-medium">
                      Constraints
                    </span>
                    <span className="text-sm text-gray-600">
                      制約を設定する、価値観を決める
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 font-medium">Output</span>
                    <span className="text-sm text-gray-600">
                      最終判断を下す、責任を負う
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* この構造が見えると */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              WHY THIS MATTERS
            </p>
            <h2 className="text-xl md:text-2xl text-gray-900 mb-10">
              この構造が見えると何が変わるか
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-base font-medium text-gray-900 mb-3">
                  何が足りないかわかる
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Inputが不足？選択肢が少ない？制約が不明確？問題の所在が特定できる。
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-900 mb-3">
                  誰がボールを持つかわかる
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Inputを集める人、選択肢を作る人、決める人。役割分担が明確になる。
                </p>
              </div>
              <div>
                <p className="text-base font-medium text-gray-900 mb-3">
                  再現性が生まれる
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  同じ構造で繰り返せる。属人化せず、仕組みとして回せるようになる。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-900 mb-10">
            このフレームワークをルール化する
          </p>
          <Link
            href="/rules"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white text-base hover:bg-amber-800 transition-colors"
          >
            ルールを見る
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
