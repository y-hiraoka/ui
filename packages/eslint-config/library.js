const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  env: {
    node: true,
    browser: true,
  },
  plugins: ["import"],
  rules: {
    "import/order": ["warn", { alphabetize: { order: "asc" } }],
    "no-duplicate-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/button-has-type": "error",
    "react/no-access-state-in-setstate": "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-fragments": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "react/void-dom-elements-no-children": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    ".*.cjs",
    ".*.mjs",
    "*.config.[jt]s",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
};
