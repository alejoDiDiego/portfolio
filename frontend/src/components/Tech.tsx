"use client";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Title from "./Title";
import Image from "next/image";

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
        className="overflow-hidden w-[130px] sm:w-[120px] gradient shadow-card rounded-3xl p-[2px]"
        transitionSpeed={1500}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        reset={false}
      >
        <div className="bg-[#200744] rounded-3xl py-5  min-h-[150px] w-full flex justify-evenly items-center flex-col">
          <div className="w-[80px] sm:w-[80px] min-h-[60px] sm:min-h-[30px] h-fit flex justify-center items-center overflow-hidden bg-white rounded-md p-1 relative">
            <img src={icon} alt={name} className="w-full" />
          </div>
          <h3 className="text-white text-center noselect font-black text-lg sm:text-base">
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
      <div className="flex flex-row flex-wrap justify-center  sm:justify-start gap-10">
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
