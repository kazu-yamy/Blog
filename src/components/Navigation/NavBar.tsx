"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [navActive, setNavActive] = useState(true);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div className=" m-0 p-0 outline-none box-border">
      <header className=" sticky z-30 top-0">
        <nav className="flex p-4 justify-between items-center bg-green-500">
          <Link href={"/"}>
            <div className=" decoration-inherit">
              <h1 className=" text-3xl ">{String(navActive)}</h1>
            </div>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className=" flex flex-col gap-y-1.5 cursor-pointer "
          >
            <div className=" w-8 h-0.5 bg-black rounded-sm "></div>
            <div className=" w-8 h-0.5 bg-black rounded-sm "></div>
            <div className=" w-8 h-0.5 bg-black rounded-sm "></div>
          </div>
          <div className="flex flex-col fixed top-16 w-72 gap-y-6 -right-72 pr-6 pl-4 transition-all duration-200 min-h-[100vh - 60px] bg-green-800 active:right-0">
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(true);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
