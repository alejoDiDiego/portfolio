"use client";
import React from "react";
import Title from "./Title";
import { SectionWrapper } from "@/hoc";

const Contact = () => {
  return (
    <div className="text-white max-w-3xl w-full">
      <Title subTitle="Let's get in touch" title="Contact" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
