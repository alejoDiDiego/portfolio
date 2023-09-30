"use client";

import React from "react";
import ComputerCanvas from "./canvas/Computer";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";

const Hero = () => {
  const handleDownload = () => {
    const url = "/Curriculum Alejo Di Diego English.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Curriculum Alejo Di Diego English.pdf"; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className="sm:px-16 absolute inset-0 top-[100px] sm:top-[145px] max-w-7xl mx-auto flex flex-col justify-center items-center ">
        <div className="mt-6 flex flex-col w-[335px] sm:w-[500px] gap-5 text-white noselect items-center">
          <h1 className=" sm:text-7xl text-5xl  font-black text-center">
            Hi, I'm <span className="gradient-text   ">Alejo</span>
          </h1>
          <p className="text-center font-bold sm:text-lg">
            Fullstack Developer, Computer Technician and Computer Systems
            Engineering student
          </p>
          <div className="gradient overflow-hidden rounded-3xl flex justify-center items-center  w-[40%]">
            <button
              onClick={handleDownload}
              className=" w-full bg-[#200744] shadow font-bold rounded-3xl m-1 p-2 hover:bg-transparent transition-all duration-200"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="relative h-full max-h-[800px] w-full">
          <ComputerCanvas />
        </div>
      </div>

      <div
        className="absolute sm:hidden
      sm:bottom-20 bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
