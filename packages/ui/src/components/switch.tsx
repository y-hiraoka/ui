"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import { FC, ReactNode } from "react";
import { classNames } from "../lib/classnames";

export type SwitchProps = {
  id?: string;
  label?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "main" | "sub";
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
};

export const Switch: FC<SwitchProps> = ({
  id,
  label,
  className,
  size = "md",
  color = "main",
  defaultChecked,
  checked,
  onCheckedChange,
  disabled,
  required,
  name,
  value,
}) => {
  return (
    <label
      className={classNames(
        "flex items-center space-x-2 cursor-pointer has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        className,
      )}
      htmlFor={id}
    >
      {label && (
        <span
          className={classNames(
            "font-medium leading-none",
            {
              sm: "text-xs",
              md: "text-sm",
              lg: "text-base",
            }[size],
          )}
        >
          {label}
        </span>
      )}
      <RadixSwitch.Root
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        className={classNames(
          "rounded-full relative border border-gray-200 bg-gray-100 transition-colors",
          {
            sm: "w-7 h-4",
            md: "w-9 h-5",
            lg: "w-11 h-6",
          }[size],
          {
            main: "data-[state=checked]:bg-main-500 data-[state=checked]:border-main-400 dark:data-[state=checked]:bg-main-600 dark:data-[state=checked]:border-main-500",
            sub: "data-[state=checked]:bg-sub-500 data-[state=checked]:border-sub-400 dark:data-[state=checked]:bg-sub-600 dark:data-[state=checked]:border-sub-500",
          }[color],
        )}
        id={id}
      >
        <RadixSwitch.Thumb
          className={classNames(
            "block bg-gray-300 border border-gray-400 rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform dark:bg-gray-600 dark:border-gray-500",
            {
              sm: "w-3 h-3 data-[state=checked]:translate-x-3",
              md: "w-4 h-4 data-[state=checked]:translate-x-4",
              lg: "w-5 h-5 data-[state=checked]:translate-x-5",
            }[size],
            {
              main: "data-[state=checked]:bg-main-50 data-[state=checked]:border-main-100 dark:data-[state=checked]:bg-main-100 dark:data-[state=checked]:border-main-200",
              sub: "data-[state=checked]:bg-sub-50 data-[state=checked]:border-sub-100 dark:data-[state=checked]:bg-sub-100 dark:data-[state=checked]:border-sub-200",
            }[color],
          )}
        />
      </RadixSwitch.Root>
    </label>
  );
};
