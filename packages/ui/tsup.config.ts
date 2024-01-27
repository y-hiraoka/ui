import { defineConfig } from "tsup";

export default defineConfig([
  {
    format: "esm",
    entry: ["src", "!src/**/*.test.{ts,tsx}"],
    outDir: "dist/esm",
    target: "es2019",
    bundle: false,
    banner: {
      js: '"use client";',
    },
  },
  {
    format: "cjs",
    entry: ["src", "!src/**/*.test.{ts,tsx}"],
    outDir: "dist/cjs",
    target: "es2019",
    bundle: false,
    banner: {
      js: '"use client";',
    },
  },
]);
