"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const links = [
    { title: "About Us" },
    { title: "Our Impact" },
    { title: "Get Involved" },
    { title: "Workshops" },
  ];

  return (
    <nav className="flex items-center justify-between m-4">
      <Image
        src="./logo.svg"
        width={200}
        height={20}
        alt="Bottomless Logo"></Image>
      <div>
        {links.map((link) => (
          <span key={link.title} className="hidden m-5 lg:inline text-l">
            {link.title}
          </span>
        ))}
        <button className="hidden ml-5 mr-3 p-2 bg-yellow-500 rounded-lg lg:inline">
          GET JOB HELP
        </button>
        <button className="hidden m-3 p-2 bg-yellow-500 rounded-lg lg:inline">
          DONATE
        </button>
      </div>
      <div className="lg:hidden md:inline-block">
        <span>
          <Hamburger toggled={isOpen} rounded toggle={setOpen} />
        </span>
        {isOpen && (
          <div className="mt-2 text-right absolute right-6 text-2xl">
            <div>About Us</div>
            <br />
            <div>Our Impact</div>
            <br />
            <div>Get Involved</div>
            <br />
            <div>Workshops</div>
          </div>
        )}
      </div>
    </nav>
  );
}
