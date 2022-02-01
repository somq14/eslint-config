module.exports = {
  // ESLint が TypeScript を理解できるようパーサを指定する
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // 型情報を使用したリントのために TypeScript の設定ファイルを指定
    // 必要があれば各プロジェクトで設定を上書きして使用する
    project: ["./tsconfig.json"],
  },
  extends: [
    // ESLint のルールをおすすめ設定にする
    "eslint:recommended",
    // export 文をソートする
    "plugin:sort-export-all/recommended",
    // typescript 関係のルールをおすすめ設定にする
    "plugin:@typescript-eslint/recommended",
    // 型情報を使った typescript 関係のルールをおすすめ設定にする
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // スタイルに関する設定を無効化して prettier に任せる
    "prettier",
  ],
};
