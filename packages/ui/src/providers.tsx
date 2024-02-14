"use client";

import { FC, PropsWithChildren } from "react";
import { ColorMode, ColorModeProvider } from "./theme/dark-mode";
import { ThemeColors, ThemeColorsProvider } from "./theme/theme-colors";

export type StinUIProviderProps = {
  defaultColorMode?: ColorMode;
  defaultThemeColors?: Partial<ThemeColors>;
};

export const StinUIProvider: FC<PropsWithChildren<StinUIProviderProps>> = ({
  children,
  defaultColorMode,
  defaultThemeColors,
}) => {
  return (
    <ColorModeProvider defaultColorMode={defaultColorMode}>
      <ThemeColorsProvider defaultThemeColors={defaultThemeColors}>
        {children}
      </ThemeColorsProvider>
    </ColorModeProvider>
  );
};
