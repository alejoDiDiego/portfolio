"use client";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const TechCard = ({
  index,
  icon,
  name,
}: {
  index: number;
  icon: string;
  name: string;
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.6)}>
      <Tilt
        className="overflow-hidden w-full sm:w-[150px] gradient shadow-card rounded-3xl p-[2px]"
        transitionSpeed={1500}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="bg-[#200744] rounded-3xl py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
          <div className="w-[100px] min-h-[100px] h-fit flex justify-center items-center overflow-hidden bg-white rounded-md py-2 px-3">
            <img src={icon} alt={name} className="w-[100%] h-fit " />
          </div>
          <h3 className="text-white text-center  font-black text-xl">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className=" max-w-3xl w-full">
      <motion.div className="text-white" variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
          WHAT I USE
        </p>
        <h2 className=" font-black md:text-[60px] sm:text-5xl text-3xl mb-10">
          Tech.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-10">
        {technologies.map((tech, index) => (
          <TechCard
            key={index}
            index={index}
            icon={tech.icon}
            name={tech.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
