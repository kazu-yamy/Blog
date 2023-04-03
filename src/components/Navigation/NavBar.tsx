"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  function handleClick() {
    try {
      setIsOpen(!isOpen);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className=" flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
      <Link href={"/"}>
        <div className=" flex items-center flex-shrink-0 text-white mr-6">
          <h1 className=" font-semibold text-xl tracking-tight">
            Sate Of MACCHA
          </h1>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={() => handleClick}
          className=" flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white "
        >
          <div className=" fill-current font-semibold ">${String(isOpen)}</div>
        </button>
      </div>
      <div
        className={
          " w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-center &{isOpen ? 'hidden' : 'block'} "
        }
      >
        {MENU_LIST.map((menu, idx) => (
          <div
            className="text-sm lg:flex-grow"
            onClick={() => {
              setActiveIdx(idx);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
}
