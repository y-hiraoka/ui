import { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import { getColors } from "theme-colors";
import { selectHighContrastColors } from "./select-high-contrast-colors";

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
  const colorScaleSub = getColors(options.colors?.sub ?? "#6b46c1");
  const grayColorScale = getColors(options.colors?.gray ?? "#d2d6dc");
  const dangerColorScale = getColors(options.colors?.danger ?? "#dc3030");
  const warningColorScale = getColors(options.colors?.warning ?? "#efc338");
  const mainHighContrastTextColors = selectHighContrastColors(
    mainColorScale,
    textPrimary,
    textPrimaryInvert
  );
  const subHighContrastTextColors = selectHighContrastColors(
    colorScaleSub,
    textSecondary,
    textSecondaryInvert
  );

  return {
    content: [],
    theme: {
      colors: {
        transparent: defaultColors.transparent,
        current: defaultColors.current,
        main: colorRecordToCssVarRecord(
          mainColorScale,
          (key) => `--stui-c-main-${key}`
        ),
        sub: colorRecordToCssVarRecord(
          colorScaleSub,
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
        },
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
      `var(${cssVarTemplate(key)}, ${value})`,
    ])
  );
