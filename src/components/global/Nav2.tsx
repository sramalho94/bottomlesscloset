import React from "react";
import Image from "next/image";
import { navElement } from "@/types/types";
import { navsProp } from "@/types/types";

const navs:navElement[] = [
  {
    title: "About Us",
    subheaders: [
      "History & Mission",
      "Staff",
      "Board of Directors",
      "Annual Reports",
      "Financials",
    ],
  },
  {
    title: "Contact",
    subheaders: [
      "History & Mission",
      "Staff",
      "Board of Directors",
      "Annual Reports",
      "Financials",
    ],
  },
];

const Navigation = ({ navs }:navsProp ) => {
  return (
    <>
      {navs.map(({ title, subheaders }, index) => (
        <li key={index}>
          <a>{title}</a>
          <ul className="p-2">
            {subheaders.map((subheader, subIndex) => (
              <li key={subIndex}>
                <a>{subheader}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

// about us
// our impact
// get involved
// workshops

function Nav2() {
  return (
    <div className="navbar bg-base-100">
      <Image
        src="./logo.svg"
        width={180}
        height={20}
        alt="Bottomless Logo"></Image>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>About Us</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Nav2;
