"use client";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { Squash as Hamburger } from "hamburger-react";

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
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 h-16 bg-primary ${
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
          <div className="relative">
            <Image
              src="/logo.png"
              width={40}
              height={40 / 1000 / 1125}
              alt="logo"
            />
          </div>
          <p className="text-white transition-all  text-[18px] font-bold cursor-pointer flex hover:text-slate-300 p-1 rounded-lg">
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
            } hover:text-white transition-all text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className=" object-contain relative z-20">
          <Hamburger color="#FFFFFF" toggled={toggle} toggle={setToggle} />
        </div>

        <div
          className={`${
            !toggle ? "-right-[1000px]" : "right-0"
          } h-screen w-screen bg-slate-950/90 top-0 absolute  overflow-hidden flex justify-center items-center  z-10 text-white transition-all duration-500`}
        >
          <ul
            className={`list-none items-center gap-4 flex flex-1 flex-col -mt-16 `}
          >
            <li className="w-fit he relative">
              <Link
                href="/"
                onClick={() => {
                  setToggle(!toggle);
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <Image
                  src="/logo.png"
                  width={70}
                  height={70 / 1000 / 1125}
                  alt="logo"
                />
              </Link>
            </li>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium underline underline-offset-4 cursor-pointer text-2xl ${
                  active === nav.title ? "text-blue-300" : "text-secondary"
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
