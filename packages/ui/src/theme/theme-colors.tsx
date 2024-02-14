"use client";

import Color from "color";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useInsertionEffect,
} from "react";
import { getColors } from "theme-colors";
import { useLocalStorage } from "../hooks/use-local-storage";
import { COLOR_CONSTANTS } from "../lib/color-constants";

export type ThemeColors = {
  main: string;
  sub: string;
  gray: string;
  success: string;
  danger: string;
  warning: string;
};

export type ThemeColorsContextType = ThemeColors & {
  setMainColor: (color: string) => void;
  resetMainColor: () => void;
  setSubColor: (color: string) => void;
  resetSubColor: () => void;
  setGrayColor: (color: string) => void;
  resetGrayColor: () => void;
  setSuccessColor: (color: string) => void;
  resetSuccessColor: () => void;
  setDangerColor: (color: string) => void;
  resetDangerColor: () => void;
  setWarningColor: (color: string) => void;
  resetWarningColor: () => void;
};

const ThemeColorsContext = createContext<ThemeColorsContextType | null>(null);

export const useThemeColors = (): ThemeColorsContextType => {
  const context = useContext(ThemeColorsContext);
  if (!context) {
    throw new Error("useThemeColors must be used within a StinUIProvider.");
  }

  return context;
};

const isValidColor = (value: unknown): value is string => {
  try {
    Color(value as string);
    return true;
  } catch (error) {
    return false;
  }
};

export const ThemeColorsProvider: FC<{
  children: ReactNode;
  defaultThemeColors: Partial<ThemeColors> | undefined;
}> = ({ children, defaultThemeColors }) => {
  const [main, setMainColor] = useLocalStorage({
    defaultState: defaultThemeColors?.main ?? COLOR_CONSTANTS.theme.main,
    isValidValue: isValidColor,
    storageKey: "stui-theme-color-main",
  });
  const [sub, setSubColor] = useLocalStorage({
    defaultState: defaultThemeColors?.sub ?? COLOR_CONSTANTS.theme.sub,
    isValidValue: isValidColor,
    storageKey: "stui-theme-color-sub",
  });
  const [gray, setGrayColor] = useLocalStorage({
    defaultState: defaultThemeColors?.gray ?? COLOR_CONSTANTS.theme.gray,
    isValidValue: isValidColor,
    storageKey: "stui-theme-color-gray",
  });
  const [success, setSuccessColor] = useLocalStorage({
    defaultState: defaultThemeColors?.success ?? COLOR_CONSTANTS.theme.success,
    isValidValue: isValidColor,
    storageKey: "stui-theme-color-success",
  });
  const [danger, setDangerColor] = useLocalStorage({
    defaultState: defaultThemeColors?.danger ?? COLOR_CONSTANTS.theme.danger,
    isValidValue: isValidColor,
    storageKey: "stui-theme-color-danger",
  });
  const [warning, setWarningColor] = useLocalStorage({
    defaultState: defaultThemeColors?.warning ?? COLOR_CONSTANTS.theme.warning,
    isValidValue: isValidColor,
    storageKey: "stui-theme-color-warning",
  });

  const resetMainColor = useCallback(
    () => setMainColor(defaultThemeColors?.main ?? COLOR_CONSTANTS.theme.main),
    [defaultThemeColors?.main, setMainColor],
  );
  const resetSubColor = useCallback(
    () => setSubColor(defaultThemeColors?.sub ?? COLOR_CONSTANTS.theme.sub),
    [defaultThemeColors?.sub, setSubColor],
  );
  const resetGrayColor = useCallback(
    () => setGrayColor(defaultThemeColors?.gray ?? COLOR_CONSTANTS.theme.gray),
    [defaultThemeColors?.gray, setGrayColor],
  );
  const resetSuccessColor = useCallback(
    () =>
      setSuccessColor(
        defaultThemeColors?.success ?? COLOR_CONSTANTS.theme.success,
      ),
    [defaultThemeColors?.success, setSuccessColor],
  );
  const resetDangerColor = useCallback(
    () =>
      setDangerColor(
        defaultThemeColors?.danger ?? COLOR_CONSTANTS.theme.danger,
      ),
    [defaultThemeColors?.danger, setDangerColor],
  );
  const resetWarningColor = useCallback(
    () =>
      setWarningColor(
        defaultThemeColors?.warning ?? COLOR_CONSTANTS.theme.warning,
      ),
    [defaultThemeColors?.warning, setWarningColor],
  );

  return (
    <ThemeColorsContext.Provider
      value={{
        main,
        setMainColor,
        resetMainColor,
        sub,
        setSubColor,
        resetSubColor,
        gray,
        setGrayColor,
        resetGrayColor,
        success,
        setSuccessColor,
        resetSuccessColor,
        danger,
        setDangerColor,
        resetDangerColor,
        warning,
        setWarningColor,
        resetWarningColor,
      }}
    >
      <AdjustThemeColors />
      {children}
    </ThemeColorsContext.Provider>
  );
};

const AdjustThemeColors: FC = () => {
  const { main, sub, gray, success, danger, warning } = useThemeColors();

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `:root {
${toColorScaleCssVars(main, "main").join("")}
${toColorScaleCssVars(sub, "sub").join("")}
${toColorScaleCssVars(gray, "gray").join("")}
${toColorScaleCssVars(success, "success").join("")}
${toColorScaleCssVars(danger, "danger").join("")}
${toColorScaleCssVars(warning, "warning").join("")}
}`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [danger, gray, main, sub, success, warning]);

  return null;
};

const toColorScaleCssVars = (color: string, varName: string) => {
  const scale = getColors(Color(color).hex());

  return Object.entries(scale).map(([key, colorValue]): string => {
    const rgb = Color(colorValue);
    return `--stui-c-${varName}-${key}: ${rgb.rgb().array().map(Math.round).join(" ")};`;
  });
};
