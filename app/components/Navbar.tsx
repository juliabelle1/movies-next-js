"use client";

import { AiOutlineHome } from "react-icons/ai";
import { VscCompass } from "react-icons/vsc";
import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarMobileView from "./NavbarMobileView";

export default function Navbar() {
  const navigation: Navigation[] = [
    {
      id: 1,
      name: "Home",
      icon: AiOutlineHome,
      href: "/",
      path: "/",
      className: "flex items-center",
    },
    {
      id: 2,
      name: "Discover",
      icon: VscCompass,
      href: "/discover?genreId=28",
      path: "/discover",
      className: "flex items-center, mt-8",
    },
  ];

  return (
    <nav>
      <div className="bg-main fixed h-screen w-52 hidden md:flex flex-col items-center justify-center border-inactive-text border-r-[0.2px]">
        <h4 className="text-white font-semibold absolute top-8">Movies</h4>
        <ul className="text-base 2xl:text-lg">
          {navigation.map((item) => {
            return <NavbarLink key={item.id} item={item} />;
          })}
        </ul>
      </div>
      <NavbarMobileView navigation={navigation} />
    </nav>
  );
}
