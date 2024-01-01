import { ComponentProps, FC, ReactNode } from "react";
import { classNames } from "../lib/classnames";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "outline" | "solid" | "ghost" | "glass";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "main" | "sub" | "normal" | "danger";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  color = "normal",
  startIcon,
  endIcon,
  isLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        "inline-flex rounded-md",
        {
          xs: "text-xs px-2 py-1",
          sm: "text-sm px-3 py-2",
          md: "text-md px-4 py-3",
          lg: "text-lg px-5 py-4",
          xl: "text-xl px-6 py-5",
        }[size],
        {
          outline: {
            main: "border",
            sub: "border",
            normal: "border",
            danger: "border",
          }[color],
          solid: {
            main: "bg-main-500 text-white",
            sub: "bg-sub-500 text-white",
            normal: "bg-white text-black",
            danger: "bg-danger-500 text-white",
          }[color],
          ghost: {
            main: "bg-transparent text-main-500",
            sub: "bg-transparent text-sub-500",
            normal: "bg-transparent text-black",
            danger: "bg-transparent text-danger-500",
          }[color],
          glass: {
            main: "bg-main-500 text-white",
            sub: "bg-sub-500 text-white",
            normal: "bg-white text-black",
            danger: "bg-danger-500 text-white",
          }[color],
        }[variant],
        props.className
      )}
      type={props.type ?? "button"}
    />
  );
};
