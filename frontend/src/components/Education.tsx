"use client";
import { education } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({
  startDate,
  finishDate,
  title,
  institution,
  logo,
}: {
  startDate: string;
  finishDate: string;
  title: string;
  institution: string;
  logo: string;
}) => {
  return (
    <VerticalTimelineElement
      // iconStyle={{ background: "#000000" }}
      // contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // contentStyle={{ background: "#232631", color: "#fff" }}
      date={
        startDate == finishDate ? startDate : `${startDate} - ${finishDate}`
      }
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={logo}
            alt={institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {institution}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <div className="text-white mt-32 max-w-3xl w-full">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary tracking-wider">
          MY TRAYECTORY
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true} lineColor="" layout="2-columns">
          {education.map((education, index) => (
            <EducationCard key={index} {...education} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
