"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  UtensilsCrossed,
  Train,
  PieChart,
  CalendarClock,
  Users,
  ArrowRight,
  CheckCircle2,
  Coffee,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

type Example = {
  id: string;
  category: "daily" | "business";
  icon: React.ElementType;
  title: string;
  scenario: string;
  input: string[];
  condition: { constraints: string[]; priority: string };
  options: { id: string; name: string; description: string }[];
  output: { selected: string; reason: string };
};

const examples: Example[] = [
  // 日常編
  {
    id: "birthday-gift",
    category: "daily",
    icon: Gift,
    title: "誕生日プレゼント選択",
    scenario: "友人の誕生日プレゼントを選ぶ",
    input: [
      "友人はコーヒー好き（毎朝ハンドドリップ）",
      "最近「コーヒーミルが欲しい」と言っていた",
      "予算は1万円程度",
      "誕生日は来週土曜日",
    ],
    condition: {
      constraints: ["予算上限1万円", "土曜日までに届く必要あり"],
      priority: "本人の希望 ＞ サプライズ性 ＞ 実用性",
    },
    options: [
      {
        id: "A",
        name: "コーヒーミル（希望品）",
        description: "本人が欲しがっていたHario製手動ミル ¥8,800",
      },
      {
        id: "B",
        name: "高級コーヒー豆セット",
        description: "サプライズ性はあるが消耗品 ¥5,000",
      },
      {
        id: "C",
        name: "コーヒーカップセット",
        description: "実用的だが既に持っている可能性 ¥7,000",
      },
    ],
    output: {
      selected: "A案：コーヒーミル",
      reason: "本人の希望を最優先とした結果、確実に喜ばれる選択",
    },
  },
  {
    id: "dinner-menu",
    category: "daily",
    icon: UtensilsCrossed,
    title: "夕食メニュー決定",
    scenario: "今日の夕食メニューを決める",
    input: [
      "冷蔵庫：鶏もも肉、卵、玉ねぎ、ご飯",
      "調理時間：30分以内",
      "昨日の夕食：カレー",
      "今日の昼食：ラーメン",
    ],
    condition: {
      constraints: ["30分以内で完成", "冷蔵庫の食材で作る"],
      priority: "昨日・今日の昼と被らない ＞ 家族全員が食べられる",
    },
    options: [
      { id: "A", name: "親子丼", description: "鶏肉と卵で定番の一品 25分" },
      {
        id: "B",
        name: "チキンソテー",
        description: "シンプルだがメイン感あり 20分",
      },
      { id: "C", name: "オムライス", description: "子供も喜ぶが少し手間 35分" },
    ],
    output: {
      selected: "A案：親子丼",
      reason: "時間内に完成し、昨日今日と被らず、全員が食べられる",
    },
  },
  {
    id: "train-time",
    category: "daily",
    icon: Train,
    title: "電車時間選択",
    scenario: "明日の出張、新幹線の時間を決める",
    input: [
      "会議開始：10:00（東京駅から徒歩10分）",
      "自宅から最寄駅：15分",
      "最寄駅から東京駅：30分",
      "新幹線（名古屋→東京）：1時間40分",
    ],
    condition: {
      constraints: ["9:45には会場到着必須", "始発は6:00"],
      priority: "到着余裕 ＞ 睡眠時間確保",
    },
    options: [
      {
        id: "A",
        name: "6:30発のぞみ",
        description: "8:10着 → 9:00会場着（余裕45分）",
      },
      {
        id: "B",
        name: "7:00発のぞみ",
        description: "8:40着 → 9:30会場着（余裕15分）",
      },
      {
        id: "C",
        name: "6:00発のぞみ",
        description: "7:40着 → 8:30会場着（余裕75分）",
      },
    ],
    output: {
      selected: "A案：6:30発のぞみ",
      reason: "十分な余裕と適度な睡眠時間のバランス",
    },
  },
  // 業務編
  {
    id: "budget-allocation",
    category: "business",
    icon: PieChart,
    title: "実行予算配分",
    scenario: "来期の部門予算配分を決定する",
    input: [
      "売上目標：前年比125%成長",
      "市場環境：競合2社が新規参入",
      "人件費：固定で全体の60%",
      "残り40%の配分を検討",
    ],
    condition: {
      constraints: ["総額は前年と同額", "人件費削減は不可"],
      priority: "成長投資 ＞ リスク分散 ＞ コスト削減",
    },
    options: [
      {
        id: "A",
        name: "マーケティング強化型",
        description: "広告25% / 開発10% / 予備5%",
      },
      {
        id: "B",
        name: "バランス型",
        description: "広告15% / 開発15% / 予備10%",
      },
      {
        id: "C",
        name: "守り型",
        description: "広告10% / 開発10% / 予備20%",
      },
    ],
    output: {
      selected: "A案：マーケティング強化型",
      reason: "競合参入に対抗し、成長目標達成を優先",
    },
  },
  {
    id: "project-schedule",
    category: "business",
    icon: CalendarClock,
    title: "プロジェクト工程修正",
    scenario: "開発遅延時の対応方針を決める",
    input: [
      "現在の遅延：2週間",
      "残り機能：コア機能完了、オプション機能3つ未着手",
      "納期：変更不可（契約上）",
      "追加リソース：1名まで可能",
    ],
    condition: {
      constraints: ["納期厳守", "コア機能の品質維持"],
      priority: "納期 ＞ スコープ ＞ 追加コスト",
    },
    options: [
      {
        id: "A",
        name: "スコープ削減",
        description: "オプション機能3つを2次開発へ先送り",
      },
      {
        id: "B",
        name: "リソース追加",
        description: "1名追加で全機能を納期内に",
      },
      {
        id: "C",
        name: "品質調整",
        description: "テスト工程を短縮して全機能実装",
      },
    ],
    output: {
      selected: "A案：スコープ削減",
      reason: "納期厳守と品質維持を両立。追加コストなし",
    },
  },
  {
    id: "staffing",
    category: "business",
    icon: Users,
    title: "人員配置決定",
    scenario: "新プロジェクトのPM選定",
    input: [
      "プロジェクト規模：中規模（6ヶ月、5名体制）",
      "開始時期：4月（即時）",
      "候補者A：高橋（経験豊富だが別PJ掛け持ち中）",
      "候補者B：田中（経験浅いが専任可能）",
    ],
    condition: {
      constraints: ["4月開始は必須", "既存PJへの影響最小化"],
      priority: "即時開始 ＞ 経験値 ＞ 育成機会",
    },
    options: [
      {
        id: "A",
        name: "高橋PM（掛け持ち）",
        description: "経験活かすが負荷増",
      },
      { id: "B", name: "田中PM（専任）", description: "育成兼ねるがリスクあり" },
      {
        id: "C",
        name: "段階的配置",
        description: "初月は高橋、2ヶ月目から田中へ引継ぎ",
      },
    ],
    output: {
      selected: "C案：段階的配置",
      reason: "即時開始と育成を両立。リスク軽減しつつ成長機会確保",
    },
  },
];

export default function ExamplesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "daily" | "business">("all");
  const [expandedExample, setExpandedExample] = useState<string | null>(null);

  const filteredExamples =
    activeCategory === "all"
      ? examples
      : examples.filter((e) => e.category === activeCategory);

  return (
    <div className="bg-gradient-page">
      {/* Hero Section */}
      <section className="section bg-gradient-hero">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="section-label">Examples</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4">
              具体例
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6">
              日常の判断から業務の判断まで、
              <br className="hidden sm:block" />
              すべて同じ構造で表現できます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
              }`}
            >
              すべて
            </button>
            <button
              onClick={() => setActiveCategory("daily")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeCategory === "daily"
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
              }`}
            >
              <Coffee className="w-4 h-4" />
              日常編
            </button>
            <button
              onClick={() => setActiveCategory("business")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeCategory === "business"
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              業務編
            </button>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="section">
        <div className="container">
          <div className="space-y-6 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredExamples.map((example, index) => {
                const Icon = example.icon;
                const isExpanded = expandedExample === example.id;

                return (
                  <motion.div
                    key={example.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="card cursor-pointer"
                    onClick={() =>
                      setExpandedExample(isExpanded ? null : example.id)
                    }
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          example.category === "daily"
                            ? "bg-[var(--accent-green)]/10"
                            : "bg-[var(--accent-primary)]/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            example.category === "daily"
                              ? "text-[var(--accent-green)]"
                              : "text-[var(--accent-primary)]"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              example.category === "daily"
                                ? "bg-[var(--accent-green)]/10 text-[var(--accent-green)]"
                                : "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                            }`}
                          >
                            {example.category === "daily" ? "日常" : "業務"}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">
                          {example.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">
                          {example.scenario}
                        </p>
                      </div>
                      <div
                        className={`transform transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      >
                        <ArrowRight className="w-5 h-5 text-[var(--text-muted)]" />
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] space-y-6">
                            {/* Input */}
                            <div>
                              <h4 className="text-sm font-semibold text-[var(--accent-primary)] mb-2">
                                インプット
                              </h4>
                              <ul className="space-y-1">
                                {example.input.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                                  >
                                    <span className="text-[var(--text-muted)]">
                                      •
                                    </span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Condition */}
                            <div>
                              <h4 className="text-sm font-semibold text-[var(--accent-teal)] mb-2">
                                コンディション
                              </h4>
                              <div className="space-y-2">
                                <div>
                                  <span className="text-xs text-[var(--text-muted)]">
                                    制約：
                                  </span>
                                  <p className="text-sm text-[var(--text-secondary)]">
                                    {example.condition.constraints.join(" / ")}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-xs text-[var(--text-muted)]">
                                    優先順位：
                                  </span>
                                  <p className="text-sm text-[var(--text-primary)] font-medium">
                                    {example.condition.priority}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Options */}
                            <div>
                              <h4 className="text-sm font-semibold text-[var(--accent-purple)] mb-2">
                                選択肢
                              </h4>
                              <div className="space-y-2">
                                {example.options.map((option) => (
                                  <div
                                    key={option.id}
                                    className={`p-3 rounded-lg ${
                                      example.output.selected.includes(
                                        option.id + "案"
                                      )
                                        ? "bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30"
                                        : "bg-[var(--bg-tertiary)]"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium text-[var(--text-primary)]">
                                        {option.id}案：{option.name}
                                      </span>
                                      {example.output.selected.includes(
                                        option.id + "案"
                                      ) && (
                                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)]" />
                                      )}
                                    </div>
                                    <p className="text-xs text-[var(--text-muted)] mt-1">
                                      {option.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Output */}
                            <div className="p-4 bg-[var(--accent-green)]/10 rounded-lg border-l-3 border-[var(--accent-green)]">
                              <h4 className="text-sm font-semibold text-[var(--accent-green)] mb-2">
                                アウトプット（決定）
                              </h4>
                              <p className="font-bold text-[var(--text-primary)]">
                                {example.output.selected}
                              </p>
                              <p className="text-sm text-[var(--text-secondary)] mt-1">
                                {example.output.reason}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="highlight-box">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                すべての判断は同じ構造に収まる
              </h3>
              <p className="text-[var(--text-secondary)]">
                誕生日プレゼントの選択も、数億円の予算配分も、構造は同じです。
                違うのはインプットの複雑さとステークホルダーの数だけ。
                この構造を理解すれば、あらゆる判断を再現可能な形で記録し、
                組織の知的資産として蓄積できます。
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              次のステップ
            </h2>
            <p className="text-[var(--text-muted)] mt-4">
              具体例を理解したら、フレームワークの詳細や応用編へ進みましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/framework" className="btn btn-primary">
                フレームワーク詳細
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pixie" className="btn btn-ghost">
                Pixieフレームワーク
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
