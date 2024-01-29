"use client";

import {
  NavLink,
  NavLinkCollapsibleRoot,
  NavLinkCollapsibleContent,
  NavLinkCollapsibleTrigger,
} from "@y-hiraoka/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const SideNav: FC = () => {
  return (
    <nav className="w-52 border rounded">
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <SideNavLink href={item.href} name={item.name} />
          </li>
        ))}
      </ul>
      <NavLinkCollapsibleRoot>
        <NavLinkCollapsibleTrigger isCurrent>
          Test Collapsible
        </NavLinkCollapsibleTrigger>
        <NavLinkCollapsibleContent>
          {navItems.map((item) => (
            <SideNavLink key={item.href} href={item.href} name={item.name} />
          ))}
        </NavLinkCollapsibleContent>
      </NavLinkCollapsibleRoot>
    </nav>
  );
};

const SideNavLink: FC<{ href: string; name: string }> = ({ href, name }) => {
  const pathname = usePathname();

  return (
    <NavLink component={Link} isCurrent={pathname === href} href={href}>
      {name}
    </NavLink>
  );
};

const navItems: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Button",
    href: "/components/button",
  },
  {
    name: "IconButton",
    href: "/components/icon-button",
  },
  {
    name: "Loading",
    href: "/components/loading",
  },
  {
    name: "Switch",
    href: "/components/switch",
  },
  {
    name: "Select",
    href: "/components/select",
  },
  {
    name: "Drawer",
    href: "/components/drawer",
  },
];
