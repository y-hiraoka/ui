import * as RadixSwitch from "@radix-ui/react-switch";
import { FC, ReactNode, useId } from "react";
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
  const _id = useId();

  return (
    <div className={classNames("flex items-center space-x-2", className)}>
      {label && (
        <label
          className={classNames(
            "font-medium leading-none cursor-pointer",
            {
              sm: "text-xs",
              md: "text-sm",
              lg: "text-base",
            }[size]
          )}
          htmlFor={id || _id}
        >
          {label}
        </label>
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
            main: "data-[state=checked]:bg-main-500 data-[state=checked]:border-main-400",
            sub: "data-[state=checked]:bg-sub-500 data-[state=checked]:border-sub-400",
          }[color]
        )}
        id={id || _id}
      >
        <RadixSwitch.Thumb
          className={classNames(
            "block bg-gray-200 border border-gray-300 rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform",
            {
              sm: "w-3 h-3 data-[state=checked]:translate-x-3",
              md: "w-4 h-4 data-[state=checked]:translate-x-4",
              lg: "w-5 h-5 data-[state=checked]:translate-x-5",
            }[size],
            {
              main: "data-[state=checked]:bg-main-50 data-[state=checked]:border-main-100",
              sub: "data-[state=checked]:bg-sub-50 data-[state=checked]:border-sub-100",
            }[color]
          )}
        />
      </RadixSwitch.Root>
    </div>
  );
};
