"use client";
import { education } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import React from "react";
import Title from "./Title";

const Projects = () => {
  return (
    <div className="text-white max-w-3xl w-full">
      <Title subTitle="my works" title="Projects." />
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
