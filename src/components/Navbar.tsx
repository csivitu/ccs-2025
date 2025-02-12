"use client";

import Image from "next/image";
import React, { useState } from "react";

import FaRegStar from "public/logos/navbar-logos/FaRegStar.svg";
import IoBookOutline from "public/logos/navbar-logos/IoBookOutline.svg";
import LuTable from "public/logos/navbar-logos/LuTable.svg";
import IoCubeOutline from "public/logos/navbar-logos/IoCubeOutline.svg";

import NavLink from "./nav-link";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { id: "about", label: "About Us", Icon: IoBookOutline },
  { id: "projects", label: "Projects", Icon: LuTable },
  { id: "domains", label: "Domains", Icon: IoCubeOutline },
  { id: "alumni", label: "Alumni", Icon: FaRegStar },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleToggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <nav className="top-0 left-0 right-0 bg-black text-white py-4 px-4 sm:px-8 border-b-[1px] border-slate-600 sticky">
      <div className="mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              className="sm:hidden mr-4 p-[2px] border-[1px] rounded-[6px] border-slate-600"
              onClick={handleToggleNavbar}
            >
              <MenuIcon className="text-slate-200 p-[2px]" />
            </button>

            <Image
              src="/git.webp"
              width={25}
              height={25}
              alt="Logo"
              className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
            />
            <span className="text-lg md:text-2xl text-center px-2">
              csivitu
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#home" className="font-semibold text-base md:text-xl">
              Home
            </a>
            <a href="#faqs" className="font-semibold text-base md:text-xl">
              FAQs
            </a>
            <Image
              src="/giticon.webp"
              width={50}
              height={50}
              alt="FAQs Icon"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto"
            />
          </div>
        </div>

        <div className="hidden sm:flex flex-row gap-6 md:gap-12 mt-6 text-center">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              {...item}
              isActive={activeLink === item.id}
              onLinkClick={() => setActiveLink(item.id)}
            />
          ))}
        </div>
      </div>

      {/* for mobile */}
      <div
        className={`
          sm:hidden fixed top-0 left-0 w-1/2 h-screen bg-[#151b23] z-50 
          transform transition-transform duration-300 ease-in-out
          border-r-[1px] border-t-[1px] border-b-[1px] rounded-r-3xl border-slate-600
          ${isNavbarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4">
          <button
            onClick={handleToggleNavbar}
            className="mb-8 p-[2px] border-[1px] rounded-[6px] border-slate-600"
          >
            <X className="text-slate-200 p-[2px]" />
          </button>

          <nav className="space-y-6 mb-auto">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 mb-2 items-center font-light">
                <Image
                  src="/giticon.webp"
                  width={50}
                  height={50}
                  alt="FAQs Icon"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto"
                />
                <span>Username</span>
              </div>
              <a href="Home" className="font-semibold text-lg mb-2">
                Home
              </a>
              <a href="Home" className="font-semibold text-lg mb-2">
                FAQs
              </a>
            </div>

            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                {...item}
                isActive={activeLink === item.id}
                onLinkClick={() => {
                  setActiveLink(item.id);
                  setIsNavbarOpen(false);
                }}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* mobile bg overlay on nav open */}
      {isNavbarOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggleNavbar}
        />
      )}
    </nav>
  );
};

export default Navbar;
