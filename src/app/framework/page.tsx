"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const boxElements = [
  {
    id: "purpose",
    label: "Purpose",
    question: "何のための意思決定か",
    description: "この判断が組織にもたらす価値・目的を明確にする",
    color: "amber",
  },
  {
    id: "question",
    label: "Question",
    question: "具体的に何を決めるか",
    description: "Yes/Noまたは選択肢から選ぶ形で問いを設計する",
    color: "amber",
  },
  {
    id: "input",
    label: "Input",
    question: "判断に必要な情報",
    description: "データ、ファクト、レポートなど判断材料を列挙する",
    color: "teal",
    aiReplaceable: true,
  },
  {
    id: "options",
    label: "Options",
    question: "選択肢は何か",
    description: "取りうる選択肢とそれぞれのメリット・デメリット",
    color: "teal",
    aiReplaceable: true,
  },
  {
    id: "output",
    label: "Output",
    question: "決定内容と次のアクション",
    description: "決定事項、理由、そして次に誰が何をするか",
    color: "amber",
  },
];

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
              FRAMEWORK
            </p>
            <h1 className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8">
              意思決定の構造を理解する
            </h1>
            <p className="text-base text-gray-600 leading-loose">
              組織の意思決定を5つの要素で構造化し、
              <br />
              AIで代替できる部分と人が判断すべき部分を明確にする。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 意思決定Boxとは */}
      <section className="px-6 py-20 md:py-28 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-6">
              意思決定Box
            </h2>
            <p className="text-base text-gray-600 leading-loose mb-8">
              すべての意思決定は、この5つの要素で構造化できます。
              <br />
              重要なのは、どの要素をAIに任せ、どの要素を人が担うかを設計すること。
            </p>

            <div className="bg-amber-50 p-6 border-l-4 border-amber-700">
              <p className="text-base text-gray-900 leading-relaxed">
                <span className="font-medium">Input</span>（情報収集）と
                <span className="font-medium"> Options</span>（選択肢の整理）は
                <span className="text-amber-700 font-medium"> AIで代替可能</span>。
                <br />
                人は<span className="font-medium"> Purpose</span>（目的の設定）と
                <span className="font-medium"> Output</span>（最終判断）に集中する。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5つの要素（構造図） */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-12">
              5つの要素
            </h2>

            <div className="space-y-4">
              {boxElements.map((element, index) => (
                <div key={element.id}>
                  <div
                    className={`p-6 border ${
                      element.aiReplaceable
                        ? "bg-teal-50 border-teal-200"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <span
                          className={`text-sm font-medium tracking-widest ${
                            element.aiReplaceable
                              ? "text-teal-600"
                              : "text-amber-700"
                          }`}
                        >
                          {element.label}
                        </span>
                        {element.aiReplaceable && (
                          <span className="block text-xs text-teal-600 mt-1">
                            AI代替可能
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-medium text-gray-900 mb-2">
                          {element.question}
                        </p>
                        <p className="text-sm text-gray-600">
                          {element.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < boxElements.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 人が判断すべきこと */}
      <section className="px-6 py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl mb-10">
              人が判断すべきこと
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-amber-500 font-medium mb-2">Purpose（目的）</p>
                <p className="text-gray-300 leading-relaxed">
                  なぜこの判断をするのか、組織にとってどんな価値があるのか。
                  <br />
                  AIには「なぜ」を設定することはできない。
                </p>
              </div>

              <div>
                <p className="text-amber-500 font-medium mb-2">Output（決定）</p>
                <p className="text-gray-300 leading-relaxed">
                  最終的に何を選ぶか、その責任を誰が負うか。
                  <br />
                  AIは選択肢を提示できるが、決定の責任は人にある。
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-base leading-relaxed">
                AIは「情報を集める」「選択肢を整理する」ことに長けている。
                <br />
                人は「目的を定める」「最終決定を下す」ことに専念すべき。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-900 mb-10">
            実際の事例で理解を深める
          </p>
          <Link
            href="/examples"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white text-base hover:bg-amber-800 transition-colors"
          >
            事例を見る
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
