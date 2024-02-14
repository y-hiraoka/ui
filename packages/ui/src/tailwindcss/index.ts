import Color from "color";
import { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import { getColors } from "theme-colors";
import { COLOR_CONSTANTS } from "../lib/color-constants";
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
    success?: string;
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
  const textPrimary = COLOR_CONSTANTS.text.primary;
  const textPrimaryInvert = COLOR_CONSTANTS.text.primaryInvert;
  const textSecondary = COLOR_CONSTANTS.text.secondary;
  const textPrimaryDark = COLOR_CONSTANTS.text.primaryDark;
  const textSecondaryDark = COLOR_CONSTANTS.text.secondaryDark;
  const mainColorScale = getColors(
    options.colors?.main ?? COLOR_CONSTANTS.theme.main,
  );
  const subColorScale = getColors(
    options.colors?.sub ?? COLOR_CONSTANTS.theme.sub,
  );
  const grayColorScale = getColors(
    options.colors?.gray ?? COLOR_CONSTANTS.theme.gray,
  );
  const successColorScale = getColors(
    options.colors?.success ?? COLOR_CONSTANTS.theme.success,
  );
  const dangerColorScale = getColors(
    options.colors?.danger ?? COLOR_CONSTANTS.theme.danger,
  );
  const warningColorScale = getColors(
    options.colors?.warning ?? COLOR_CONSTANTS.theme.warning,
  );
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
        success: colorRecordToCssVarRecord(
          successColorScale,
          (key) => `--stui-c-success-${key}`,
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
