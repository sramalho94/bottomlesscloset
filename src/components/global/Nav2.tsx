import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navElement } from "@/types/types";
import { navsProp } from "@/types/types";

const navs: navElement[] = [
  {
    title: "About Us",
    subheaders: [
      "Financials",
      "Our Initiatives",
      {
        title: "History & Mission",
        link: "/mission-statement", // Add the link here
      },
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
          <p className="text-black ">{title}</p>
          <ul className="p-2 text-black ">
            {subheaders.map((subheader, subIndex) => (
              <li key={subIndex}>
                {typeof subheader === "string" ? (
                  <p>{subheader}</p>
                ) : subheader.link ? (
                  <Link href={subheader.link}>
                    <p>{subheader.title}</p>
                  </Link>
                ) : (
                  <span>{subheader.title}</span>
                )}
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
        <li key={index} className="text-xl" aria-label={`${title} dropdown button`}>
          <details>
            <summary className="hover:underline underline-offset-4 transition decoration-core-red text-black">
              {title}
            </summary>
            <ul className="p-2 rounded-none bg-white z-10">
              {subheaders.map((subheader, subIndex) => (
                <li key={subIndex}>
                  {typeof subheader === "string" ? (
                    <p className="text-md hover:underline underline-offset-4 transition decoration-core-red text-black">
                      {subheader}
                    </p>
                  ) : subheader.link ? (
                    <Link href={subheader.link}>
                      <p className="text-md hover:underline underline-offset-4 transition decoration-core-red text-black">
                        {subheader.title}
                      </p>
                    </Link>
                  ) : (
                    <span className="text-md text-black">
                      {subheader.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </>
  );
}

// about us
// our impact
// get involved
// workshops

function Nav2() {
  return (
    <div className="navbar bg-base-100 justify-between p-0 bg-white z-50 font-mont">
      <Link href="/">
      <Image
        src="./logo.svg"
        width={200}
        height={20}
        alt="Bottomless Logo"
        aria-label='Logo and link to go to homepage'></Image>
        </Link>
      {/* <div className="navbar-start"> */}
      {/* </div> */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavigationDesktop navs={navs} />
          <li className="text-xl">
            <Link legacyBehavior href="/workshops">
            <a className="text-black" aria-label='navigate to Workshops page'>Workshops</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/onboarding">
        <div 
            className="btn ml-5 mr-3 hidden md:flex bg-white border-core-red border-2 rounded-2xl hover:bg-core-red hover:text-white hover:border-core-red text-black"
            aria-label='navigate to career help page'
        >
          CAREER HELP
        </div>
        </Link>
        <div 
            className="btn mr-3 hidden md:flex bg-dark-green text-white rounded-2xl hover:bg-emerald-700"
            aria-label='navigate to donate page'
        >
          DONATE
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-1 bg-white"
          >
            <NavigationMobile navs={navs} />
            <li>
              <Link legacyBehavior href="/workshops">
                <p className="bg-white text-black">Workshops</p>
              </Link>
            </li>
            <Link legacyBehavior href="/onboarding">
              <p className=" mt-3 btn  border-core-red bg-white border-2 rounded-2xl hover:bg-core-red hover:text-white hover:border-core-red text-black">
                CAREER HELP
              </p>
            </Link>
            <p className="btn mt-3 text-white bg-dark-green rounded-2xl hover:bg-emerald-400">
              DONATE
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav2;
