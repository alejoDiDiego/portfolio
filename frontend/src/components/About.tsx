"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white">
      <motion.div>
        <h2>About me</h2>
        <p>My story and fields</p>
      </motion.div>
    </div>
  );
};

export default About;
