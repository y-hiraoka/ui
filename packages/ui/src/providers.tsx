"use client";

import { FC, PropsWithChildren } from "react";
import { ColorMode, ColorModeProvider } from "./theme/dark-mode";

export type StinUIProviderProps = {
  defaultColorMode?: ColorMode;
};

export const StinUIProvider: FC<PropsWithChildren<StinUIProviderProps>> = ({
  children,
  defaultColorMode,
}) => {
  return (
    <ColorModeProvider defaultColorMode={defaultColorMode}>
      {children}
    </ColorModeProvider>
  );
};
