import { preset } from "@y-hiraoka/ui/tailwindcss";
import { Config } from "tailwindcss";

const config: Config = {
  presets: [preset()],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@y-hiraoka/ui/**/*.js",
  ],
  theme: {},
  plugins: [],
};

export default config;
