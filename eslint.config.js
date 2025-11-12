import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // 🧹 Global Ignores (replaces .eslintignore)
  globalIgnores([
    "node_modules",
    "dist",
    "build",
    "coverage",
    "public",
  ]),

  {
    files: ["**/*.{js,jsx}"],

    // 🧩 Extend Recommended + React Rules
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },

    rules: {
      // 🧠 Clean, strict rules
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "no-console": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);
