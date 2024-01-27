import {
  Button,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@y-hiraoka/ui";
import { FC } from "react";

const Page: FC = () => {
  return (
    <DrawerRoot>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent
        drawerDescription="drawerDescription"
        drawerTitle="drawerTitle"
      >
        Drawer Content
      </DrawerContent>
    </DrawerRoot>
  );
};

export default Page;
