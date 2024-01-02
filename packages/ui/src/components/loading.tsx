import { FC } from "react";
import { classNames } from "../lib/classnames";

export type LoadingProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "main" | "sub" | "normal" | "danger";
  className?: string;
};

export const Loading: FC<LoadingProps> = ({
  size = "md",
  color = "normal",
  className,
}) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center space-x-[0.3em]",
        {
          xs: "text-xs px-3.5 h-8",
          sm: "text-sm px-3.5 h-9",
          md: "text-base px-4 h-10",
          lg: "text-lg px-5 h-11",
          xl: "text-xl px-5 h-12",
        }[size],
        {
          main: "text-main-400",
          sub: "text-sub-400",
          normal: "text-gray-500",
          danger: "text-danger-400",
        }[color],
        className
      )}
    >
      <span className="w-[1em] h-[1em] rounded-full bg-current duration-0 animate-loading-dot-bounce" />
      <span className="w-[1em] h-[1em] rounded-full bg-current animate-loading-dot-bounce animation-delay-200" />
      <span className="w-[1em] h-[1em] rounded-full bg-current animate-loading-dot-bounce animation-delay-400" />
    </span>
  );
};
