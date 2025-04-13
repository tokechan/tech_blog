# ブログ開発セットアップ手順

## ✅ 使用予定技術スタック

- **フロントエンド**: Next.js (TypeScript)
- **スタイリング**: TailwindCSS
- **バリデーション**: Zod
- **ORM / DB接続**: Prisma + MySQL
- **テスト**: Vitest
- **CI/CD**: GitHub Actions
- **デプロイ先**: Render
- **その他**: ESLint, Prettier

---

## 📁 プロジェクトフォルダ構成（初期設計）

---

my-blog/
├── public/                     # 静的ファイル（画像、faviconなど）
├── src/                        # ソースコード
│   ├── components/             # 再利用UIコンポーネント
│   ├── features/               # 機能ごとのロジック（例：posts, auth）
│   ├── pages/                  # Next.js ページ（ルーティング）
│   │   ├── index.tsx           # トップページ
│   │   └── posts/
│   │       └── [slug].tsx      # 記事詳細ページ
│   ├── lib/                    # 共通ロジック（Prisma clientなど）
│   │   ├── prisma.ts
│   │   └── utils.ts
│   ├── schemas/               # Zod スキーマ管理
│   ├── styles/                # グローバルCSS
│   │   └── globals.css
│   └── tests/                 # Vitest テストコード
│       └── sample.test.ts
├── prisma/                    # Prisma スキーマ＆マイグレーション関連
│   ├── schema.prisma
│   └── seed.ts
├── .github/                   # GitHub Actions用
│   └── workflows/
│       └── ci.yml
├── .env                       # 環境変数（DB接続など）
├── .eslintrc.js
├── .prettierrc
├── tailwind.config.js
├── next.config.js
├── package.json
├── tsconfig.json
├── README.md
└── docs/                     # セットアップ手順や開発メモ
    ├── setup-step-by-step.md
    └── ci-cd.md


---

---

## 🛠️ 次にやること（初期セットアップ予定）

1. `npx create-next-app@latest my-blog --typescript`  
2. TailwindCSS導入  
3. Prismaインストール & 初期設定  
4. MySQL接続（.env）  
5. GitHub Actionsの設定追加  
6. Renderデプロイ設定  
7. Zod + Vitestの導入

---

作業が進んだら、このmdファイルを更新していきます。
