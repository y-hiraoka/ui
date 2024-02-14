"use client";

import { Transition } from "@headlessui/react";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  FC,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import { MdChevronRight } from "react-icons/md";
import { classNames } from "../lib/classnames";

export type NavLinkProps<
  Comp extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = "a",
> = {
  component?: Comp;
  isCurrent: boolean;
} & React.ComponentProps<Comp>;

export const NavLink = forwardRef(function NavLink(
  props: NavLinkProps<any>,
  ref,
) {
  const {
    component: Component = "a",
    isCurrent,
    className,
    children,
    ...rest
  } = props;

  const isInnerCollapsible = useContext(IsInnerCollapsibleContext);

  return (
    <Component
      {...rest}
      ref={ref}
      className={classNames(
        "text-sm font-medium leading-none flex aria-current-page:font-bold h-9 w-full items-center transition-colors hover:bg-gray-500/10 rounded-e-full text-primary dark:text-primary-dark",
        isInnerCollapsible
          ? "pl-4 pr-3 border-l-2 aria-current-page:border-main-400 aria-current-page:text-main-500 dark:border-gray-800 dark:aria-current-page:border-main-500 dark:aria-current-page:text-main-400"
          : "px-3 aria-current-page:bg-main-500/20 aria-current-page:text-main-700 dark:aria-current-page:text-main-300",
        className,
      )}
      aria-current={isCurrent ? "page" : undefined}
    >
      {children}
    </Component>
  );
}) as <
  As extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = "a",
>(
  props: NavLinkProps<As>,
) => JSX.Element;

export type NavLinkCollapsibleRootProps = {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const CollapsibleIsOpenContext = createContext(false);
const IsInnerCollapsibleContext = createContext(false);

export const NavLinkCollapsibleRoot: FC<NavLinkCollapsibleRootProps> = ({
  children,
  className,
  defaultOpen,
  isOpen,
  onOpenChange: _onOpenChange,
}) => {
  const [isOpenState, setIsOpenState] = useState(defaultOpen ?? false);
  const onOpenChange = (open: boolean) => {
    setIsOpenState(open);
    _onOpenChange?.(open);
  };

  return (
    <CollapsibleIsOpenContext.Provider value={isOpen ?? isOpenState}>
      <IsInnerCollapsibleContext.Provider value>
        <Collapsible.Root
          className={classNames(className)}
          defaultOpen={defaultOpen}
          open={isOpen ?? isOpenState}
          onOpenChange={onOpenChange}
        >
          {children}
        </Collapsible.Root>
      </IsInnerCollapsibleContext.Provider>
    </CollapsibleIsOpenContext.Provider>
  );
};

export type NavLinkCollapsibleTriggerProps<
  Comp extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = "button",
> = {
  component?: Comp;
  isCurrent: boolean;
} & React.ComponentProps<Comp>;

export const NavLinkCollapsibleTrigger = (({
  component: Component = "button",
  isCurrent,
  children,
  className,
  ...rest
}: NavLinkCollapsibleTriggerProps) => {
  const isOpen = useContext(CollapsibleIsOpenContext);

  return (
    <Collapsible.Trigger asChild>
      <Component
        {...rest}
        className={classNames(
          "text-sm font-medium flex h-9 w-full px-3 items-center hover:bg-gray-500/10 rounded-e-full transition-colors justify-between",
          "aria-[current=true]:font-bold aria-[current=true]:bg-main-500/20 aria-[current=true]:text-main-700 dark:aria-[current=true]:text-main-300",
          className,
        )}
        aria-current={isCurrent}
      >
        <span>{children}</span>
        <span
          className={classNames(
            "inline-block transition-transform",
            isOpen && "rotate-90",
          )}
        >
          <MdChevronRight className="text-lg" />
        </span>
      </Component>
    </Collapsible.Trigger>
  );
}) as <As extends keyof React.JSX.IntrinsicElements = "button">(
  props: NavLinkCollapsibleTriggerProps<As>,
) => JSX.Element;

export const NavLinkCollapsibleContent: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isOpen = useContext(CollapsibleIsOpenContext);

  return (
    <Collapsible.Content forceMount>
      <Transition
        show={isOpen}
        as="div"
        className="grid overflow-hidden py-1 pl-4"
        enter="transition-[grid-template-rows]"
        enterFrom="grid-rows-[0fr]"
        enterTo="grid-rows-[1fr]"
        leave="transition-[grid-template-rows]"
        leaveFrom="grid-rows-[1fr]"
        leaveTo="grid-rows-[0fr]"
      >
        <Transition.Child
          as="div"
          className="min-h-0"
          enter="transition-[visibility]"
          enterFrom="invisible"
          enterTo="visible"
          leave="transition-[visibility]"
          leaveFrom="visible"
          leaveTo="invisible"
        >
          {children}
        </Transition.Child>
      </Transition>
    </Collapsible.Content>
  );
};
