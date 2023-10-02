"use client";
import React from "react";
import Title from "./Title";
import { SectionWrapper } from "@/hoc";
import { contact } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const ContactItem = ({
  link,
  icon,
  name,
  number,
  index,
}: {
  link: string;
  icon: string;
  name: string;
  number: string;
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full sm:w-fit min-w-[200px] gradient shadow-card rounded-3xl p-[2px]"
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
        <a
          href={link}
          target="_blank"
          className="flex flex-col justify-center items-center gap-2  w-full h-full py-3   rounded-3xl bg-[#200744] hover:bg-transparent transition-all duration-200 relative"
        >
          <div className="relative w-16 h-16">
            <Image fill src={icon} alt={name} />
          </div>
          {number.length > 0 ? (
            <div className="flex px-3 ">
              <p className="text-white rounded-full text-center  font-bold break-words text-lg">
                {number}
              </p>
            </div>
          ) : (
            <p className="text-white font-bold text-2xl">{name}</p>
          )}
        </a>
      </Tilt>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className="text-white max-w-3xl w-full mb-10">
      <Title subTitle="Let's get in touch" title="Contact" />
      <div className="flex flex-wrap gap-5 justify-start">
        {contact.map((item, index) => (
          <ContactItem {...item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
