import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ item }: { item: Navigation }) {
  const path = usePathname();

  return (
    <>
      <li className={item.path === path ? "text-white" : " text-inactive-text"}>
        <Link className={item.className} href={item.href}>
          <item.icon className="w-6 h-6 mr-2 stroke-0" />
          {item.name}
        </Link>
      </li>
    </>
  );
}
