"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ExternalLink,
  Heart,
  Lightbulb,
  Mail,
  Target,
  Users,
} from "lucide-react";

const timeline = [
  {
    year: "背景",
    title: "KPIが機能しない現実",
    description:
      "多くの企業でKPIを導入しても、ダッシュボードは見られず、目標は形骸化。「なぜこうなるのか」という疑問から研究が始まった。",
  },
  {
    year: "発見",
    title: "意思決定の構造問題",
    description:
      "KPIが機能しない原因は、KPI設計ではなく意思決定の構造にあることを発見。目標設定と手段選択が混在していた。",
  },
  {
    year: "構築",
    title: "Insight Frameworkの開発",
    description:
      "2フェーズモデル、意思決定Box、人材マップの3つの要素で構成されるフレームワークを開発。",
  },
  {
    year: "実践",
    title: "建設業での検証",
    description:
      "建設DXの窓口を通じて、建設業界で実践・検証。現場の声を反映しながらフレームワークを改善。",
  },
  {
    year: "公開",
    title: "知見の体系化と公開",
    description:
      "noteでの連載開始、本サイトでのフレームワーク公開。書籍化に向けた準備を進行中。",
  },
];

const values = [
  {
    icon: Target,
    title: "実践的であること",
    description:
      "理論だけでなく、現場で使えることを重視。複雑な概念をシンプルな構造に落とし込む。",
  },
  {
    icon: Users,
    title: "日本文化への適合",
    description:
      "欧米発のフレームワークをそのまま輸入するのではなく、日本の組織文化に合った形に再設計。",
  },
  {
    icon: Heart,
    title: "人を中心に考える",
    description:
      "数字やプロセスではなく、意思決定する「人」を中心に据えた設計。",
  },
  {
    icon: Lightbulb,
    title: "再現可能な知見",
    description:
      "属人的なスキルではなく、誰でも再現できるフレームワークとして体系化。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-page min-h-screen">
      {/* Hero */}
      <section className="section bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="section-label">About</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Insight Frameworkについて
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
              意思決定を科学的に構造化し、
              日本の組織文化に合った経営管理を実現するためのフレームワーク。
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Insight Framework */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="section-label">What is it?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
                Insight Frameworkとは
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="space-y-6 text-[var(--text-secondary)]">
                <p className="text-lg">
                  Insight Frameworkは、組織の意思決定を科学的に分析し、
                  改善するための実践的なフレームワークです。
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--bg-elevated)]">
                    <h4 className="font-semibold text-[var(--accent-primary)] mb-2">
                      2フェーズモデル
                    </h4>
                    <p className="text-sm">
                      目標設定と手段選択を分離し、意思決定の質を向上させる
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg-elevated)]">
                    <h4 className="font-semibold text-[var(--accent-teal)] mb-2">
                      意思決定Box
                    </h4>
                    <p className="text-sm">
                      すべての判断を5要素で構造化し、透明性を高める
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg-elevated)]">
                    <h4 className="font-semibold text-[var(--accent-purple)] mb-2">
                      人材マップ
                    </h4>
                    <p className="text-sm">
                      3軸構造で能力と役割を可視化し、育成に活かす
                    </p>
                  </div>
                </div>

                <p>
                  単なる理論ではなく、建設業界をはじめとする実際の現場で
                  検証・改善を重ねてきた、実践的なフレームワークです。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Journey</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              開発の経緯
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center z-10">
                      <span className="text-xs font-semibold text-[var(--accent-primary)]">
                        {item.year}
                      </span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[var(--border-subtle)] mt-2" />
                    )}
                  </div>
                  <div className="card flex-1 mb-6">
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Values</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              大切にしていること
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">Author</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              著者について
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-teal)] flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Harmonic Insight
              </h3>
              <p className="text-sm text-[var(--accent-primary)] mt-1">
                あすてぃあ / Erik Arthur
              </p>

              <p className="text-[var(--text-secondary)] mt-6 max-w-lg mx-auto">
                建設DXの窓口、Insight Seriesなど、
                建設業界を中心としたDXソリューションを提供。
                現場の課題と向き合いながら、
                日本の組織に合った意思決定フレームワークを開発・提供しています。
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href="https://harmonic-insight-corporate.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1"
                >
                  <Building2 className="w-4 h-4" />
                  Corporate Site
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://const-dx-home.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1"
                >
                  <Target className="w-4 h-4" />
                  建設DXの窓口
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="mailto:contact@harmonic-insight.com"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              フレームワークを活用する
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              Insight Frameworkは、あなたの組織の意思決定を改善するために
              無料で公開しています。ぜひ活用してください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/framework" className="btn btn-primary">
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/note" className="btn btn-ghost">
                連載を読む
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
