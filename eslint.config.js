import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import vueParser from "vue-eslint-parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // Base (todos os arquivos)
  {
    files: ["**/*.{js,cjs,mjs,vue}"],
    extends: ["./.eslintrc-auto-import.json"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,

  // Vue (recomendadas)
  ...pluginVue.configs["flat/recommended"],

  // Força parser no .vue (isso destrava o template lint)
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
    },
    rules: {
      // Erro de indentação estilo "Expected indentation..."
      "vue/html-indent": [
        "error",
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
        },
      ],
    },
  },

  // JS (indentação)
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
    },
  },

  // Prettier: desliga conflitos + torna prettier uma regra (linha vermelha também)
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",

      "no-console": "warn",
      "no-unused-vars": "error",
      "no-debugger": "warn",
      camelcase: "error",
      "no-duplicate-imports": "error",
      quotes: ["error", "double"],
      "no-extra-boolean-cast": "off",
      "padded-blocks": ["error", "never"],
      "operator-assignment": ["error", "always"],
      "no-trailing-spaces": [
        "error",
        { skipBlankLines: true, ignoreComments: true },
      ],
      "one-var-declaration-per-line": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
    },
  },
];
