"use client";

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
    </nav>
  );
};

const SideNavLink: FC<{ href: string; name: string }> = ({ href, name }) => {
  const pathname = usePathname();

  return (
    <Link
      className="block w-full p-2 font-bold aria-[current='page']:text-main-500 aria-[current='page']:bg-blue-100 hover:underline"
      href={href}
      aria-current={pathname === href ? "page" : undefined}
    >
      {name}
    </Link>
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
];
