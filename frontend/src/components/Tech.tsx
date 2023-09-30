"use client";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Title from "./Title";

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
    <motion.div variants={fadeIn("right", "spring", index * 0.3, 0.6)}>
      <Tilt
        className="overflow-hidden w-[130px] sm:w-[150px] gradient shadow-card rounded-3xl p-[2px]"
        transitionSpeed={1500}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        reset={false}
      >
        <div className="bg-[#200744] rounded-3xl py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
          <div className="w-[80px] sm:w-[100px] min-h-[60px] sm:min-h-[100px] h-fit flex justify-center items-center overflow-hidden bg-white rounded-md p-1 sm:py-2 sm:px-3">
            <img src={icon} alt={name} className="w-[100%] h-fit " />
          </div>
          <h3 className="text-white text-center noselect font-black text-lg sm:text-xl">
            {name}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className=" max-w-3xl w-full">
      <Title subTitle="WHAT I USE" title="Tech." />
      <div className="flex flex-row flex-wrap justify-center mt-10 sm:justify-start gap-10">
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
