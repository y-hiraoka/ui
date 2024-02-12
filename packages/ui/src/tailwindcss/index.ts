import Color from "color";
import { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import { getColors } from "theme-colors";
import { basePlugin } from "./base";
import { drawerPlugin } from "./components/drawer";
import { loadingPlugin } from "./components/loading";
import { selectHighContrastColors } from "./select-high-contrast-colors";
import { gridAutoLayoutPlugin } from "./utilities/grid-auto-layout";

type PresetOptions = {
  colors?: {
    main?: string;
    sub?: string;
    gray?: string;
    danger?: string;
    warning?: string;
  };
  fontFamilies?: {
    sans?: string[];
    mono?: string[];
    serif?: string[];
  };
};

export const preset = (options: PresetOptions = {}): Config => {
  const textPrimary = "#2e2e2e";
  const textPrimaryInvert = "#f0f0f0";
  const textSecondary = "#6e6e6e";
  const textPrimaryDark = "#efeeee";
  const textSecondaryDark = "#b3b3b3";
  const mainColorScale = getColors(options.colors?.main ?? "#805ad5");
  const subColorScale = getColors(options.colors?.sub ?? "#2fd72f");
  const grayColorScale = getColors(options.colors?.gray ?? "#9da7ba");
  const dangerColorScale = getColors(options.colors?.danger ?? "#dc1010");
  const warningColorScale = getColors(options.colors?.warning ?? "#efc338");
  const mainHighContrastTextColors = selectHighContrastColors(
    mainColorScale,
    textPrimary,
    textPrimaryInvert,
  );
  const subHighContrastTextColors = selectHighContrastColors(
    subColorScale,
    textPrimary,
    textPrimaryInvert,
  );

  return {
    content: [],
    darkMode: ["class", '[data-color-mode="dark"]'],
    theme: {
      colors: {
        transparent: defaultColors.transparent,
        current: defaultColors.current,
        white: defaultColors.white,
        black: defaultColors.black,
        "glass-white": "#ffffff",
        main: colorRecordToCssVarRecord(
          mainColorScale,
          (key) => `--stui-c-main-${key}`,
        ),
        sub: colorRecordToCssVarRecord(
          subColorScale,
          (key) => `--stui-c-sub-${key}`,
        ),
        gray: colorRecordToCssVarRecord(
          grayColorScale,
          (key) => `--stui-c-gray-${key}`,
        ),
        danger: colorRecordToCssVarRecord(
          dangerColorScale,
          (key) => `--stui-c-danger-${key}`,
        ),
        warning: colorRecordToCssVarRecord(
          warningColorScale,
          (key) => `--stui-c-warning-${key}`,
        ),
      },
      extend: {
        textColor: {
          "main-high-contrast": mainHighContrastTextColors,
          "sub-high-contrast": subHighContrastTextColors,
          primary: textPrimary,
          "primary-dark": textPrimaryDark,
          secondary: textSecondary,
          "secondary-dark": textSecondaryDark,
        },
        aria: {
          "current-page": 'current="page"',
        },
        fontFamily: {
          sans: [
            ...(options.fontFamilies?.sans ?? []),
            ...defaultTheme.fontFamily.sans,
          ],
          mono: [
            ...(options.fontFamilies?.mono ?? []),
            ...defaultTheme.fontFamily.mono,
          ],
          serif: [
            ...(options.fontFamilies?.serif ?? []),
            ...defaultTheme.fontFamily.serif,
          ],
        },
      },
    },
    plugins: [basePlugin, gridAutoLayoutPlugin, loadingPlugin, drawerPlugin],
  };
};

const colorRecordToCssVarRecord = (
  record: Record<string, string>,
  cssVarTemplate: (key: string) => string,
) =>
  Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      // prettier-ignore
      `rgb(var(${cssVarTemplate(key)}, ${Color(value).rgb().array().map(Math.round).join(" ")}) / <alpha-value>)`,
    ]),
  );
