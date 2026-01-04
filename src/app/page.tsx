"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
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
            <p className="text-xs text-gray-400 tracking-widest mb-8">
              AI時代の経営インフラ
            </p>

            <h1 className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8">
              AIは、判断を代替しない。
              <br />
              <span className="text-amber-700">判断の構造を、変える。</span>
            </h1>

            <p className="text-sm text-gray-600 leading-loose mb-6">
              ダッシュボードを作っても見られない。
              <br />
              KPIを設定しても形骸化する。
            </p>

            <p className="text-sm text-gray-600 leading-loose mb-12">
              原因は「意思決定の構造」にある。
            </p>

            <Link
              href="/framework"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white text-sm hover:bg-amber-800 transition-colors"
            >
              フレームワークを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="space-y-10">
            <Link href="/challenges/kpi" className="block group">
              <p className="text-[10px] text-gray-400 tracking-widest mb-2">
                CHALLENGES
              </p>
              <p className="text-gray-900 group-hover:text-amber-700 transition-colors">
                課題を知る
              </p>
            </Link>

            <hr className="border-gray-200" />

            <Link href="/framework" className="block group">
              <p className="text-[10px] text-gray-400 tracking-widest mb-2">
                FRAMEWORK
              </p>
              <p className="text-gray-900 group-hover:text-amber-700 transition-colors">
                意思決定を構造化する
              </p>
            </Link>

            <hr className="border-gray-200" />

            <Link href="/pixie" className="block group">
              <p className="text-[10px] text-gray-400 tracking-widest mb-2">
                IMPLEMENTATION
              </p>
              <p className="text-gray-900 group-hover:text-amber-700 transition-colors">
                実装する
              </p>
            </Link>

            <hr className="border-gray-200" />

            <Link href="/examples" className="block group">
              <p className="text-[10px] text-gray-400 tracking-widest mb-2">
                STORIES
              </p>
              <p className="text-gray-900 group-hover:text-amber-700 transition-colors">
                事例を見る
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
