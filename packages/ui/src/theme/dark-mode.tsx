import { FC, createContext, useContext, useEffect, useState } from "react";
import { useMatchMedia } from "../hooks/use-match-media";

export type ColorMode = "light" | "dark" | "system";

export function isColorMode(value: unknown): value is ColorMode {
  return ["light", "dark", "system"].includes(value as string);
}

export type ColorModeContextType = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
};

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null,
);

export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a StinUIProvider.");
  }
  return context;
};

export const ColorModeProvider: FC<{
  defaultColorMode: ColorMode | undefined;
  children: React.ReactNode;
}> = ({ children, defaultColorMode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(
    defaultColorMode || "system",
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      <AdjustColorMode />
      {children}
    </ColorModeContext.Provider>
  );
};

const AdjustColorMode: FC = () => {
  const { colorMode } = useColorMode();
  const prefersDark = useMatchMedia("(prefers-color-scheme: dark)");
  const actualColorMode: Exclude<ColorMode, "system"> =
    colorMode === "system" ? (prefersDark ? "dark" : "light") : colorMode;

  useEffect(() => {
    document.documentElement.dataset.colorMode = actualColorMode;
  }, [actualColorMode]);

  return null;
};
