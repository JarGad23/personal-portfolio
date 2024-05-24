"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, Github, Linkedin } from "lucide-react";

export const ContactDivider = () => {
  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl my-8 flex gap-x-4 gap-y-4 justify-center items-center flex-wrap"
    >
      <a
        href="#contact"
        className="bg-neutral-800 text-neutral-200 rounded-2xl px-8 py-3 font-semibold flex items-center hover:bg-neutral-600 transition"
        aria-label="Contact button"
      >
        Contact me
        <ArrowRight className="h-4 w-4 ml-2" />
      </a>
      <a
        download="/cv.pdf"
        href="/cv.pdf"
        className="cursor-pointer bg-white shadow-md text-neutral-800 rounded-2xl px-8 py-3 font-semibold flex items-center hover:bg-neutral-100 transition"
        aria-label="Download CV button"
      >
        Download CV
        <ArrowDownToLine className="h-4 w-4 ml-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/jaros%C5%82aw-gad-270a93280/"
        target="_blank"
        className="cursor-pointer bg-white shadow-md text-neutral-800 p-3 rounded-full hover:bg-neutral-100 transition"
        aria-label="LinkedIn profile link"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/JarGad23"
        target="_blank"
        className="cursor-pointer bg-neutral-800 shadow-md text-neutral-200 p-3 rounded-full hover:bg-neutral-600 transition"
        aria-label="GitHub profile link"
      >
        <Github />
      </a>
    </motion.section>
  );
};
