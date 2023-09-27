"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/constants";

const Card = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => {
  return (
    <Tilt
      className="rounded-3xl overflow-hidden"
      transitionSpeed={1500}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=" w-full sm:w-[275px] gradient shadow-card rounded-3xl p-[2px]"
      >
        <div className="bg-[#200744] rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-[100px] h-[100px] object-contain"
          />
          <h3 className="text-white text-center font-black text-2xl">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="text-white  max-w-3xl w-full">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
          INTRODUCTION
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          About me.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] leading-[30px] "
      >
        I am a software developer with knowledge in Typescript, Javascript,
        React.js, Node.js, Express, Next.js, C#, ASP.NET Core and SQL and NoSQL
        databases. I am adaptable, quick learner and very detailed with my work.
        I really enjoy working with other people and I am always looking to
        learn new things that could help either my personal and professional
        life.
      </motion.p>
      <div className="flex gap-10 mt-20 flex-wrap sm:justify-center lg:justify-start">
        {services.map((service, index) => (
          <Card index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
