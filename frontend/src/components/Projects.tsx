"use client";
import { projects } from "@/constants";
import { SectionWrapper } from "@/hoc";
import Tilt from "react-parallax-tilt";
import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";

const ProjectCard = ({
  name,
  description,
  technologies,
  link,
  image,
  github,
  index,
}: {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  github: string;
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full sm:w-[360px] gradient shadow-card rounded-3xl p-[2px]"
    >
      <Tilt
        className="rounded-3xl  h-full overflow-hidden"
        transitionSpeed={1500}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        tiltEnable={false}
        glarePosition="all"
      >
        <div className="bg-[#200744] rounded-3xl p-2 min-h-[280px] h-full relative flex gap-2 items-center flex-col">
          {github.length == 0 ? null : (
            <a
              href={github}
              target="_blank"
              className="absolute shadow shadow-black right-5 top-4 bg-white rounded-full p-1 hover:opacity-60 transition-all duration-200 cursor-pointer"
            >
              <img src="/github.png" className="w-8" />
            </a>
          )}
          <a href={link} target="_blank">
            <img
              src={image}
              alt={name}
              className="w-full object-contain rounded-t-3xl rounded-b-lg cursor-pointer"
            />
          </a>
          <h3 className="text-white noselect text-center font-black text-2xl">
            {name}
          </h3>
          <div className="px-4">
            <p className="text-gray-300 h-24 overflow-auto scrollbar style-2">
              {description}
            </p>
            <div className="w-full h-[1px] rounded bg-white my-3"></div>
            <p className="">
              {technologies.map((tech, index) => (
                <span key={index}>
                  <span className="text-yellow-400">#</span>
                  {tech}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="text-white max-w-3xl w-full">
      <Title subTitle="my works" title="Projects." />

      <div className="flex flex-wrap gap-10 mt-10 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
