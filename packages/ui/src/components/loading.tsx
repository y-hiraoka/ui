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
          xs: "text-xs h-8",
          sm: "text-sm h-9",
          md: "text-base h-10",
          lg: "text-lg h-11",
          xl: "text-xl h-12",
        }[size],
        {
          main: "text-main-400",
          sub: "text-sub-400",
          normal: "text-gray-500",
          danger: "text-danger-400",
        }[color],
        className,
      )}
    >
      <span className="w-[0.8em] h-[0.8em] rounded-full bg-current loading-dot-bounce" />
      <span className="w-[0.8em] h-[0.8em] rounded-full bg-current loading-dot-bounce loading-animation-delay-200" />
      <span className="w-[0.8em] h-[0.8em] rounded-full bg-current loading-dot-bounce loading-animation-delay-400" />
    </span>
  );
};
