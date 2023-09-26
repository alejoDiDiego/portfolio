"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles";

const About = () => {
  return (
    <div className="text-white">
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          About me
        </h2>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Who I am?
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
