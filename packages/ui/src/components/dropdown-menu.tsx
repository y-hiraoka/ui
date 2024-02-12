"use client";

import { Transition } from "@headlessui/react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { FC, ReactNode, createContext, useContext, useState } from "react";

const DropdownMenuIsOpenContext = createContext(false);

export type DropdownMenuRootProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const DropdownMenuRoot: FC<DropdownMenuRootProps> = ({
  children,
  defaultOpen,
  isOpen,
  onOpenChange,
}) => {
  const [isOpenState, setIsOpenState] = useState(defaultOpen ?? false);

  const handleOpenChange = (open: boolean) => {
    setIsOpenState(open);
    onOpenChange?.(open);
  };

  const isOpenValue = isOpen ?? isOpenState;

  return (
    <DropdownMenuIsOpenContext.Provider value={isOpenValue}>
      <RadixDropdownMenu.Root
        open={isOpenValue}
        onOpenChange={handleOpenChange}
        modal
      >
        {children}
      </RadixDropdownMenu.Root>
    </DropdownMenuIsOpenContext.Provider>
  );
};

export const DropdownMenuTrigger: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <RadixDropdownMenu.Trigger asChild>{children}</RadixDropdownMenu.Trigger>
  );
};

export type DropdownMenuContentProps = {
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
};

export const DropdownMenuContent: FC<DropdownMenuContentProps> = ({
  children,
  side,
  align,
}) => {
  const isOpen = useContext(DropdownMenuIsOpenContext);

  return (
    <RadixDropdownMenu.Portal forceMount>
      <Transition
        show={isOpen}
        enter="transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <RadixDropdownMenu.Content
          side={side}
          sideOffset={4}
          align={align}
          alignOffset={4}
          className="w-max rounded-md border bg-white p-1 shadow-xl"
        >
          {children}
        </RadixDropdownMenu.Content>
      </Transition>
    </RadixDropdownMenu.Portal>
  );
};

export type DropdownMenuItemProps<Comp extends React.ElementType = "button"> = {
  component?: Comp;
  children: ReactNode;
  startIcon?: ReactNode;
  isDisabled?: boolean;
} & React.ComponentProps<Comp>;

export const DropdownMenuItem = (({
  component: Component = "button",
  children,
  startIcon,
  isDisabled,
  ...props
}: DropdownMenuItemProps): React.JSX.Element => {
  return (
    <RadixDropdownMenu.Item asChild>
      <Component
        {...props}
        disabled={isDisabled || props.disabled}
        className="group flex h-8 w-full min-w-40 cursor-pointer items-center justify-between space-x-2 rounded px-3 text-start text-sm leading-none outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[highlighted]:bg-main-500 data-[highlighted]:text-main-high-contrast-500"
      >
        {startIcon && (
          <span className="text-base text-secondary transition-colors group-data-[highlighted]:text-main-high-contrast-500">
            {startIcon}
          </span>
        )}
        <span className="flex-1">{children}</span>
      </Component>
    </RadixDropdownMenu.Item>
  );
}) as <Comp extends React.ElementType = "button">(
  props: DropdownMenuItemProps<Comp>,
) => React.JSX.Element;

export const DropdownMenuLabel: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <RadixDropdownMenu.Label className="px-2 py-1 text-xs font-semibold text-secondary">
      {children}
    </RadixDropdownMenu.Label>
  );
};

export const DropdownMenuSeparator: FC = () => {
  return <RadixDropdownMenu.Separator className="mx-2 my-1 border-t" />;
};
