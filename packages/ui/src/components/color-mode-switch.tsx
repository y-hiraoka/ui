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
        "grid grid-cols-3 grid-rows-1 items-center w-max border rounded-full isolate shadow-inner p-0.5 bg-gray-50 border-gray-300 dark:bg-gray-900 dark:border-gray-800",
        className,
      )}
      value={colorMode}
      onValueChange={(value) => isColorMode(value) && setColorMode(value)}
    >
      <span
        className={classNames(
          "rounded-full row-start-1 col-start-1 transition-transform z-0 shadow aspect-square h-full",
          {
            light: "transform translate-x-0",
            system: "transform translate-x-[100%]",
            dark: "transform translate-x-[200%]",
          }[colorMode],
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
              sm: "h-[26px] w-[26px] text-sm",
              md: "h-[34px] w-[34px] text-lg",
              lg: "h-[42px] w-[42px] text-xl",
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
