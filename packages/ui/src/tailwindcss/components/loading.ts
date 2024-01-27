import plugin from "tailwindcss/plugin";

export const loadingPlugin = plugin(({ addComponents, theme }) => {
  addComponents({
    "@keyframes loading-dot-bounce": {
      "0%": { transform: "scale(1)", opacity: "1" },
      "100%": { transform: "scale(0.8)", opacity: "0.75" },
    },
    ".loading-dot-bounce": {
      animationName: "loading-dot-bounce",
      animationDuration: "0.75s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
    },
    ".loading-animation-delay-200": {
      animationDelay: "200ms",
    },
    ".loading-animation-delay-400": {
      animationDelay: "400ms",
    },
  });
});
