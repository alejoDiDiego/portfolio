import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

import React, { ReactComponentElement } from "react";

const SectionWrapper = (
  Component: React.ComponentType,
  idName: string | undefined
) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-4xl flex justify-center  relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
