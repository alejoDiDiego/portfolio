"use client";
import { education } from "@/constants";
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

const EducationCard = ({
  startDate,
  finishDate,
  title,
  institution,
  logo,
  index,
}: {
  startDate: string;
  finishDate: string;
  title: string;
  institution: string;
  logo: string;
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
            alt={institution}
            className="w-full rounded-full h-full object-contain"
          />
        </div>
      }
    >
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {institution}
        </p>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <div className="text-white   max-w-3xl w-full">
      <Title subTitle="MY TRAYECTORY" title="Education." />

      <VerticalTimeline lineColor="" animate={false} layout="1-column-left">
        {education.map((education, index) => (
          <EducationCard key={index} index={index} {...education} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Education, "education");
