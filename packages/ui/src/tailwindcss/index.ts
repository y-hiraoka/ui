import { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import { getColors } from "theme-colors";
import { selectHighContrastColors } from "./select-high-contrast-colors";
import Color from "color";

type PresetOptions = {
  colors?: {
    main?: string;
    sub?: string;
    gray?: string;
    danger?: string;
    warning?: string;
  };
};

export const preset = (options: PresetOptions): Config => {
  const textPrimary = "#000";
  const textPrimaryInvert = "#fff";
  const textSecondary = "#777";
  const textSecondaryInvert = "#ddd";
  const mainColorScale = getColors(options.colors?.main ?? "#805ad5");
  const subColorScale = getColors(options.colors?.sub ?? "#2fd72f");
  const grayColorScale = getColors(options.colors?.gray ?? "#9da7ba");
  const dangerColorScale = getColors(options.colors?.danger ?? "#dc1010");
  const warningColorScale = getColors(options.colors?.warning ?? "#efc338");
  const mainHighContrastTextColors = selectHighContrastColors(
    mainColorScale,
    textPrimary,
    textPrimaryInvert
  );
  const subHighContrastTextColors = selectHighContrastColors(
    subColorScale,
    textPrimary,
    textPrimaryInvert
  );

  return {
    content: [],
    theme: {
      colors: {
        transparent: defaultColors.transparent,
        current: defaultColors.current,
        "glass-white": "#ffffff",
        main: colorRecordToCssVarRecord(
          mainColorScale,
          (key) => `--stui-c-main-${key}`
        ),
        sub: colorRecordToCssVarRecord(
          subColorScale,
          (key) => `--stui-c-sub-${key}`
        ),
        gray: colorRecordToCssVarRecord(
          grayColorScale,
          (key) => `--stui-c-gray-${key}`
        ),
        danger: colorRecordToCssVarRecord(
          dangerColorScale,
          (key) => `--stui-c-danger-${key}`
        ),
        warning: colorRecordToCssVarRecord(
          warningColorScale,
          (key) => `--stui-c-warning-${key}`
        ),
      },
      extend: {
        textColor: {
          "main-high-contrast": mainHighContrastTextColors,
          "sub-high-contrast": subHighContrastTextColors,
          primary: textPrimary,
          secondary: textSecondary,
        },
        keyframes: {
          "loading-dot-bounce": {
            "0%": { transform: "scale(1)", opacity: "1" },
            "100%": { transform: "scale(0.8)", opacity: "0.75" },
          },
        },
        animation: {
          "loading-dot-bounce":
            "loading-dot-bounce 0.75s ease-in-out infinite alternate",
        },
      },
      animationDelay: {
        200: "200ms",
        400: "400ms",
      },
    },
    plugins: [
      plugin(({ matchUtilities, theme }) => {
        matchUtilities(
          {
            "grid-cols-auto-fill": (value) => ({
              gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
            }),
          },
          { values: theme("spacing") }
        );

        matchUtilities(
          {
            "animation-delay": (value) => ({
              "animation-delay": value,
            }),
          },
          { values: theme("animationDelay") }
        );
      }),
    ],
  };
};

const colorRecordToCssVarRecord = (
  record: Record<string, string>,
  cssVarTemplate: (key: string) => string
) =>
  Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      // prettier-ignore
      `rgb(var(${cssVarTemplate(key)}, ${Color(value).rgb().array().map(Math.round).join(" ")}) / <alpha-value>)`,
    ])
  );
