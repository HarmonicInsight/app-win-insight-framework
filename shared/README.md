# Harmonic Insight 共通デザインシステム

各サイトに統一されたデザインを適用するための共通コンポーネントとスタイルです。

## ファイル構成

```
shared/
├── design-system.css    # 統一デザインシステム（CSS変数・ユーティリティ）
├── SiteNavigation.tsx   # 共通ナビゲーション
├── SiteFooter.tsx       # 共通フッター
└── README.md            # このファイル
```

## 適用手順

### 1. 必要なパッケージをインストール

```bash
npm install framer-motion lucide-react
```

### 2. デザインシステムを適用

`design-system.css` の内容を `src/app/globals.css` に追加またはマージします。

**既存のTailwind設定がある場合:**
- CSS変数部分（`:root { ... }`）を追加
- ユーティリティクラス（`.container`, `.card`, `.btn` 等）を追加

### 3. 共通コンポーネントをコピー

```bash
# コンポーネントディレクトリを作成
mkdir -p src/components/common

# ファイルをコピー
cp shared/SiteNavigation.tsx src/components/common/
cp shared/SiteFooter.tsx src/components/common/
```

### 4. layout.tsx で使用

```tsx
import { SiteNavigation } from "@/components/common/SiteNavigation";
import { SiteFooter } from "@/components/common/SiteFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <SiteNavigation
          currentSite="construction-dx"  // 現在のサイトを指定
          navLinks={[
            { name: "サービス", href: "/services" },
            { name: "事例", href: "/cases" },
            { name: "お問い合わせ", href: "/contact" },
          ]}
          ctaButton={{ text: "無料相談", href: "/contact" }}
        />
        <main>{children}</main>
        <SiteFooter
          currentSite="construction-dx"
          description="建設業界のDXを支援するコンサルティングサービス"
          footerLinks={[
            {
              title: "サービス",
              links: [
                { name: "DX診断", href: "/diagnosis" },
                { name: "導入支援", href: "/support" },
              ],
            },
          ]}
        />
      </body>
    </html>
  );
}
```

## サイトID一覧

| サイト | currentSite |
|--------|-------------|
| Corporate | `"corporate"` |
| 建設DXの窓口 | `"construction-dx"` |
| Insight Series | `"insight-series"` |
| Apps Portal | `"apps"` |
| Framework | `"framework"` |
| Dashboard | `"dashboard"` |

## カスタマイズ

### アクセントカラーを変更したい場合

各サイトで異なるアクセントカラーを使いたい場合は、`globals.css` で CSS変数を上書きします：

```css
/* 建設DXの窓口: ゴールド系 */
:root {
  --accent-primary: #c9a227;
  --accent-primary-light: #d4b84a;
}
```

### ナビリンクをカスタマイズ

`navLinks` prop で各サイト固有のナビゲーションを設定：

```tsx
<SiteNavigation
  currentSite="insight-series"
  navLinks={[
    { name: "製品一覧", href: "/products" },
    { name: "料金", href: "/pricing" },
    { name: "ドキュメント", href: "/docs" },
  ]}
/>
```

## 依存関係

- `framer-motion` - アニメーション
- `lucide-react` - アイコン
- `next/navigation` - ルーティング

## 注意事項

1. **"use client"** ディレクティブが必要（クライアントコンポーネント）
2. フォントは Google Fonts の Noto Sans JP を想定（`<head>` で読み込み）
3. Tailwind CSS v4 の `@theme inline` 構文は環境によって調整が必要

---

質問や問題があれば、Harmonic Insight チームまでお問い合わせください。
