import React from "react";
import { NavLink } from "./navlink";
import { Logo } from "./logo";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-black bg-opacity-20 py-3 w-full fixed top-0 backdrop-blur-md z-50">
      <div className="container flex justify-between">
        {/* TODO: REMOVE SURROUNDING DIV OF THE LOGO COMPONENT */}
        <Link href={"/"}>
          <Logo />
        </Link>

        <ul className="flex space-x-6">
          <li>
            <NavLink href="#">Home</NavLink>
          </li>
          <li>
            <NavLink href="#">About</NavLink>
          </li>
          <li>
            <NavLink href="#">Property</NavLink>
          </li>
          <li>
            <NavLink href="#">Blog</NavLink>
          </li>
          <li>
            <NavLink href="#">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
