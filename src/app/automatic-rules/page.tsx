"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, History, Users } from "lucide-react";
import Link from "next/link";

const checkItems = [
  { label: "フォーマットが正しいか", description: "必須項目、形式、整合性" },
  { label: "費目が正しいか", description: "勘定科目、分類の妥当性" },
  { label: "発注先の与信は大丈夫か", description: "取引先の信用情報" },
  { label: "経費予算は十分か", description: "残予算、累積実績" },
];

export default function AutomaticRulesPage() {
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
              AUTOMATIC RULES
            </p>
            <h1 className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8">
              承認ロジックをAIが実行する
            </h1>
            <p className="text-base text-gray-600 leading-loose">
              従来、人が承認していた。
              <br />
              AI時代は、その承認ロジックをAIが実行する。
              <br />
              <span className="text-amber-700">人は不要になる。</span>
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
              承認とは何だったのか
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 従来 */}
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-4">
                  従来
                </p>
                <div className="bg-gray-800 p-6">
                  <p className="text-base text-gray-300 leading-relaxed">
                    申請 → 上長確認 → 部長承認 → 経理確認 → 完了
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    人が一つ一つ確認していた
                  </p>
                </div>
              </div>

              {/* AI時代 */}
              <div>
                <p className="text-xs tracking-widest text-amber-500 mb-4">
                  AI時代
                </p>
                <div className="bg-amber-900/30 border border-amber-700 p-6">
                  <p className="text-base text-amber-100 leading-relaxed">
                    申請 → AIが自動判定 → 結果一覧で確認
                  </p>
                  <p className="text-sm text-amber-500 mt-4">
                    承認ロジックをAIが実行
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 必要な人 */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-10">
              必要なのは2人だけ
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-8">
                <Users className="w-6 h-6 text-amber-700 mb-4" />
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  情報を入れる人
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  申請者。必要な情報を正確に入力する。
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8">
                <Users className="w-6 h-6 text-amber-700 mb-4" />
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  最終処理する人
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  経理担当など。AIの判定結果を確認し、処理を実行する。
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 border-l-4 border-amber-700">
              <p className="text-base text-gray-900">
                中間の「承認者」は不要。
                <br />
                <span className="text-gray-600">
                  AIが承認ロジックを実行するから。
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AIが判定すること */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl text-gray-900 mb-10">
              AIが判定すること
            </h2>

            <div className="space-y-4">
              {checkItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-gray-200 p-6 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              これらは人が「確認していた」こと。ルールがあればAIが判定できる。
            </p>
          </motion.div>
        </div>
      </section>

      {/* やるべきこと */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              WHAT TO DO
            </p>
            <h2 className="text-xl md:text-2xl text-gray-900 mb-10">
              やるべきこと
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-8 h-8 bg-amber-700 text-white flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    判断に必要な情報を整理する
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    「何を確認すれば承認できるか」を明文化する。
                    <br />
                    暗黙知を形式知に変える。
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-8 h-8 bg-amber-700 text-white flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    必要なデータを整備する
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    予算マスタ、与信情報、費目マスタなど。
                    <br />
                    AIが参照できるようにデータを整える。
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-8 h-8 bg-amber-700 text-white flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    入力時にAIに判断させる
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    申請が入力されたタイミングでAIが即座に判定。
                    <br />
                    OK/NGを自動判定し、判断一覧に記録。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 判断一覧 */}
      <section className="px-6 py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl mb-8">
              判断一覧で確認する
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              AIの判定結果はすべて判断一覧で確認できます。
              <br />
              判断が間違っていれば、後からフォローする。
              <br />
              その履歴が蓄積し、より正確な判断ができるようになる。
            </p>

            {/* 判断一覧イメージ */}
            <div className="bg-gray-800 p-6 font-mono text-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-700 text-gray-500">
                <span className="w-20">日時</span>
                <span className="w-32">申請者</span>
                <span className="flex-1">内容</span>
                <span className="w-16">判定</span>
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-20 text-gray-500">01/05 09:12</span>
                  <span className="w-32">田中</span>
                  <span className="flex-1">交通費精算 ¥12,400</span>
                  <span className="w-16 text-teal-400">OK</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-20 text-gray-500">01/05 10:34</span>
                  <span className="w-32">鈴木</span>
                  <span className="flex-1">備品購入 ¥89,000</span>
                  <span className="w-16 text-red-400">NG</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="w-20 text-gray-500">01/05 11:45</span>
                  <span className="w-32">佐藤</span>
                  <span className="flex-1">外注費 ¥350,000</span>
                  <span className="w-16 text-teal-400">OK</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <History className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-gray-400">
                NGの判断が間違っていた場合は修正。その履歴がAIの精度を向上させる。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 日本のワークフロー */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              INSIGHT
            </p>
            <h2 className="text-xl md:text-2xl text-gray-900 mb-8">
              日本のワークフローの実態
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              日本の「ワークフロー」は、実際はワークフローではない。
              <br />
              <span className="text-amber-700 font-medium">合議制</span>
              ——「みんなが確認した」という性格が強い。
            </p>

            <div className="bg-gray-50 p-8 border border-gray-200">
              <p className="text-base text-gray-900 leading-relaxed">
                Automatic Rulesを実現すると、
                <br />
                <span className="text-amber-700 font-medium">
                  ワークフローは不要になる。
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                残るのは：
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>実行予算などの稟議の実態</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700">•</span>
                  <span>今まで承認するために必要だったデータ・判断</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT */}
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
              承認とは
              <span className="text-amber-700">「ルールに照らした判定」</span>
              だった。
              <br />
              ルールが明確なら、
              <span className="text-amber-700">AIが実行できる</span>。
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-900 mb-10">
            AIエージェントで実装する
          </p>
          <Link
            href="/pixie"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white text-base hover:bg-amber-800 transition-colors"
          >
            実装を見る
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
