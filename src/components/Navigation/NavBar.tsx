"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { NavItem } from "./NavItem";
import { Settings } from "react-feather";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
];

export function NavBar() {
  const [windowComponent, setWindowComponent] = useState(false);
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeIdx, setActiveIdx] = useState(-1);

  const windowFeatures = "left=100, top=100, width=320, height=320";

  useEffect(() => {
    setWindowComponent(true);
    setWidth(window.innerWidth);
  }, []);

    return (
      <div className=" flex items-center justify-between flex-wrap bg-teal-500 p-2 ">
        <Link href={"/"}>
          <div className=" flex items-center flex-shrink-0 text-white mr-6">
            <h1 className=" font-semibold text-xl tracking-tight">
              Sate Of MACCHA
            </h1>
          </div>
        </Link>
        <div className={" flex-grow flex items-center w-auto text-center "}>
          {MENU_LIST.map((menu, idx) => (
            <div
              className="text-sm flex-grow"
              onClick={() => {
                setActiveIdx(idx);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>

        <div className=" flex ">
          <button
            className={
              " flex items-center px-3 py-2 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white "
            }
            onClick={() => {
              window.open("", "Settings", windowFeatures);
              window.focus();
            }}
          >
            <Settings />
          </button>
        </div>
      </div>
    );
}
