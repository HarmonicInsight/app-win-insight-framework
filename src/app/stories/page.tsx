"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cpu,
  Briefcase,
  Target,
  HelpCircle,
  FileInput,
  Lightbulb,
  Zap,
  ChevronDown,
  Users,
} from "lucide-react";

const stories = [
  {
    id: "construction",
    title: "建設会社の年度計画",
    subtitle: "中堅建設会社A社の経営改革",
    icon: Building2,
    color: "var(--accent-primary)",
    description:
      "人手不足と利益率低下に悩む中堅建設会社が、意思決定Boxを使って年度計画を策定し、経営改革に成功した事例。",
    roles: [
      {
        role: "社長",
        boxes: [
          {
            label: "Purpose",
            content: "持続可能な成長と社員の幸福",
          },
          {
            label: "Question",
            content: "人手不足の中でどう利益を確保するか？",
          },
          {
            label: "Input",
            content:
              "業界動向、財務状況、社員アンケート、競合分析",
          },
          {
            label: "Options",
            content:
              "DX推進 / 人材採用強化 / 事業領域絞り込み / M&A",
          },
          {
            label: "Output",
            content:
              "DX推進と事業領域絞り込みの両輪戦略を採用",
          },
        ],
      },
      {
        role: "営業部長",
        boxes: [
          {
            label: "Purpose",
            content: "社長方針の実現（DX推進・領域絞り込み）",
          },
          {
            label: "Question",
            content: "どの案件に注力すべきか？",
          },
          {
            label: "Input",
            content: "過去案件の利益率分析、顧客データ、市場調査",
          },
          {
            label: "Options",
            content:
              "高利益案件特化 / 既存顧客深耕 / 新規開拓",
          },
          {
            label: "Output",
            content:
              "既存顧客の高利益案件に80%のリソースを集中",
          },
        ],
      },
      {
        role: "工事部長",
        boxes: [
          {
            label: "Purpose",
            content: "効率的な施工と品質確保",
          },
          {
            label: "Question",
            content: "限られた人員でどう工期を守るか？",
          },
          {
            label: "Input",
            content: "工程データ、人員配置、協力会社状況",
          },
          {
            label: "Options",
            content:
              "ICT活用 / 協力会社拡大 / 工法標準化 / 残業対応",
          },
          {
            label: "Output",
            content: "ICT活用と工法標準化を同時に推進",
          },
        ],
      },
    ],
  },
  {
    id: "system",
    title: "システム導入プロジェクト",
    subtitle: "基幹システムリプレイスの意思決定",
    icon: Cpu,
    color: "var(--accent-teal)",
    description:
      "老朽化した基幹システムのリプレイスプロジェクトで、意思決定Boxを使って合意形成を行い、スムーズな導入を実現した事例。",
    roles: [
      {
        role: "プロジェクトオーナー",
        boxes: [
          {
            label: "Purpose",
            content: "業務効率化と競争力強化",
          },
          {
            label: "Question",
            content: "どのシステムに投資すべきか？",
          },
          {
            label: "Input",
            content: "業務課題、IT予算、各部門要望、市場動向",
          },
          {
            label: "Options",
            content: "パッケージ導入 / スクラッチ開発 / 段階更新",
          },
          {
            label: "Output",
            content:
              "段階更新方式で、まずERPパッケージを導入",
          },
        ],
      },
      {
        role: "プロジェクトマネージャー",
        boxes: [
          {
            label: "Purpose",
            content: "QCD（品質・コスト・納期）の達成",
          },
          {
            label: "Question",
            content: "どうプロジェクトを進めるか？",
          },
          {
            label: "Input",
            content: "要件定義、リソース状況、リスク分析",
          },
          {
            label: "Options",
            content:
              "ウォーターフォール / アジャイル / ハイブリッド",
          },
          {
            label: "Output",
            content:
              "基幹部分はウォーターフォール、周辺はアジャイル",
          },
        ],
      },
      {
        role: "業務担当リーダー",
        boxes: [
          {
            label: "Purpose",
            content: "現場の業務改善と定着化",
          },
          {
            label: "Question",
            content: "どう現場を巻き込むか？",
          },
          {
            label: "Input",
            content: "現場ヒアリング、業務フロー、改善提案",
          },
          {
            label: "Options",
            content:
              "トップダウン / ボトムアップ / パイロット運用",
          },
          {
            label: "Output",
            content:
              "パイロット運用で成功体験を作り、横展開",
          },
        ],
      },
    ],
  },
  {
    id: "consulting",
    title: "コンサルティング会社",
    subtitle: "クライアント支援の体系化",
    icon: Briefcase,
    color: "var(--accent-purple)",
    description:
      "意思決定Boxをクライアント支援のフレームワークとして活用し、提案の質と顧客満足度を向上させた事例。",
    roles: [
      {
        role: "パートナー",
        boxes: [
          {
            label: "Purpose",
            content: "クライアントの経営課題解決",
          },
          {
            label: "Question",
            content: "どの案件を受けるべきか？",
          },
          {
            label: "Input",
            content: "クライアント状況、自社リソース、市場機会",
          },
          {
            label: "Options",
            content:
              "戦略コンサル / 業務コンサル / IT導入支援",
          },
          {
            label: "Output",
            content:
              "戦略立案から実行支援までの一気通貫サービス",
          },
        ],
      },
      {
        role: "マネージャー",
        boxes: [
          {
            label: "Purpose",
            content: "プロジェクトの成功と人材育成",
          },
          {
            label: "Question",
            content: "どうチームをアサインするか？",
          },
          {
            label: "Input",
            content: "メンバースキル、案件要件、育成計画",
          },
          {
            label: "Options",
            content: "専門家集中 / 若手育成重視 / バランス型",
          },
          {
            label: "Output",
            content:
              "シニアとジュニアのペアリングで育成と品質を両立",
          },
        ],
      },
      {
        role: "コンサルタント",
        boxes: [
          {
            label: "Purpose",
            content: "クライアント価値の最大化",
          },
          {
            label: "Question",
            content: "どう提案・報告すべきか？",
          },
          {
            label: "Input",
            content: "調査結果、クライアント反応、市場データ",
          },
          {
            label: "Options",
            content:
              "網羅的報告 / 重点絞り込み / 段階的開示",
          },
          {
            label: "Output",
            content:
              "意思決定に必要な情報に絞った報告書",
          },
        ],
      },
    ],
  },
];

const boxIcons = {
  Purpose: Target,
  Question: HelpCircle,
  Input: FileInput,
  Options: Lightbulb,
  Output: Zap,
};

const boxColors = {
  Purpose: "var(--accent-purple)",
  Question: "var(--accent-primary)",
  Input: "var(--accent-teal)",
  Options: "var(--accent-orange)",
  Output: "var(--accent-green)",
};

export default function StoriesPage() {
  const [activeStory, setActiveStory] = useState(stories[0].id);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const currentStory = stories.find((s) => s.id === activeStory)!;

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
            <span className="section-label">Stories</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              実践事例で学ぶ
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
              3つの異なる業界・場面での意思決定Boxの活用事例。
              各役職がどのように意思決定を構造化しているか見てみましょう。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {stories.map((story) => {
              const Icon = story.icon;
              return (
                <button
                  key={story.id}
                  onClick={() => {
                    setActiveStory(story.id);
                    setExpandedRole(null);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeStory === story.id
                      ? "text-white"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
                  }`}
                  style={{
                    backgroundColor:
                      activeStory === story.id ? story.color : undefined,
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {story.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Story Header */}
              <div className="max-w-3xl mx-auto mb-12">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${currentStory.color}15` }}
                    >
                      <currentStory.icon
                        className="w-7 h-7"
                        style={{ color: currentStory.color }}
                      />
                    </div>
                    <div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: currentStory.color }}
                      >
                        {currentStory.subtitle}
                      </span>
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-1">
                        {currentStory.title}
                      </h2>
                      <p className="text-[var(--text-secondary)] mt-2">
                        {currentStory.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles and Decision Boxes */}
              <div className="space-y-6 max-w-4xl mx-auto">
                {currentStory.roles.map((roleData, roleIndex) => (
                  <motion.div
                    key={roleData.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: roleIndex * 0.1 }}
                  >
                    <button
                      onClick={() =>
                        setExpandedRole(
                          expandedRole === roleData.role
                            ? null
                            : roleData.role
                        )
                      }
                      className="card w-full text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center">
                            <Users className="w-5 h-5 text-[var(--text-muted)]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[var(--text-primary)]">
                              {roleData.role}
                            </h3>
                            <p className="text-sm text-[var(--text-muted)]">
                              意思決定Boxを展開
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${
                            expandedRole === roleData.role ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {expandedRole === roleData.role && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="mt-6 space-y-3">
                              {roleData.boxes.map((box) => {
                                const Icon =
                                  boxIcons[
                                    box.label as keyof typeof boxIcons
                                  ];
                                const color =
                                  boxColors[
                                    box.label as keyof typeof boxColors
                                  ];
                                return (
                                  <div
                                    key={box.label}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-elevated)]"
                                  >
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                      style={{
                                        backgroundColor: `${color}15`,
                                      }}
                                    >
                                      <Icon
                                        className="w-4 h-4"
                                        style={{ color }}
                                      />
                                    </div>
                                    <div>
                                      <span
                                        className="text-sm font-semibold"
                                        style={{ color }}
                                      >
                                        {box.label}
                                      </span>
                                      <p className="text-[var(--text-secondary)] mt-1">
                                        {box.content}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Key Takeaway */}
              <div className="max-w-3xl mx-auto mt-12">
                <div
                  className="card"
                  style={{
                    backgroundColor: `${currentStory.color}08`,
                    borderColor: `${currentStory.color}20`,
                  }}
                >
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    この事例のポイント
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {activeStory === "construction" &&
                      "トップの意思決定が各部門にカスケードダウンされ、全員が同じ方向を向いて動けるようになった。意思決定Boxにより「なぜその判断をしたか」が明確になり、後からの振り返りも容易になった。"}
                    {activeStory === "system" &&
                      "各階層の意思決定が明確になることで、「なぜこの方針なのか」が共有され、プロジェクト途中での混乱を防げた。特に、Purposeの連鎖により、全員が同じゴールを意識して動けた。"}
                    {activeStory === "consulting" &&
                      "意思決定Boxがクライアントとの共通言語になり、提案の論理が明確になった。「何を決めるか」「なぜそれを決めるか」を構造化することで、クライアントの納得感が向上した。"}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              自分の組織でも活用する
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              Insight Frameworkは、あらゆる業界・役職で活用できます。
              まずはフレームワークの詳細を理解しましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/framework" className="btn btn-primary">
                フレームワークを見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/skill-map" className="btn btn-ghost">
                人材マップを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
