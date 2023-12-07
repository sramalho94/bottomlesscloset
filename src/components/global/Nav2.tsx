import React from "react";
import Image from "next/image";
import { navElement } from "@/types/types";
import { navsProp } from "@/types/types";

const navs: navElement[] = [
  {
    title: "About Us",
    subheaders: [
      "Financials",
      "Our Initiatives",
      "History & Mission",
      "Staff & Board of Directors",
      "Contact Info",
    ],
  },
  {
    title: "Our Impact",
    subheaders: ["Annual Reports", "Success Stories"],
  },
  {
    title: "Get Involved",
    subheaders: [
      "Donate",
      "Give Clothing",
      "Volunteer",
      "Corporate Partnership",
    ],
  },
];

const NavigationMobile = ({ navs }: navsProp) => {
  return (
    <>
      {navs.map(({ title, subheaders }, index) => (
        <li key={index} className="">
          <a className="text-black ">{title}</a>
          <ul className="p-2 text-black ">
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

const NavigationDesktop = ({ navs }: navsProp) => {
  return (
    <>
      {navs.map(({ title, subheaders }, index) => (
        <li key={index} className="text-xl ">
          <details>
            <summary className="hover:underline underline-offset-4 transition decoration-core-red text-black">
              {title}
            </summary>
            <ul className="p-2 rounded-none bg-white ">
              {subheaders.map((subheader, subIndex) => (
                <li key={subIndex}>
                  <a className="text-md hover:underline underline-offset-4 transition decoration-core-red text-black">
                    {subheader}
                  </a>
                </li>
              ))}
            </ul>
          </details>
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
    <div className="navbar bg-base-100 justify-between p-0 bg-white">
      <Image
        src="./logo.svg"
        width={200}
        height={20}
        alt="Bottomless Logo"></Image>
      {/* <div className="navbar-start"> */}
      {/* </div> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavigationDesktop navs={navs} />
          <li className="text-xl">
            <a className="text-black">Workshops</a>
          </li>
        </ul>
      </div>
      <div>
        <a className="btn ml-5 mr-3 hidden md:flex bg-white border-core-red border-2 rounded-2xl hover:bg-core-red hover:text-white hover:border-core-red text-black">
          CAREER HELP
        </a>
        <a className="btn mr-3 hidden md:flex bg-dark-green text-white rounded-2xl hover:bg-emerald-700">
          DONATE
        </a>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-1 bg-white">
            <NavigationMobile navs={navs} />
            <li>
              <a className="bg-white text-black">Workshops</a>
            </li>
            <a className=" mt-3 btn  border-core-red bg-white border-2 rounded-2xl hover:bg-core-red hover:text-white hover:border-core-red text-black">
              CAREER HELP
            </a>
            <a className="btn mt-3 text-white bg-dark-green rounded-2xl hover:bg-emerald-400">
              DONATE
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav2;
