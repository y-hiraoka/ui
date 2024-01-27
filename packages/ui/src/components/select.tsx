import { ComponentProps, forwardRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { classNames } from "../lib/classnames";

export type SelectProps = {
  size?: "sm" | "md" | "lg";
} & Omit<ComponentProps<"select">, "size">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ size = "md", className, ...props }, ref) {
    return (
      <div className="relative inline-block">
        <select
          ref={ref}
          className={classNames(
            "border bg-white appearance-none",
            {
              sm: "pl-2 pr-6 h-8 rounded-md text-xs",
              md: "pl-2 pr-6 h-9 rounded-md text-sm",
              lg: "pl-2 pr-6 h-10 rounded-md text-base",
            }[size],
            className,
          )}
          {...props}
        />
        <MdExpandMore
          className={classNames(
            "absolute top-0 right-1 bottom-0 m-auto pointer-events-none",
            {
              sm: "text-xs",
              md: "text-sm",
              lg: "text-base",
            }[size],
          )}
        />
      </div>
    );
  },
);
