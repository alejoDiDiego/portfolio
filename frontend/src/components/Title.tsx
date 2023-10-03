import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Title = ({ subTitle, title }: { subTitle: string; title: string }) => {
  return (
    <motion.div className="mt-20 mb-6" variants={textVariant()}>
      <p className="text-white sm:text-[18px] text-[14px] uppercase text-secondary tracking-wider">
        {subTitle}
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {title}
      </h2>
    </motion.div>
  );
};

export default Title;
