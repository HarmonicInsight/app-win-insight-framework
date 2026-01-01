# Harmonic Insight 統一デザインシステム適用プロンプト

このプロンプトを各サイトのリポジトリで使用してください。

---

## 概要

Harmonic Insight の全サイトを統一されたダークテーマのデザインシステムで統一します。
**Insight Framework サイト（https://insight-framework.vercel.app/）** を基準として、
完全に同じトンマナで構築してください。

## 参考サイト

- **基準サイト**: https://insight-framework.vercel.app/
- **デザインシステム**: https://github.com/HarmonicInsight/app-win-insight-framework/tree/claude/harmonic-insight-design-system-gI01u/shared

## デザインの特徴

### カラーパレット（ダークテーマ）
```css
--bg-primary: #0a0a0f;      /* 最も暗い背景 */
--bg-secondary: #0f0f15;    /* セクション背景 */
--bg-tertiary: #14141c;     /* カード背景 */
--bg-elevated: #1a1a24;     /* 浮き上がった要素 */

--text-primary: #f0f0f0;    /* 見出し */
--text-secondary: #c8c8d0;  /* 本文 */
--text-muted: #78788a;      /* 補足 */

--accent-primary: #3b82f6;  /* メインブルー */
--accent-teal: #14b8a6;     /* サブアクセント */
```

### 共通コンポーネント
1. **SiteNavigation**: 固定ヘッダー、関連サイトドロップダウン、モバイルメニュー
2. **SiteFooter**: 関連サイトカード、フッターリンク
3. **Card**: グラデーション背景、ホバーエフェクト
4. **Button**: Primary（青）、Ghost（ボーダー）

## 修正内容

### 1. デザインシステムの適用
- `shared/design-system.css` の内容を `globals.css` に適用
- 白背景をダークテーマに変更
- カード、ボタン等のスタイルを統一

### 2. 共通ナビゲーションの適用
```tsx
import { SiteNavigation } from "@/components/common/SiteNavigation";

<SiteNavigation
  currentSite="YOUR_SITE_ID"  // 下記参照
  navLinks={[/* サイト固有のリンク */]}
  ctaButton={{ text: "CTA文言", href: "/path" }}
/>
```

### 3. 共通フッターの適用
```tsx
import { SiteFooter } from "@/components/common/SiteFooter";

<SiteFooter
  currentSite="YOUR_SITE_ID"
  description="サイトの説明文"
  footerLinks={[/* フッターリンク */]}
/>
```

## サイト別設定

| サイト | currentSite | 備考 |
|--------|-------------|------|
| Corporate | `"corporate"` | 会社情報・思想 |
| 建設DXの窓口 | `"construction-dx"` | 建設業DXコンサル |
| Insight Series | `"insight-series"` | ソフトウェア製品群 |
| Apps Portal | `"apps"` | モバイルアプリ |
| Framework | `"framework"` | 意思決定フレームワーク |

## 必要なパッケージ

```bash
npm install framer-motion lucide-react
```

## Google Fonts

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</head>
```

## 共通コンポーネントのコピー元

以下のファイルを `src/components/common/` にコピーしてください：

1. **SiteNavigation.tsx**
   - https://github.com/HarmonicInsight/app-win-insight-framework/blob/claude/harmonic-insight-design-system-gI01u/shared/SiteNavigation.tsx

2. **SiteFooter.tsx**
   - https://github.com/HarmonicInsight/app-win-insight-framework/blob/claude/harmonic-insight-design-system-gI01u/shared/SiteFooter.tsx

3. **design-system.css** (globals.css にマージ)
   - https://github.com/HarmonicInsight/app-win-insight-framework/blob/claude/harmonic-insight-design-system-gI01u/shared/design-system.css

---

## 実行指示

このサイトを Harmonic Insight 統一デザインシステムに合わせて修正してください。

1. 上記の共通コンポーネントを `src/components/common/` にコピー
2. `globals.css` に `design-system.css` の内容を適用（ダークテーマ化）
3. `layout.tsx` で `SiteNavigation` と `SiteFooter` を使用
4. 既存のページをダークテーマのスタイルに合わせて調整
5. ビルドが通ることを確認
6. コミット & プッシュ

**重要**: Insight Framework サイトと完全に同じトンマナ（ダークテーマ、カード、ボタン、タイポグラフィ）で統一してください。
