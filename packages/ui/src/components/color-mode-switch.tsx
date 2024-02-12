"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";
import { FC } from "react";
import { MdDarkMode, MdDevices, MdLightMode } from "react-icons/md";
import { classNames } from "../lib/classnames";
import { isColorMode, useColorMode } from "../theme/dark-mode";

export type ColorModeSwitchProps = {
  size?: "sm" | "md" | "lg";
  color?: "main" | "sub" | "normal";
  className?: string;
};

export const ColorModeSwitch: FC<ColorModeSwitchProps> = ({
  size = "md",
  color = "normal",
  className,
}) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <RadioGroup.Root
      className={classNames(
        "inline-grid grid-cols-3 grid-rows-1 items-center w-max border rounded-full isolate shadow-inner bg-gray-50 border-gray-300 dark:bg-gray-900 dark:border-gray-800",
        {
          sm: "p-0.5",
          md: "p-1",
          lg: "p-1",
        }[size],
        className,
      )}
      value={colorMode}
      onValueChange={(value) => isColorMode(value) && setColorMode(value)}
    >
      <span
        className={classNames(
          "rounded-full row-start-1 col-start-1 transition-transform z-0 shadow",
          {
            light: "transform translate-x-0",
            system: "transform translate-x-[100%]",
            dark: "transform translate-x-[200%]",
          }[colorMode],
          {
            sm: "h-6 w-6",
            md: "h-8 w-8",
            lg: "h-10 w-10",
          }[size],
          {
            main: "bg-main-500/30 border border-main-500/60",
            sub: "bg-sub-500/30 border border-sub-500/60",
            normal: "bg-gray-500/30 border border-gray-500/60",
          }[color],
        )}
      />
      {(["light", "system", "dark"] as const).map((mode) => (
        <RadioGroup.Item
          value={mode}
          key={mode}
          className={classNames(
            "z-10 rounded-full cursor-pointer inline-grid place-items-center leading-none text-gray-700 row-start-1 dark:text-gray-300",
            {
              sm: "h-6 w-6 text-sm",
              md: "h-8 w-8 text-lg",
              lg: "h-10 w-10 text-xl",
            }[size],
            {
              main: "data-[state=checked]:text-main-700 dark:data-[state=checked]:text-main-300",
              sub: "data-[state=checked]:text-sub-700 dark:data-[state=checked]:text-sub-300",
              normal: "",
            }[color],
            {
              light: "col-start-1",
              system: "col-start-2",
              dark: "col-start-3",
            }[mode],
          )}
        >
          {
            {
              light: <MdLightMode />,
              dark: <MdDarkMode />,
              system: <MdDevices />,
            }[mode]
          }
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
