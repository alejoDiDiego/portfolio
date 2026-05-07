"use client";
import { experience } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "./Title";

const ExperienceCard = ({
  startDate,
  finishDate,
  title,
  company,
  logo,
  points,
  index,
}: {
  startDate: string;
  finishDate: string;
  title: string;
  company: string;
  logo: string;
  points: string[];
  index: number;
}) => {
  return (
    <VerticalTimelineElement
      id={title}
      iconStyle={{
        background: "white",
      }}
      visible={true}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={
        startDate == finishDate ? startDate : `${startDate} - ${finishDate}`
      }
      icon={
        <div className="flex overflow-hidden justify-center items-center w-full h-full">
          <img
            src={logo}
            alt={company}
            className="w-full rounded-full h-full object-contain"
          />
        </div>
      }
    >
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <h3 className="text-white text-[20px] sm:text-[24px] font-bold">
          {title}
        </h3>
        <p
          className="text-secondary text-[14px] sm:text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company}
        </p>
        <ul className="mt-4 list-disc ml-4 space-y-2">
          {points.map((point, pointIndex) => (
            <li
              key={pointIndex}
              className="text-gray-300 text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px]"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="text-white max-w-3xl w-full">
      <Title subTitle="what i have done" title="Work Experience." />

      <VerticalTimeline lineColor="" animate={false} layout="1-column-left">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} index={index} {...exp} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
