"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Hash,
  Sparkles,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "なぜKPIは機能しないのか？ - 意思決定の構造問題",
    excerpt:
      "多くの企業でKPIが形骸化する理由と、その本質的な原因について解説します。問題はKPI自体ではなく、意思決定の構造にあります。",
    category: "導入編",
    readTime: "8分",
    date: "2024年12月",
    tags: ["KPI", "意思決定", "経営"],
    featured: true,
  },
  {
    id: 2,
    title: "2フェーズモデル - 目標と手段を分ける技術",
    excerpt:
      "目標設定（Phase 1）と達成手段の選択（Phase 2）を明確に分離することで、意思決定の質が向上します。具体的な実践方法を解説。",
    category: "フレームワーク",
    readTime: "12分",
    date: "2024年12月",
    tags: ["2フェーズモデル", "目標設定", "戦略"],
  },
  {
    id: 3,
    title: "意思決定Box - すべての判断を5要素で構造化する",
    excerpt:
      "Purpose、Question、Input、Options、Outputの5要素で意思決定を構造化。誰でも再現できる意思決定フレームワーク。",
    category: "フレームワーク",
    readTime: "15分",
    date: "2024年12月",
    tags: ["意思決定Box", "構造化", "フレームワーク"],
  },
  {
    id: 4,
    title: "日本企業でKPIが機能しない本当の理由",
    excerpt:
      "欧米発のKPI手法を文化的背景を考慮せずに導入したことが原因。日本の組織文化を活かしたKPI設計の5原則を提案。",
    category: "日本文化",
    readTime: "10分",
    date: "2024年12月",
    tags: ["日本文化", "KPI", "組織文化"],
  },
  {
    id: 5,
    title: "建設会社の年度計画 - 意思決定Boxの実践事例",
    excerpt:
      "人手不足に悩む中堅建設会社が、意思決定Boxを使って年度計画を策定。社長から現場まで、意思決定の連鎖がどう機能するか。",
    category: "事例",
    readTime: "20分",
    date: "2024年12月",
    tags: ["建設業", "事例", "年度計画"],
  },
  {
    id: 6,
    title: "人材マップ3軸構造 - キャリアを意思決定で捉える",
    excerpt:
      "スコープ・時間軸・複雑性の3軸で人材を評価。スキルではなく「意思決定力」でキャリアを捉える新しいフレームワーク。",
    category: "人材育成",
    readTime: "18分",
    date: "2024年12月",
    tags: ["人材マップ", "キャリア", "育成"],
  },
];

const categories = [
  { name: "すべて", count: articles.length },
  { name: "導入編", count: 1 },
  { name: "フレームワーク", count: 2 },
  { name: "日本文化", count: 1 },
  { name: "事例", count: 1 },
  { name: "人材育成", count: 1 },
];

export default function NotePage() {
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
            <span className="section-label">note Series</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              note連載
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
              Insight Frameworkの詳細な解説や実践事例を、
              noteで連載しています。
            </p>

            {/* CTA to note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex"
              >
                noteで読む
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="section-label flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Featured
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-2">
              おすすめ記事
            </h2>
          </motion.div>

          {articles
            .filter((a) => a.featured)
            .map((article) => (
              <motion.a
                key={article.id}
                href="https://note.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card block group bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-teal)]/5 border-[var(--accent-primary)]/20"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-teal)] flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                        {article.category}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2">
                      {article.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    <p className="text-[var(--text-secondary)] mt-2">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] flex items-center gap-1"
                        >
                          <Hash className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-xs text-[var(--text-muted)]">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              すべての記事
            </h2>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-3 py-1.5 rounded-lg text-sm text-[var(--text-secondary)] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-elevated)] transition-colors"
              >
                {cat.name}
                <span className="ml-1 text-[var(--text-muted)]">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter((a) => !a.featured)
              .map((article, index) => (
                <motion.a
                  key={article.id}
                  href="https://note.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card group h-full flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--accent-teal)]/10 text-[var(--accent-teal)]">
                      {article.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex-1">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                  </div>
                </motion.a>
              ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="card bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-purple)]/10 border-[var(--accent-primary)]/20">
              <BookOpen className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                最新記事をお届けします
              </h2>
              <p className="text-[var(--text-muted)] mt-4">
                noteをフォローすると、新しい記事が公開されたときに
                通知を受け取れます。
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href="https://note.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  noteをフォローする
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link href="/about" className="btn btn-ghost">
                  著者について
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
