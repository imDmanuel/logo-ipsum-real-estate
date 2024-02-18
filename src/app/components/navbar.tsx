"use client";

import React, { useState } from "react";
import { NavLink } from "./navlink";
import { Logo } from "./logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((open) => !open);
  };
  return (
    <nav className="bg-black bg-opacity-20 py-3 w-full fixed top-0 backdrop-blur-md z-50 items-center animate__animated animate__fadeInDown">
      <div className="container flex justify-between">
        {/* TODO: REMOVE SURROUNDING DIV OF THE LOGO COMPONENT */}
        <Link href={"/"} className="flex items-center">
          <Logo />
        </Link>

        {/* Mobile menu icon */}
        {/* <FiMenu
          color="white"
          className="text-3xl lg:hidden cursor-pointer"
          onClick={toggleMenu}
        /> */}
        <label className="group max-lg:flex max-lg:items-center">
          <input id="menu-toggle" type="checkbox" className="peer hidden" />

          <div className="menu-bar lg:hidden"></div>
          {/* Mobile menu icon */}
          <ul
            data-open={open}
            className={`z-50 lg:space-x-6 max-lg:w-64 max-lg:h-screen max-lg:divide-y flex max-lg:absolute left-0 top-0 flex-col lg:flex-row max-lg:text-lg bg-black lg:bg-transparent max-lg:-translate-x-full max-lg:peer-checked:translate-x-0 max-lg:transition-transform duration-500`}
          >
            {/* <ul
            data-open={open}
            className={`peer z-10 lg:space-x-6 max-lg:w-64 max-lg:divide-y flex max-lg:absolute right-0 flex-col lg:flex-row max-lg:text-lg bg-black lg:bg-transparent max-lg:mt-[52px] max-lg:translate-x-full max-lg:data-[open=true]:translate-x-0 max-lg:transition-transform duration-500`}
          > */}
            <li className="py-3 px-5 cursor-pointer select-none">
              <NavLink href="#">Home</NavLink>
            </li>
            <li className="py-3 px-5 cursor-pointer select-none">
              <NavLink href="#">About</NavLink>
            </li>
            <li className="py-3 px-5 cursor-pointer select-none">
              <NavLink href="#">Property</NavLink>
            </li>
            <li className="py-3 px-5 cursor-pointer select-none">
              <NavLink href="#">Blog</NavLink>
            </li>
            <li className="py-3 px-5 cursor-pointer select-none">
              <NavLink href="#">Contact</NavLink>
            </li>
          </ul>
        </label>
        {/* <div className="peer-data-[open=true]:block hidden -z-10 bg-opacity-10 bg-black absolute w-screen h-screen top-0 left-0 backdrop-blur-sm"></div> */}
      </div>
    </nav>
  );
}
