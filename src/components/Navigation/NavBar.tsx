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
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className=" sticky z-30 top-0">
      <nav className="flex p-16 justify-between items-center bg-green-500">
        <Link href={"/"}>
          <div>
            <h1 className=" text-3xl ">マちゃー</h1>
          </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={" flex flex-col gap-6 cursor-pointer "}
        >
          <div className=" w-40 h-4 bg-black rounded-sm "></div>
          <div className=" w-40 h-4 bg-black rounded-sm "></div>
          <div className=" w-40 h-4 bg-black rounded-sm "></div>
          <div className=" w-40 h-4 bg-black rounded-sm "></div>
          <div className=" w-40 h-4 bg-black rounded-sm "></div>
        </div>
        <div
          className={
            '${navActive ? "active" : ""} flex flex-col fixed top-60 w-72 px-6 py-4 transition-all min-h-screen bg-green-800 active:right-0'
          }
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
