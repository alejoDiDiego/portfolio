"use client";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  return (
    <div className="text-white max-w-3xl w-full">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
          SOME OF MY WORKS
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="flex gap-10 mt-20 flex-wrap sm:justify-center lg:justify-start"></div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
