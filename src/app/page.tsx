"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Layers,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Bot,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const challenges = [
  {
    number: "01",
    title: "ダッシュボードは見られない",
    description: "作っても使われない。なぜなら「判断」と繋がっていないから。",
  },
  {
    number: "02",
    title: "KPIは形骸化する",
    description: "数字を追うことが目的化し、本来の意思決定に寄与しない。",
  },
  {
    number: "03",
    title: "AIツールは浸透しない",
    description: "便利なはずのAIが使われない。業務設計がAI前提になっていない。",
  },
];

const frameworks = [
  {
    icon: Layers,
    title: "意思決定Box",
    description: "すべての判断を4要素で構造化。インプット→コンディション→選択肢→アウトプット。",
    href: "/framework",
  },
  {
    icon: Brain,
    title: "2フェーズモデル",
    description: "目標設定と手段選択を分離。Phase1で「何を」、Phase2で「どうやって」。",
    href: "/framework#two-phase",
  },
  {
    icon: Bot,
    title: "Pixieフレームワーク",
    description: "業務を関数化し、人でもAIでも実行可能な形に。差し替え可能な設計。",
    href: "/pixie",
  },
];

const menuItems = [
  {
    category: "課題を知る",
    items: [
      { name: "なぜKPIは機能しないのか", href: "/challenges/kpi", description: "数字を追っても経営は良くならない理由" },
      { name: "日本文化と意思決定", href: "/japan-context", description: "欧米型KPIが日本で機能しない構造的要因" },
      { name: "AI時代の判断とは", href: "/challenges/ai-era", description: "AIが変える意思決定の本質" },
    ],
  },
  {
    category: "フレームワーク",
    items: [
      { name: "意思決定Boxとは", href: "/framework", description: "判断を構造化する4つの要素" },
      { name: "定義集", href: "/definitions", description: "判断・問題・理想・現実の定義" },
      { name: "具体例で理解する", href: "/examples", description: "日常から業務まで7つの事例" },
    ],
  },
  {
    category: "実装する",
    items: [
      { name: "Pixieフレームワーク", href: "/pixie", description: "業務を関数化し再現可能に" },
      { name: "AI BPO方法論", href: "/ai-bpo", description: "AI前提で業務を作り直す" },
      { name: "人材マップ", href: "/skill-map", description: "3軸で能力と役割を可視化" },
    ],
  },
  {
    category: "事例・連載",
    items: [
      { name: "導入ストーリー", href: "/stories", description: "建設・IT・コンサルの実例" },
      { name: "note連載", href: "/note", description: "理論と実践の連載記事" },
      { name: "About", href: "/about", description: "このサイトについて" },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-4">
              AI時代の経営インフラ
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[var(--text-primary)] leading-tight mb-6">
              AIは、判断を代替しない。
              <br />
              <span className="text-[var(--accent-primary)]">
                判断の構造を、変える。
              </span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
              ダッシュボードを作っても見られない。KPIを設定しても形骸化する。
              <br />
              原因は「意思決定の構造」にある。
              <br />
              AIを導入する前に、判断そのものを設計し直す。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white text-sm font-medium hover:bg-[var(--accent-primary-light)] transition-colors"
              >
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-default)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--text-primary)] transition-colors"
              >
                具体例で理解する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-2">
              PROBLEM
            </p>
            <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)]">
              なぜ、データは判断に活かされないのか
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 border-l-2 border-[var(--accent-primary)]"
              >
                <span className="text-3xl font-light text-[var(--accent-primary)]">
                  {challenge.number}
                </span>
                <h3 className="text-lg font-medium text-[var(--text-primary)] mt-4 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white border border-[var(--border-subtle)]"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[var(--accent-primary)] shrink-0 mt-1" />
              <div>
                <p className="text-[var(--text-primary)] font-medium">
                  解決策は、KPI設計の改善ではない
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  「意思決定の構造」そのものを設計し直すことで、データは初めて判断に繋がる。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-[var(--text-muted)] tracking-wider mb-2">
              FRAMEWORK
            </p>
            <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)]">
              意思決定を構造化する
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => {
              const Icon = framework.icon;
              return (
                <motion.div
                  key={framework.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={framework.href}
                    className="block p-6 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group h-full"
                  >
                    <Icon className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
                    <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                      {framework.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {framework.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Section - All Pages */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-neutral-400 tracking-wider mb-2">
              CONTENTS
            </p>
            <h2 className="text-2xl md:text-3xl font-normal">
              コンテンツ一覧
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4 pb-2 border-b border-neutral-700">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group block"
                      >
                        <span className="text-white group-hover:text-[var(--accent-primary)] transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-sm text-neutral-500 mt-0.5">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-[var(--text-primary)] mb-4">
              AIを導入する前に、
              <br />
              判断を設計する。
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              意思決定の構造を理解することで、AIは初めて本当の力を発揮します。
              まずはフレームワークを確認してください。
            </p>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-primary-light)] transition-colors"
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
