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
    "no-var": ["error"],
    "prefer-const": ["error"],

    /*
     * コーディングスタイル
     */
    curly: ["error"],
    "prefer-template": ["error"],
    "prefer-arrow-callback": ["error"],
    "@typescript-eslint/prefer-for-of": ["error"],
    "@typescript-eslint/naming-convention": [
      "error",
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
    eqeqeq: ["error"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: false,
        allowNullableNumber: false,
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": ["error"],
    "@typescript-eslint/prefer-optional-chain": ["error"],
    "@typescript-eslint/switch-exhaustiveness-check": ["error"],

    /*
     * モジュール
     */
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "sort-imports": [
      "error",
      { ignoreDeclarationSort: true, ignoreMemberSort: false },
    ],
    "import/no-self-import": ["error"],
    "import/no-cycle": ["error", { ignoreExternal: true }],
    "import/no-useless-path-segments": ["error"],
    "import/no-extraneous-dependencies": ["error"],
    "import/first": ["error"],
    "import/no-duplicates": ["error"],
    "import/order": [
      "error",
      { alphabetize: { order: "asc" }, "newlines-between": "always" },
    ],
    "import/no-default-export": ["error"],
    "import/no-anonymous-default-export": ["error"],

    /*
     * ミス防止
     */
    "require-atomic-updates": ["error"],
    "@typescript-eslint/no-unused-expressions": ["error"],
    "@typescript-eslint/no-useless-constructor": ["error"],
    "@typescript-eslint/unbound-method": ["error"],
    "@typescript-eslint/require-array-sort-compare": ["error"],

    /*
     * 非同期処理
     */
    "@typescript-eslint/require-await": ["off"],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
  },
};
