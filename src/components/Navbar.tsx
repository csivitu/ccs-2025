"use client";

import Image from "next/image";
import React, { useState } from "react";
import FaRegStar from "public/logos/navbar-logos/FaRegStar.svg"
import IoBookOutline from "public/logos/navbar-logos/IoBookOutline.svg"
import LuTable from "public/logos/navbar-logos/LuTable.svg"
import IoCubeOutline from "public/logos/navbar-logos/IoCubeOutline.svg"


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
            <Image src="/giticon.webp" width={50} height={50} alt="FAQs Icon" className="h-8 w-auto" />
          </div>
        </div>

        <div className="flex space-x-12 mt-6">
          {[
            { id: "about", label: "About Us", Icon: IoBookOutline },
            { id: "projects", label: "Projects", Icon: LuTable },
            { id: "domains", label: "Domains", Icon: IoCubeOutline },
            { id: "alumni", label: "Alumni", Icon: FaRegStar },
          ].map((item) => (
            <div key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`text-md flex items-center space-x-2 ${
                  activeLink === item.id
                    ? "text-[#C9D1D9]"
                    : "text-[#C9D1D9] hover:text-white transition-colors"
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                <Image
                  src={item.Icon}
                  alt={item.id}
                  style={{ width: "1.25em", height: "1.25em" }}
                  color={
                    activeLink === item.id
                      ? "rgba(139, 148, 158, 1)"
                      : "rgba(139, 148, 158, 1)"
                  }
                  className="mr-1" // Added margin-right to the icon
                />
                <span className="relative">
                  {item.label}
                  <div
                    className={`absolute -bottom-1 left-0 w-[110%] h-0.5 transform transition-all duration-300 ${
                      activeLink === item.id
                        ? "bg-[rgba(247,129,102,1)] scale-x-110"
                        : "bg-transparent scale-x-100"
                    }`}
                  />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
