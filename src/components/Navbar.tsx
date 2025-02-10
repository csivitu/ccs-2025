"use client";

import Image from "next/image";
import React, { useState } from "react";

import FaRegStar from "public/logos/navbar-logos/FaRegStar.svg";
import IoBookOutline from "public/logos/navbar-logos/IoBookOutline.svg";
import LuTable from "public/logos/navbar-logos/LuTable.svg";
import IoCubeOutline from "public/logos/navbar-logos/IoCubeOutline.svg";

import NavLink from "./nav-link";

const navLinks = [
  { id: "about", label: "About Us", Icon: IoBookOutline },
  { id: "projects", label: "Projects", Icon: LuTable },
  { id: "domains", label: "Domains", Icon: IoCubeOutline },
  { id: "alumni", label: "Alumni", Icon: FaRegStar },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="top-0 left-0 right-0 bg-black text-white py-4 px-8 border-b-[1px] border-slate-600 sticky">
      <div className="mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/git.webp"
              width={25}
              height={25}
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl text-center px-2">csivitu</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#home" className="font-semibold text-xl">
              Home
            </a>
            <a href="#faqs" className="font-semibold text-xl">
              FAQs
            </a>
            <Image
              src="/giticon.webp"
              width={50}
              height={50}
              alt="FAQs Icon"
              className="h-8 w-auto"
            />
          </div>
        </div>

        <div className="flex space-x-12 mt-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              Icon={item.Icon}
              isActive={activeLink === item.id}
              onLinkClick={() => setActiveLink(item.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
