"use client";

import {
  NavLink,
  NavLinkCollapsibleRoot,
  NavLinkCollapsibleContent,
  NavLinkCollapsibleTrigger,
} from "@y-hiraoka/ui/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const SideNav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-52 border rounded">
      {navItems.map((item) => (
        <SideNavLink key={item.href} href={item.href} name={item.name} />
      ))}
      <NavLinkCollapsibleRoot>
        <NavLinkCollapsibleTrigger
          isCurrent={pathname.startsWith("/components/theme-colors")}
        >
          Theme Colors
        </NavLinkCollapsibleTrigger>
        <NavLinkCollapsibleContent>
          {["main", "sub", "gray", "success", "danger", "warning"].map(
            (color) => (
              <SideNavLink
                key={color}
                href={`/components/theme-colors/${color}`}
                name={color}
              />
            ),
          )}
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
  {
    name: "Dropdown Menu",
    href: "/components/dropdown-menu",
  },
  {
    name: "Color Mode Switch",
    href: "/components/color-mode-switch",
  },
];
