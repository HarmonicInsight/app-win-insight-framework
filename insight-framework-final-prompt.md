# Insight Framework サイト構築プロンプト

## 概要

Harmonic Insightのサイト群に新しく「Insight Framework」サイトを追加します。
既存の「建設DXの窓口」(https://const-dx-home.vercel.app/) と完全に同じトンマナで構築してください。

リポジトリ名: `app-win-insight-framework`
デプロイ先: Vercel (`insight-framework.vercel.app`)

---

## 1. デザインシステム（建設DXサイト完全準拠）

### カラーパレット

```css
:root {
  /* 背景 */
  --background: #fafafa;
  --gray-50: #fafafa;
  --gray-100: #f5f5f5;
  --gray-200: #e5e5e5;
  
  /* テキスト */
  --gray-300: #d4d4d4;
  --gray-400: #a3a3a3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #1a1a1a;
  
  /* アクセント（ゴールド） */
  --accent: #8b6914;
  --accent-light: #b8941f;
  
  /* ボーダー */
  --border: #e0e0e0;
}
```

### フォント

```css
/* 明朝体（見出し用） */
.font-mincho {
  font-family: "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif;
}

/* ゴシック体（本文用） */
body {
  font-family: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", sans-serif;
}
```

### レイアウト構造

```
┌─ グローバルナビ ─────────────────────────────────┐
│ bg-gray-900, h-8, text-xs, fixed top-0          │
│ 「Harmonic Insight | Home | 建設DX | ... 」      │
├─ メインヘッダー ────────────────────────────────┤
│ bg-white/95 backdrop-blur, fixed top-8          │
│ border-b border-[var(--border)]                 │
├─────────────────────────────────────────────────┤
│ main: pt-24 md:pt-28                            │
│                                                 │
│ セクション交互：                                 │
│   - bg-white                                    │
│   - bg-[var(--gray-100)]                        │
│   - bg-[var(--gray-900)] text-white（強調時）   │
│                                                 │
├─ フッター ──────────────────────────────────────┤
│ bg-gray-900, text-white                         │
└─────────────────────────────────────────────────┘
```

### コンポーネント

#### セクションラベル
```html
<p class="text-sm tracking-widest text-[var(--gray-500)] mb-4">DECISION FRAMEWORK</p>
```

#### 見出し
```html
<h2 class="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
  意思決定の構造を<br>科学する
</h2>
```

#### 強調テキスト（アクセント色）
```html
<p class="font-mincho text-2xl md:text-4xl font-medium text-[var(--accent)] mb-8">
  KPIは主役ではない。<br>
  意思決定を成立させる副産物にすぎない。
</p>
```

#### カード
```html
<!-- 通常カード -->
<div class="border border-[var(--border)] p-8">
  <p class="text-sm text-[var(--accent)] tracking-widest mb-4">01</p>
  <h3 class="font-mincho text-lg text-[var(--gray-900)] mb-4">タイトル</h3>
  <p class="text-sm text-[var(--gray-600)] leading-relaxed">説明文</p>
</div>

<!-- 強調カード -->
<div class="border-2 border-[var(--accent)] bg-[#fffbf0] p-8">
  ...
</div>
```

#### 数字の強調
```html
<div class="border border-[var(--border)] p-6">
  <p class="font-mincho text-3xl text-[var(--gray-900)] mb-2">71.3%</p>
  <p class="text-xs text-[var(--gray-500)]">ラベル</p>
</div>
```

#### ボタン
```html
<!-- アクセントボタン -->
<a class="bg-[var(--accent)] text-white px-8 py-4 text-sm tracking-wider hover:bg-[var(--accent-light)] transition-colors">
  ボタンテキスト
</a>

<!-- アウトラインボタン -->
<a class="border border-[var(--gray-900)] text-[var(--gray-900)] px-8 py-4 text-sm tracking-wider hover:bg-[var(--gray-900)] hover:text-white transition-colors">
  ボタンテキスト
</a>
```

#### ダークセクション
```html
<section class="py-16 md:py-24 bg-[var(--gray-900)]">
  <div class="container-custom">
    <p class="text-sm tracking-widest text-[var(--gray-400)] mb-6">SECTION LABEL</p>
    <h2 class="font-mincho text-2xl md:text-4xl text-white mb-8">
      見出しテキスト<br>
      <span class="text-[var(--accent)]">強調部分はゴールド</span>
    </h2>
    <p class="text-[var(--gray-300)] leading-relaxed">説明文</p>
  </div>
</section>
```

---

## 2. サイト構成

```
insight-framework.vercel.app
│
├── / (トップページ)
│
├── /framework (理論編)
│   ├── 2フェーズモデル
│   ├── 意思決定Box
│   └── 組織とPJの同型性
│
├── /japan (日本文化とKPI)
│   ├── 欧米型 vs 日本型
│   └── 日本に合うKPI設計
│
├── /stories (ストーリー編)
│   ├── 建設会社の年度計画
│   ├── システム導入PJ
│   └── コンサル会社
│
├── /skill-map (人材能力マップ)
│
└── /about (このフレームワークについて)
```

---

## 3. 各ページの詳細

### トップページ (/)

#### ヒーローセクション
```
ラベル: DECISION FRAMEWORK
見出し: 意思決定を、科学する
強調コピー（accent色）: 
  KPIが機能しない本当の理由と、
  日本に合った意思決定の設計
説明文:
  ダッシュボードを作っても誰も見ない。
  KPIを設定しても形骸化する。
  その原因は「KPIの設計」ではなく「意思決定の構造」にある。
CTA: 
  - フレームワークを見る → /framework
  - noteで連載を読む → 外部リンク
```

#### 問題提起セクション (gray-100)
```
ラベル: THE PROBLEM
見出し: なぜKPIは機能しないのか

3カラムグリッド:
1. ダッシュボードを作っても誰も見ない
2. KPIを設定しても形骸化する  
3. 数字を追っても経営が良くならない

→ 「原因はKPI設計ではなく、意思決定の構造にある」
```

#### フレームワーク概要セクション (white)
```
ラベル: OUR FRAMEWORK
見出し: 3つの視点で意思決定を構造化

3カラムカード:
01 - 2フェーズモデル
     目標設定(WHY/WHAT)と達成手段(HOW)を分ける
     
02 - 意思決定Box
     すべての判断を6つの要素で構造化
     
03 - 人材能力マップ
     組織と個人のキャリアを繋げる
```

#### 対象者セクション (gray-100)
```
ラベル: FOR WHOM
見出し: このフレームワークは誰のためか

3カラム:
- 経営者: KPIが機能しない理由を知りたい
- 管理職: チームの意思決定を改善したい
- コンサル: クライアントに使えるフレームワークが欲しい
```

#### ミッションセクション (gray-900 ダーク)
```
ラベル: OUR BELIEF
見出し: 
  意思決定は「組織 × フェーズ × 資本制約」の交点で起きる
  「KPIは主役ではない」（←accent色）
説明:
  数字を追うのではなく、意思決定の構造を設計する。
  それが本当のKPI設計。
```

#### 関連サイトセクション (white)
```
建設DXサイトと同じ形式で、Harmonic Insightのサイト群を表示
```

#### CTAセクション (gray-900 ダーク)
```
見出し: まずは、フレームワークを見てみませんか
CTA:
  - フレームワークを見る
  - お問い合わせ
```

---

### フレームワークページ (/framework)

#### ヒーロー
```
ラベル: FRAMEWORK
見出し: 意思決定の構造
強調: 2フェーズモデルと意思決定Box
```

#### 2フェーズモデルセクション
```
ラベル: TWO-PHASE MODEL
見出し: 意思決定には「フェーズ」がある

2カラム:
[左] Phase 1: 目標設定フェーズ (WHY / WHAT)
     - この目標は妥当か？
     - 過去実績と整合しているか？
     - ここでの失敗は致命的（KPI以前の問題）
     
[右] Phase 2: 達成手段フェーズ (HOW)
     - どうやって達成するか？
     - どこに資本を配分するか？
     - ここで初めてKPIが意味を持つ
```

#### 意思決定Boxセクション
```
ラベル: DECISION BOX
見出し: すべての意思決定は「Box」で構造化できる

6つの要素をカードで表示:
- Purpose: 何のために決めるのか
- Question: 何を決めるのか（論点）
- Input: 判断材料（事実・言葉・数字）
- Options: 選択肢
- Constraints: 制約条件（資本）
- Output: 選択された一案

⚠️ PurposeとQuestionがないBoxは、ただの情報の山
```

#### 組織とPJの同型性セクション
```
ラベル: ISOMORPHISM
見出し: 組織とプロジェクトは同じ構造

対比表:
会社 → 事業部 → 部署 → 課
  ≡
プロジェクト → フェーズ → WBS → タスク

「プロジェクトとは期間限定の会社」
```

---

### 日本文化とKPIページ (/japan)

#### ヒーロー
```
ラベル: JAPAN CONTEXT
見出し: 日本文化とKPI
強調: なぜ欧米型KPIは日本で機能しにくいのか
```

#### 対比セクション
```
ラベル: COMPARISON
見出し: 2つの評価思想

2カラム:
[左カード] 欧米型KPIの思想
- 成果主義: 結果が全て
- 定量評価: 測れないものは管理できない
- 個人責任: 数字は個人に帰属
- 短期志向: 四半期で区切る
- 契約的関係: 達成したら報酬

[右カード・強調] 日本的評価の思想
- プロセス重視: どう頑張ったかを見る
- 定性評価: 姿勢・協調性・成長
- 集団責任: チームで助け合う
- 長期志向: 3年・5年で見る
- 共同体的関係: 会社は家族
```

#### 問題セクション (gray-100)
```
ラベル: THE CLASH
見出し: だから起きる問題

6カラムグリッド:
- KPIハック
- 短期主義の蔓延
- 協力の減少
- 形骸化
- モチベーション低下
- 経営との乖離
```

#### 解決策セクション
```
ラベル: SOLUTION
見出し: 日本に合うKPI設計の方向性

6つのカード:
1. 目的の共有 - 数字の「なぜ」を全員が理解
2. プロセスKPI - 行動・成長も指標化
3. チームKPI - 個人ではなくチーム単位
4. 長期KPI - 四半期だけでなく3年視点
5. 定性＋定量 - 数字と言葉の両方で評価
6. 人材マップ連動 - 能力開発と評価を一体化
```

---

### ストーリーページ (/stories)

#### ヒーロー
```
ラベル: STORIES
見出し: 具体例で理解する
強調: 3つの業界の意思決定ストーリー
```

#### タブ切り替えで3ストーリーを表示

**ストーリー1: 建設会社の年度計画**
```
Phase 1: 目標設定
- 社長「来期120億」
- 事業部長「40億を担う」
- 部長「土木で18億」

Phase 2: 達成手段
- 事業部長「大型2件獲得＋営業3名増員」
- 部長「A社改修確保、原価率2%削減」
- 課長「週次進捗、協力会社B強化」

学び: KPIは行動指標に分解されて初めて意味を持つ
```

**ストーリー2: システム導入プロジェクト**
```
Phase 1: ゴール設定
- オーナー「来年4月稼働、予算1.5億」
- PM「8ヶ月完了、業務を止めない」
- 顧客PM「現場抵抗最小化」

Phase 2: 達成手段
- PM「要件3ヶ月、週次レビュー」
- リーダー「主要画面プロト作成」
- メンバー「日次レビュー、テスト自動化」

学び: 炎上の本質は「Phase 1が曖昧なままPhase 2を強化」
```

**ストーリー3: コンサル会社の案件獲得**
```
Phase 1: 事業目標設定
- パートナー「建設DXで5億」
- ディレクター「PMI軸で年間10件」
- マネージャー「大手3社から継続受注」

Phase 2: 達成手段
- ディレクター「月1セミナー、WP4本」
- マネージャー「A社に四半期提案」
- コンサルタント「週次共有、事例DB化」

学び: 案件ごとにBoxが立ち上がり、Boxの質が会社の価値
```

---

### 人材能力マップページ (/skill-map)

#### ヒーロー
```
ラベル: SKILL MAP
見出し: 人材能力マップ
強調: 組織と個人のキャリアを一致させる
```

#### 3軸構造セクション
```
ラベル: THREE AXES
見出し: 「組織階層 × 基本能力 × 事業専門性」の3軸

テーブル形式で表示:

| 組織階層 | 責任範囲 | 基本能力 | 事業専門性 |
|---------|---------|---------|-----------|
| 社長 | 会社全体の売上・利益 | 経営戦略, 財務会計, 組織マネジメント | 業界動向, M&A判断 |
| 事業部長 | 事業部の売上・利益 | 事業戦略, チームビルディング | 担当事業の深い知見 |
| 部長 | 部門の売上・利益 | 部門マネジメント, 予算管理 | 担当領域の専門知識 |
| 課長 | 課の成果 | チームリーダーシップ, 問題解決 | 実務の深い理解 |
| 社員 | 担当業務 | 基礎ビジネススキル, ITリテラシー | 業務知識の習得 |
```

#### 活用方法セクション (gray-100)
```
ラベル: HOW TO USE
見出し: このマップの活用方法

4カラムカード:
1. 人的資本の可視化 - 現状把握、ギャップ特定
2. 教育・研修設計 - 階層別研修の体系化
3. 個人キャリア開発 - 組織ニーズとの整合
4. 評価・報酬設計 - 能力×成果の両面評価
```

#### メッセージセクション (gray-900 ダーク)
```
見出し:
  このマップがあって初めて
  「会社が求める人材像」と「個人のキャリアプラン」が一致する
  （←accent色）
```

---

### Aboutページ (/about)

```
ラベル: ABOUT
見出し: このフレームワークについて

説明:
  このフレームワークは、建設業界のDXを20年以上支援する中で、
  「なぜKPIは機能しないのか」という問いに向き合い続けた実践知を体系化したものです。

著者: Erik Arthur / あすてぃあ
  - 建設業DX 7年
  - IT業界 約30年
  - 700社以上の企業変革を支援

連載: noteで公開中（リンク）
書籍化: 予定

お問い合わせ: フォームへのリンク
```

---

## 4. 共通コンポーネント

### グローバルナビ（全サイト共通）
```tsx
const sites = [
  { name: 'Home', url: 'https://harmonic-insight-corporate.vercel.app/' },
  { name: '建設DX', url: 'https://const-dx-home.vercel.app/' },
  { name: 'Insight Series', url: 'https://insight-series-site.vercel.app/' },
  { name: 'Apps/Lab', url: 'https://h-insight-apps-portal.vercel.app/' },
  { name: 'Framework', url: 'https://insight-framework.vercel.app/', current: true },
  { name: 'Dashboard', url: 'https://toko-bi.vercel.app/' },
];
```

### フッター
建設DXサイトと同じ構造:
- 左: Harmonic Insight ロゴ + タグライン
- 中央: サイト群リンク
- 右: コンタクト情報

---

## 5. 技術要件

### スタック
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion（アニメーション、オプション）

### Tailwind設定

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        border: '#e0e0e0',
        accent: {
          DEFAULT: '#8b6914',
          light: '#b8941f',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        mincho: ['"Noto Serif JP"', '"Hiragino Mincho ProN"', 'serif'],
        sans: ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
      },
    },
  },
};
```

### container-custom クラス
```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

---

## 6. 実装の優先順位

1. 共通レイアウト（グローバルナビ、ヘッダー、フッター）
2. トップページ
3. /framework（2フェーズモデル、意思決定Box）
4. /japan（日本文化とKPI）
5. /stories（3ストーリー、タブ切り替え）
6. /skill-map（人材能力マップ）
7. /about

---

## 7. 参考

### 建設DXサイト（トンマナの基準）
https://const-dx-home.vercel.app/

このサイトのHTML/CSSを参考に、完全に同じトーンで構築してください。
特に以下の要素を踏襲:
- グローバルナビ（最上部のダークバー）
- セクションラベルのスタイル（英語大文字、tracking-widest）
- 明朝体の使い方
- ゴールドアクセントの使い方
- カードのボーダースタイル
- ダークセクションの使い方

---

以上です。不明点があれば質問してください。
