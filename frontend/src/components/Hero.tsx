"use client";

import React from "react";
import ComputerCanvas from "./canvas/Computer";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className="sm:px-16 absolute inset-0 top-[100px] sm:top-[145px] max-w-7xl mx-auto flex flex-col justify-center items-center ">
        <div className="mt-6 flex flex-col w-[335px] sm:w-[500px] gap-5 text-white">
          <h1 className=" sm:text-7xl text-5xl  font-black text-center">
            Hi, I'm <span className="gradient-text   ">Alejo</span>
          </h1>
          <p className=" sm:text-left sm:ml-11 font-bold sm:text-lg ml-8">
            Fullstack Developer, Computer Technician, Computer Systems
            Engineering student
          </p>
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
