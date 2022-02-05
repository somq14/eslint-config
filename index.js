module.exports = {
  // ESLint が TypeScript を理解できるようパーサを指定する
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // 型情報を使用したリントのために TypeScript の設定ファイルを指定
    // 必要があれば各プロジェクトで設定を上書きして使用する
    project: ["./tsconfig.json"],
  },
  plugins: ["import", "sort-export-all"],
  extends: [
    // ESLint のルールをおすすめ設定にする
    "eslint:recommended",
    // eslint-plugin-import を TypeScript 用に設定する
    "plugin:import/typescript",
    // export 文をソートする
    "plugin:sort-export-all/recommended",
    // typescript 関係のルールをおすすめ設定にする
    "plugin:@typescript-eslint/recommended",
    // 型情報を使った typescript 関係のルールをおすすめ設定にする
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // スタイルに関する設定を無効化して prettier に任せる
    "prettier",
  ],
  rules: {
    /*
     * 変数・識別子
     */
    "no-var": ["warn"],
    "prefer-const": ["warn"],

    /*
     * コーディングスタイル
     */
    curly: ["warn"],
    "prefer-template": ["warn"],
    "prefer-arrow-callback": ["warn"],
    "@typescript-eslint/prefer-for-of": ["warn"],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: ["default"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
    ],

    /*
     * 条件
     */
    eqeqeq: ["warn"],
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: false,
        allowNullableNumber: false,
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": ["warn"],
    "@typescript-eslint/prefer-optional-chain": ["warn"],
    "@typescript-eslint/switch-exhaustiveness-check": ["warn"],

    /*
     * モジュール
     */
    "@typescript-eslint/explicit-module-boundary-types": ["warn"],
    "sort-imports": [
      "warn",
      { ignoreDeclarationSort: true, ignoreMemberSort: false },
    ],
    "import/no-self-import": ["warn"],
    "import/no-cycle": ["warn", { ignoreExternal: true }],
    "import/no-useless-path-segments": ["warn"],
    "import/no-extraneous-dependencies": ["warn"],
    "import/first": ["warn"],
    "import/no-duplicates": ["warn"],
    "import/order": [
      "warn",
      { alphabetize: { order: "asc" }, "newlines-between": "always" },
    ],
    "import/no-default-export": ["warn"],
    "import/no-anonymous-default-export": ["warn"],

    /*
     * ミス防止
     */
    "require-atomic-updates": ["warn"],
    "@typescript-eslint/no-unused-expressions": ["warn"],
    "@typescript-eslint/no-useless-constructor": ["warn"],
    "@typescript-eslint/unbound-method": ["warn"],
    "@typescript-eslint/require-array-sort-compare": ["warn"],
  },
};
