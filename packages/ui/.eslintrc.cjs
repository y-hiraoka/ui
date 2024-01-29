/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "plugin:tailwindcss/recommended",
    "@y-hiraoka/eslint-config/library.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
