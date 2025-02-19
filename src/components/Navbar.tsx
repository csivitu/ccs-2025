"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import FaRegStar from "public/logos/navbar-logos/FaRegStar.svg";
import IoBookOutline from "public/logos/navbar-logos/IoBookOutline.svg";
import LuTable from "public/logos/navbar-logos/LuTable.svg";
import IoCubeOutline from "public/logos/navbar-logos/IoCubeOutline.svg";

import NavLink from "./nav-link";
import { MenuIcon, X } from "lucide-react";
import { FaQuestion } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "about", label: "About Us", Icon: IoBookOutline, href: "/dashboard" }, // Updated to link to Dashboard
  { id: "projects", label: "Projects", Icon: LuTable, href: "/dashboard/project" },
  { id: "domains", label: "Domains", Icon: IoCubeOutline, href: "/dashboard/domains" },
  { id: "alumni", label: "Alumni", Icon: FaRegStar, href: "/dashboard/alumni" },
  {
    id: "faq",
    label: "FAQs",
    Icon: "/logos/navbar-logos/faq.png",
    href: "/dashboard/faq",
  },
  {
    id: "profile",
    label: "Profile",
    Icon: "/logos/navbar-logos/faq.png",
    href: "/dashboard/profile",
    },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const path = usePathname();
  function handleToggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <nav className="top-0 left-0 right-0 bg-black text-white py-2 px-4 sm:px-8 border-b-[2px] border-[#3c444c] sticky z-[1000]">
      <div className="mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[8px] w-full justify-between">
            <button
              className="sm:hidden mr-4 p-[2px] border-[1px] rounded-[6px] border-slate-600"
              onClick={handleToggleNavbar}
              type="button"
            >
              <MenuIcon className="text-slate-200 p-[2px]" />
            </button>
            <a
              href="https://github.com/csivitu"
              className="gap-2 justify-center items-center mobile:hidden md:flex"
            >
              <Image
                src="/git.webp"
                width={35}
                height={35}
                alt="Logo"
                className="flex-shrink-0 mobile:w-[32px]"
              />
              <span className="text-[#C9D1D9] text-center font-[400] tab:text-xl mobile:hidden tab:block leading-[30px] font-sans-code ">
                csivitu
              </span>
            </a>
          </div>
          {/* <div className="hidden sm:flex items-center space-x-4">
            <a href="#home" className="text-[#F0F6FC] font-sans-code text-[20px]  leading-[21px]">
              Home
            </a>
            <a href="/faq" className="text-[#F0F6FC] font-sans-code text-[20px]  leading-[21px]">
              FAQs
            </a>
            
          </div> */}
          <Image
            src="/giticon.webp"
            width={45}
            height={45}
            alt="FAQs Icon"
            className="flex-shrink-0 aspect-square mobile:w-[32px] md:w-[42px]"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex flex-row gap-4 md:gap-8 mt-4 text-center text-[#C9D1D9] font-sans-code text-[16px] font-normal leading-[30px]">
          {navLinks.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Link href={item.href} passHref>
                <NavLink
                  {...item}
                  isActive={activeLink === item.id}
                  onLinkClick={() => setActiveLink(item.id)}
                />
              </Link>

              {item.id === "domains" && (
                <div
                  className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[rgba(110,118,129,0.4)] 
                            text-[#C9D1D9] text-[12px] font-[500] leading-[18px] font-['Noto_Sans'] text-center "
                >
                  4
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-2/3 h-screen bg-zinc-950 z-50 
          transform transition-transform duration-300 ease-in-out
          border-r-[1px] border-t-[1px] border-b-[1px] rounded-r-xl border-slate-600
          ${isNavbarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4">
          <button
            onClick={handleToggleNavbar}
            className="mb-8 p-[2px] border-[1px] rounded-[6px] border-slate-600"
            type="button"
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
                {/* TODO@jrs : Replace with the actual username and photograph */}
                <span>Username</span>
              </div>
              {/* <a href="#home" className="font-semibold text-lg mb-2">
                Home
              </a>
              <a href="#faqs" className="font-semibold text-lg mb-2">
                FAQs
              </a> */}
            </div>

            <div className="w-full flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link key={item.id} href={item.href} passHref>
                  <NavLink
                    {...item}
                    isActive={activeLink === item.id}
                    onLinkClick={() => {
                      setActiveLink(item.id);
                      setIsNavbarOpen(false);
                    }}
                  />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Background Overlay */}
      {isNavbarOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggleNavbar}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleToggleNavbar();
            }
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
