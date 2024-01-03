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
  color = "normal",
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
    <div className={classNames(className)}>
      <label
        className="text-white text-[15px] leading-none pr-[15px]"
        htmlFor={id || _id}
      >
        {label}
      </label>
      <RadixSwitch.Root
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
        id={id || _id}
      >
        <RadixSwitch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </RadixSwitch.Root>
    </div>
  );
};
