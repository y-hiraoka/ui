import { FC, ReactNode } from "react";
import { classNames } from "../lib/classnames";

export const Header: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <header
      className={classNames(
        'flex h-16 items-center justify-between shadow px-4 relative before:content-[""] before:absolute before:inset-0 before:-z-10 before:bg-white/50 backdrop-blur dark:before:bg-gray-950/50',
        className,
      )}
    >
      {children}
    </header>
  );
};
