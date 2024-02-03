import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@y-hiraoka/ui/components";
import Link from "next/link";
import { FC } from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Page: FC = () => {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <Button>Open dropdown</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Label</DropdownMenuLabel>
        <DropdownMenuItem>dropdown 1</DropdownMenuItem>
        <DropdownMenuItem component={Link} href="/components/button">
          dropdown 2
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem startIcon={<FaTwitter />}>Twitter</DropdownMenuItem>
        <DropdownMenuItem startIcon={<FaFacebook />}>Facebook</DropdownMenuItem>
        <DropdownMenuItem startIcon={<FaGithub />} isDisabled>
          GitHub
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export default Page;
