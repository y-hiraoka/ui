import { ComponentProps, ReactNode, forwardRef } from "react";
import { classNames } from "../lib/classnames";
import { Loading } from ".";

export type ButtonProps<Comp extends React.ElementType = "button"> = {
  component?: Comp;
  variant?: "outline" | "solid" | "ghost" | "glass";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "main" | "sub" | "normal" | "danger";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  justify?: "start" | "center" | "end" | "between";
  className?: string;
} & ComponentProps<Comp>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      component: Component = "button",
      variant = "solid",
      size = "md",
      color = "normal",
      startIcon,
      endIcon,
      isLoading,
      fullWidth,
      justify = "center",
      children,
      ...props
    },
    ref,
  ) {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          "inline-flex rounded-md leading-none items-center font-bold transition-colors relative disabled:cursor-not-allowed disabled:opacity-50",
          fullWidth && "w-full",
          {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
          }[justify],
          {
            xs: "text-xs px-3.5 h-8 space-x-1.5",
            sm: "text-sm px-3.5 h-9 space-x-1.5",
            md: "text-base px-4 h-10 space-x-2",
            lg: "text-lg px-5 h-11 space-x-2.5",
            xl: "text-xl px-5 h-12 space-x-2.5",
          }[size],
          {
            outline: {
              main: "border-2 border-main-600 text-main-600 enabled:hover:bg-main-500/10 enabled:active:bg-main-500/15 dark:border-main-400 dark:text-main-400",
              sub: "border-2 border-sub-600 text-sub-600 enabled:hover:bg-sub-600/10 enabled:active:bg-sub-600/15 dark:border-sub-400 dark:text-sub-400",
              normal:
                "border-2 border-gray-900 text-gray-900 enabled:hover:bg-gray-700/10 enabled:active:bg-gray-700/15 dark:border-gray-200 dark:text-gray-200",
              danger:
                "border-2 border-danger-600 text-danger-600 enabled:hover:bg-danger-600/10 active:bg-danger-600/15 dark:border-danger-400 dark:text-danger-400",
            }[color],
            solid: {
              main: "bg-main-500 text-main-50 border-l-main-300 border-t-main-300 border-r-main-400 border-b-main-400 border-2 enabled:hover:bg-main-600 enabled:hover:border-l-main-400 enabled:hover:border-t-main-400 enabled:hover:border-r-main-500 enabled:hover:border-b-main-500 enabled:active:bg-main-700 enabled:active:border-l-main-500 enabled:active:border-t-main-500 enabled:active:border-r-main-600 enabled:active:border-b-main-600 dark:border-l-main-400 dark:border-t-main-400 dark:border-r-main-500 dark:border-b-main-500 dark:bg-main-600 dark:text-main-50 dark:enabled:hover:bg-main-700 dark:enabled:hover:border-l-main-500 dark:enabled:hover:border-t-main-500 dark:enabled:hover:border-r-main-600 dark:enabled:hover:border-b-main-600 dark:enabled:active:bg-main-800 dark:enabled:active:border-l-main-600 dark:enabled:active:border-t-main-600 dark:enabled:active:border-r-main-700 dark:enabled:active:border-b-main-700",
              sub: "bg-sub-500 text-sub-50 border-l-sub-300 border-t-sub-300 border-r-sub-400 border-b-sub-400 border-2 enabled:hover:bg-sub-600 enabled:hover:border-l-sub-400 enabled:hover:border-t-sub-400 enabled:hover:border-r-sub-500 enabled:hover:border-b-sub-500 enabled:active:bg-sub-700 enabled:active:border-l-sub-500 enabled:active:border-t-sub-500 enabled:active:border-r-sub-600 enabled:active:border-b-sub-600 dark:border-l-sub-400 dark:border-t-sub-400 dark:border-r-sub-500 dark:border-b-sub-500 dark:bg-sub-600 dark:text-sub-50 dark:enabled:hover:bg-sub-700 dark:enabled:hover:border-l-sub-500 dark:enabled:hover:border-t-sub-500 dark:enabled:hover:border-r-sub-600 dark:enabled:hover:border-b-sub-600 dark:enabled:active:bg-sub-800 dark:enabled:active:border-l-sub-600 dark:enabled:active:border-t-sub-600 dark:enabled:active:border-r-sub-700 dark:enabled:active:border-b-sub-700",
              normal:
                "bg-gray-950 border-2 border-l-gray-800 border-t-gray-800 border-r-gray-900 border-b-gray-900 text-gray-50 enabled:hover:bg-gray-900 enabled:hover:border-l-gray-700 enabled:hover:border-t-gray-700 enabled:hover:border-r-gray-800 enabled:hover:border-b-gray-800 enabled:active:bg-gray-800 enabled:active:border-l-gray-600 enabled:active:border-t-gray-600 enabled:active:border-r-gray-700 enabled:active:border-b-gray-700 dark:border-l-gray-300 dark:border-t-gray-300 dark:border-r-gray-400 dark:border-b-gray-400 dark:bg-gray-100 dark:text-gray-950 dark:enabled:hover:bg-gray-200 dark:enabled:hover:border-l-gray-400 dark:enabled:hover:border-t-gray-400 dark:enabled:hover:border-r-gray-500 dark:enabled:hover:border-b-gray-500 dark:enabled:active:bg-gray-300 dark:enabled:active:border-l-gray-500 dark:enabled:active:border-t-gray-500 dark:enabled:active:border-r-gray-600 dark:enabled:active:border-b-gray-600",
              danger:
                "bg-danger-500 text-danger-50 border-2 border-l-danger-300 border-t-danger-300 border-r-danger-400 border-b-danger-400 enabled:hover:bg-danger-600 enabled:hover:border-l-danger-400 enabled:hover:border-t-danger-400 enabled:hover:border-r-danger-500 enabled:hover:border-b-danger-500 enabled:active:bg-danger-700 enabled:active:border-l-danger-500 enabled:active:border-t-danger-500 enabled:active:border-r-danger-600 enabled:active:border-b-danger-600 dark:border-l-danger-400 dark:border-t-danger-400 dark:border-r-danger-500 dark:border-b-danger-500 dark:bg-danger-600 dark:text-danger-50 dark:enabled:hover:bg-danger-700 dark:enabled:hover:border-l-danger-500 dark:enabled:hover:border-t-danger-500 dark:enabled:hover:border-r-danger-600 dark:enabled:hover:border-b-danger-600 dark:enabled:active:bg-danger-800 dark:enabled:active:border-l-danger-600 dark:enabled:active:border-t-danger-600 dark:enabled:active:border-r-danger-700 dark:enabled:active:border-b-danger-700",
            }[color],
            ghost: {
              main: "bg-transparent text-main-500 enabled:hover:bg-main-500/10 enabled:active:bg-main-500/15 dark:text-main-400",
              sub: "bg-transparent text-sub-500 enabled:hover:bg-sub-500/10 enabled:active:bg-sub-500/15 dark:text-sub-400",
              normal:
                "bg-transparent text-gray-900 enabled:hover:bg-gray-500/10 enabled:active:bg-gray-500/20 dark:text-gray-50",
              danger:
                "bg-transparent text-danger-500 enabled:hover:bg-danger-500/10 enabled:active:bg-danger-500/15 dark:text-danger-400",
            }[color],
            glass: {
              main: "bg-main-500/15 text-main-500/90 border border-main-500/20 backdrop-blur-sm enabled:hover:bg-main-500/20 enabled:hover:border-main-500/25 enabled:active:bg-main-500/25 enabled:active:border-main-500/30",
              sub: "bg-sub-500/15 text-sub-500/90 border border-sub-500/20 backdrop-blur-sm enabled:hover:bg-sub-500/20 enabled:hover:border-sub-500/25 enabled:active:bg-sub-500/25 enabled:active:border-sub-500/30",
              normal:
                "bg-glass-white/15 text-glass-white/90 border border-glass-white/20 backdrop-blur-sm enabled:hover:bg-glass-white/20 enabled:hover:border-glass-white/25 enabled:active:bg-glass-white/25 enabled:active:border-glass-white/30",
              danger:
                "bg-danger-500/15 text-danger-500/90 border border-danger-500/20 backdrop-blur-sm enabled:hover:bg-danger-500/20 enabled:hover:border-danger-500/25 enabled:active:bg-danger-500/25 enabled:active:border-danger-500/30",
            }[color],
          }[variant],
          props.className,
        )}
        disabled={isLoading || props.disabled}
        // eslint-disable-next-line react/button-has-type
        type={Component === "button" ? props.type ?? "button" : props.type}
      >
        {startIcon && (
          <span style={{ opacity: isLoading ? 0 : undefined }}>
            {startIcon}
          </span>
        )}
        <span style={{ opacity: isLoading ? 0 : undefined }}>{children}</span>
        {endIcon && (
          <span style={{ opacity: isLoading ? 0 : undefined }}>{endIcon}</span>
        )}
        {isLoading && (
          <span className="absolute inset-0 inline-flex items-center justify-center">
            <Loading color={color} size={size} />
          </span>
        )}
      </Component>
    );
  },
) as <Comp extends React.ElementType = "button">(
  props: ButtonProps<Comp>,
) => JSX.Element;
