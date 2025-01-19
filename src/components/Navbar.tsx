"use client";

import React, { useState } from "react";
import { BookOpen, Table2, Box, Star } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); 

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white py-4 px-6 z-50">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/git.webp" alt="Logo" className="h-12 w-auto" />
            <span className="text-3xl">csivitu</span>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#home" className="font-bold text-2xl">
              Home
            </a>
            <a href="#faqs" className="font-bold text-2xl">
              FAQs
            </a>
            <img src="/giticon.webp" alt="FAQs Icon" className="h-12 w-auto" />
          </div>
        </div>

        <div className="flex space-x-12 mt-3">
          {[{ id: "about", label: "About Us", Icon: BookOpen },
            { id: "projects", label: "Projects", Icon: Table2 },
            { id: "domains", label: "Domains", Icon: Box },
            { id: "alumni", label: "Alumni", Icon: Star }].map((item) => (
            <div key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`text-xl flex items-center space-x-2 ${
                  activeLink === item.id
                    ? "text-white"
                    : "text-white hover:text-white transition-colors"
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                <item.Icon
                  size={20}
                  color={activeLink === item.id ? "rgba(139, 148, 158, 1)" : "rgba(139, 148, 158, 1)"}
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

        <div className="mt-5 h-0.5 w-[109.5%] ml-[-4.75%] bg-gray-800" />
        <div className="mt-1 h-0.5 w-[109.5%] ml-[-4.75%] bg-gray-800" />
      </div>
    </nav>
  );
};

export default Navbar;
