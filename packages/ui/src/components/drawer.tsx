import { Transition } from "@headlessui/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  FC,
  Fragment,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { MdClose } from "react-icons/md";
import { IconButton } from "./icon-button";

const IsOpenContext = createContext(false);

export const DrawerRoot: FC<{
  children: ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}> = ({ children, defaultOpen, isOpen, onOpenChange: _onOpenChange }) => {
  const [isOpenState, setIsOpenState] = useState(defaultOpen ?? false);

  const onOpenChange = (open: boolean) => {
    setIsOpenState(open);
    _onOpenChange?.(open);
  };

  return (
    <IsOpenContext.Provider value={isOpen ?? isOpenState}>
      <Dialog.Root
        defaultOpen={defaultOpen}
        open={isOpen ?? isOpenState}
        onOpenChange={onOpenChange}
      >
        {children}
      </Dialog.Root>
    </IsOpenContext.Provider>
  );
};

export const DrawerTrigger: FC<{ children: ReactNode }> = ({ children }) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
};

export const DrawerContent: FC<{
  children: ReactNode;
  drawerTitle: string;
  drawerDescription: string;
}> = ({ children, drawerTitle, drawerDescription }) => {
  const isOpen = useContext(IsOpenContext);

  return (
    <Dialog.Portal forceMount>
      <Transition show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-in-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/20" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-transform ease-in-out duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform ease-in-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Content className="fixed left-0 top-0 z-20 h-screen w-72 p-2">
            <div className="relative size-full rounded-md bg-white p-2 shadow">
              <Dialog.Title className="sr-only">{drawerTitle}</Dialog.Title>
              <Dialog.Description className="sr-only">
                {drawerDescription}
              </Dialog.Description>
              {children}
              <span className="absolute right-1 top-1">
                <Dialog.Close asChild>
                  <IconButton size="xs" variant="ghost" icon={<MdClose />} />
                </Dialog.Close>
              </span>
            </div>
          </Dialog.Content>
        </Transition.Child>
      </Transition>
    </Dialog.Portal>
  );
};
