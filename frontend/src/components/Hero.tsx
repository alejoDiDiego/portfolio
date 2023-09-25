"use client";

import React from "react";
import ComputerCanvas from "./canvas/Computer";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto">
        <ComputerCanvas />
      </div>
    </section>
  );
};

export default Hero;
