"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavItem from "../components/Navigation/NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];

export function NavBar() {
  const [windowComponent, setWindowComponent] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    setWindowComponent(true);
  }, []);

  return windowComponent && (
    <div className=" flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
      <Link href={"/"}>
        <div className=" flex items-center flex-shrink-0 text-white mr-6">
          <h1 className=" font-semibold text-xl tracking-tight">
            Sate Of MACCHA
          </h1>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          className={
            " flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white "
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {String(isOpen)}
        </button>
      </div>
      {isOpen && (
        <div
          className={
            " block w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-center "
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
      )}
    </div>
  );
}
