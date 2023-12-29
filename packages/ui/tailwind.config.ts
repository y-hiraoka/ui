import { Config } from "tailwindcss";
import { preset } from "./src/tailwindcss";

const config: Config = {
  presets: [preset],
  content: ["./src/**/*.(ts|tsx)"],
};

export default config;
