"use client";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 h-14 bg-primary ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 relative">
            <Image src="/logo.png" fill alt="logo" />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Alejo &nbsp;
            <span className="sm:block hidden"> | Fullstack Developer</span>
          </p>
        </Link>
      </div>

      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-gray-400"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden relative flex flex-1 justify-end items-center">
        <div className="w-[28px] h-[28px] object-contain">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            fill
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? "h-0" : "h-40 "
          }  bg-primary absolute top-20 overflow-hidden flex justify-center items-center right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl text-gray-50 transition-all duration-300`}
        >
          <ul
            className={`list-none justify-end items-start p-6 gap-4 ${
              !toggle ? "hidden" : "flex flex-1 flex-col"
            }`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-blue-400" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
