"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Compass,
  ExternalLink,
  GitBranch,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const problems = [
  {
    icon: BarChart3,
    text: "ダッシュボードを作っても誰も見ない",
  },
  {
    icon: Target,
    text: "KPIを設定しても形骸化する",
  },
  {
    icon: TrendingUp,
    text: "数字を追っても経営が良くならない",
  },
];

const frameworks = [
  {
    id: "two-phase",
    icon: GitBranch,
    title: "2フェーズモデル",
    description: "目標設定と達成手段を分ける。Phase1で目標を決め、Phase2で手段を選ぶ。",
    color: "var(--accent-primary)",
  },
  {
    id: "decision-box",
    icon: Layers,
    title: "意思決定Box",
    description: "すべての判断を構造化する。Purpose、Question、Input、Options、Outputの5要素。",
    color: "var(--accent-teal)",
  },
  {
    id: "skill-map",
    icon: Compass,
    title: "人材マップ",
    description: "組織と個人のキャリアを繋げる。3軸構造で能力と役割を可視化する。",
    color: "var(--accent-purple)",
  },
];

const audiences = [
  {
    icon: Briefcase,
    title: "経営者",
    description: "KPIが機能しない理由を知りたい",
  },
  {
    icon: Users,
    title: "管理職",
    description: "チームの意思決定を改善したい",
  },
  {
    icon: Lightbulb,
    title: "コンサルタント",
    description: "クライアントに使えるフレームワークが欲しい",
  },
];

const stats = [
  { value: "71.3%", label: "正社員の人手不足割合（建設業）" },
  { value: "3x", label: "意思決定の構造化で生産性向上" },
  { value: "5", label: "意思決定Boxの構成要素" },
];

export default function HomePage() {
  return (
    <div className="bg-gradient-page">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-50" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-teal)]/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeInUp}
              className="section-label"
            >
              Insight Framework
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mt-4"
            >
              意思決定を、
              <span className="gradient-text">科学する</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[var(--text-secondary)] mt-6 max-w-2xl leading-relaxed"
            >
              KPIが機能しない本当の理由と、
              <br className="hidden sm:block" />
              日本に合った意思決定の設計。
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="/framework" className="btn btn-primary">
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/note" className="btn btn-ghost">
                noteで連載を読む
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Problem</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              こんな経験はありませんか？
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-red)]/10 flex items-center justify-center shrink-0">
                  <XCircle className="w-5 h-5 text-[var(--accent-red)]" />
                </div>
                <p className="text-[var(--text-secondary)]">{problem.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="card inline-block">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)]" />
                <p className="text-[var(--text-primary)] font-medium">
                  原因はKPI設計ではなく、
                  <span className="text-[var(--accent-primary)]">意思決定の構造</span>
                  にある
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Framework Overview Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Framework</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              3つの構成要素
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
              Insight Frameworkは、意思決定を科学的に構造化する
              3つのモデルから構成されています。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => {
              const Icon = framework.icon;
              return (
                <motion.div
                  key={framework.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/framework#${framework.id}`}
                    className="card block h-full group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${framework.color}15` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: framework.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      {framework.title}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent-primary)]" />
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {framework.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label">Who is this for?</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
              こんな方に
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {audience.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              意思決定の構造を、見える化する
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              Insight Frameworkで、あなたの組織の意思決定を科学的に分析し、
              改善のための具体的なアクションを見つけましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/framework" className="btn btn-primary">
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/stories" className="btn btn-ghost">
                事例を見る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
