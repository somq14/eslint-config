/*
 * ESLint を使うと JavaScript や TypeScript のリント (問題のありそうなコードを指摘すること) ができる。
 * ESLint にはコードの問題を指摘する様々なルールが実装されており、 rules セクションでこれらを有効にできる。
 *
 * サードパーティ製のプラグインを読み込むことで、ESLint に様々なルールを追加することもできる。
 * プラグインは eslint-plugin-xxx という名前で配布されている。
 * plugin セクションにプラグインの名称を指定することで、ルールが使用可能になる。
 *
 * ESLint の設定の手間を軽減するために、設定の下敷きとなる config が配布されている。
 * extends セクションに config を設定することで、おすすめのルールを一括で有効にしたり、プラグインを有効化したうえで適切な設定をしたりできる。
 *
 * 以下の設定ではまず JavaScript に対するルールを設定する。
 * overrides セクションで TypeScript に対してもルールを設定している。
 *
 * ルールの設定に際しては以下を方針としている。
 * - すべてのルールを徹底的に設定しようとせず、recommended として配布されている設定をベースにする
 * - 優劣の付けにくいスタイルの問題については自分の好みを押し付けず、各自の好みに任せる。
 * - 遭遇したことのない問題に対して心配してルールを設定しようとせず、実際に役に立つルールだけを設定する。
 * - すべての違反を warn レベルにし、コンパイラの error との区別を容易にする。
 */
module.exports = {
  // 想定するランタイム、モジュールシステム、JavaScript のバージョンに合わせた設定をする。
  // ここでは JavaScript を Node.js のスクリプトやツールの設定ファイルに使う想定で考える。

  // Node.js 12 以降が対応している ES2019 を想定する
  // cf. https://node.green/
  parserOptions: {
    ecmaVersion: 2019,
  },

  // Node.js の環境を想定する
  // cf. https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    node: true,
  },

  plugins: [
    // すべてのルールを warn レベルにする
    "only-warn",
  ],

  extends: [
    // ESLint のルールをおすすめ設定にする
    "eslint:recommended",

    // コード整形に関する設定を無効化するプラグインを設定する
    // ESLint ではなく別のツール (prettier) で別途コード整形する
    // ルールを確実に無効化ため設定は最後にする
    // cf. https://github.com/prettier/eslint-config-prettier
    "prettier",
  ],

  rules: {
    /*
     * ESLint
     * cf. https://eslint.org/docs/rules/
     */
    // 変数宣言では var より let、let より const を使う
    "no-var": ["warn"],
    "prefer-const": ["warn"],

    // if 文などのあとの複文を必須化する
    curly: ["warn"],

    // 緩い比較 (==) より、厳格な比較 (===) を推奨する
    // cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness
    eqeqeq: ["warn"],

    // 文字列結合よりテンプレートリテラルを推奨する
    // cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
    "prefer-template": ["warn"],

    // ループ内での await を警告する
    // ループ内で DB アクセスしてしまうケースを検出したい
    "no-await-in-loop": ["warn"],

    // 不安定な挙動を引き起こす非同期処理を検出する
    // cf. https://eslint.org/docs/rules/require-atomic-updates
    "require-atomic-updates": ["warn"],

    // cond ? true : false のようなコードを警告する
    "no-unneeded-ternary": ["warn"],
  },
  overrides: [
    {
      // TypeScript に対して設定をする
      files: ["*.ts", "*.tsx"],

      // ESLint が TypeScript の構文を理解できるようにパーサを指定する
      // cf. https://typescript-eslint.io/docs/linting/
      // cf. https://www.npmjs.com/package/@typescript-eslint/parser
      parser: "@typescript-eslint/parser",

      parserOptions: {
        // TypeScript の型情報を用いたリントルールを有効にする
        // cf. https://typescript-eslint.io/docs/linting/type-linting
        project: ["./tsconfig.json"],
      },

      settings: {
        // eslint-plugin-import を TypeScript 用に設定する
        // import を解決する resolver として eslint-plugin-resolver-typescript を指定
        // cf. https://www.npmjs.com/package/eslint-plugin-import
        "import/resolver": {
          node: null,
          typescript: {},
        },
      },

      plugins: [
        // recommended の config には TypeScript では有効化の必要がないルールも多く含まれている
        // 例外的に recommended は使用せず、個別にルールを設定する
        "import",
      ],

      extends: [
        // eslint-plugin-import を有効化し TypeScript 用に設定する
        // cf. https://github.com/import-js/eslint-plugin-import
        "plugin:import/typescript",

        // export * from "./xxx" を並び変えるプラグインを設定する
        // cf. https://www.npmjs.com/package/eslint-plugin-sort-export-all
        "plugin:sort-export-all/recommended",

        // @typescript-eslint/eslint-plugin を有効化し、ルールをおすすめ設定にする
        // cf. https://typescript-eslint.io/rules/
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",

        // 改めてコード整形に関するルールを無効化する
        "prettier",
      ],

      rules: {
        /*
         * ESLint
         * cf. https://eslint.org/docs/rules/
         */
        // import { a, b } from "./xxx" の a, b の部分を並べ替える
        // import 文そのものの並べ替えは別ルールで行う
        "sort-imports": [
          "warn",
          { ignoreDeclarationSort: true, ignoreMemberSort: false },
        ],

        /*
         * eslint-plugin-import
         * cf. https://www.npmjs.com/package/eslint-plugin-import
         */
        // import 文はファイルの先頭に書く
        "import/first": ["warn"],
        // import 文をグルーピングしつつ並び変える
        "import/order": [
          "warn",
          { alphabetize: { order: "asc" }, "newlines-between": "always" },
        ],
        // 同一モジュールからの import 文は1つにまとめる
        "import/no-duplicates": ["warn"],
        // "." による import を警告する
        "import/no-self-import": ["warn"],
        // 冗長な import パスを警告する
        "import/no-useless-path-segments": ["warn"],
        // circular dependencies (A と B が相互に import し合うような状況) を警告する
        "import/no-cycle": ["warn", { ignoreExternal: true }],
        // default export は避ける
        "import/no-default-export": ["warn"],

        /*
         * @typescript-eslint/eslint-plugin
         * cf. https://typescript-eslint.io/rules/
         */
        // 変数の命名規則を指定する
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: ["default"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
          },
          {
            selector: ["typeLike"],
            format: ["PascalCase"],
          },
        ],
        // 未使用の変数を警告する
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        // export する値には明示的に型を指定する
        "@typescript-eslint/explicit-module-boundary-types": ["warn"],
        // レシーバオブジェクトなしでメソッドへの参照を呼び出すことを防止する
        "@typescript-eslint/unbound-method": ["warn"],
        // Array.sort の比較関数の省略を警告する
        "@typescript-eslint/require-array-sort-compare": ["warn"],
        // 条件式には boolean 型を要求する
        "@typescript-eslint/strict-boolean-expressions": [
          "warn",
          {
            // cf. https://typescript-eslint.io/rules/strict-boolean-expressions#options
            allowString: false,
            allowNumber: false,
            allowNullableObject: true,
            allowNullableBoolean: true,
            allowNullableString: false,
            allowNullableNumber: false,
          },
        ],
        // switch 文の case 句が網羅されていることをチェックする
        "@typescript-eslint/switch-exhaustiveness-check": ["warn"],
        // オプショナルチェイン (obj?.prop) を推奨する
        "@typescript-eslint/prefer-optional-chain": ["warn"],
        // index を使った for 文より for of 文を使用する
        "@typescript-eslint/prefer-for-of": ["warn"],
        // async 関数に await が使用されていなくても許す
        "@typescript-eslint/require-await": ["off"],
        // 戻り型が void な関数に async 関数を渡すことを許す
        // cf. https://typescript-eslint.io/rules/no-misused-promises#checksvoidreturn-true
        "@typescript-eslint/no-misused-promises": [
          "warn",
          { checksVoidReturn: false },
        ],
        // 空の関数を許す
        "@typescript-eslint/no-empty-function": ["off"],
      },
    },
  ],
};
