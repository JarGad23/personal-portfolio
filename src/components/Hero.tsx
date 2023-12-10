"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

export const Hero = () => {
  const { ref } = useSectionInView("hero", 0.5);

  const leftDivVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightDivVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="w-full max-w-4xl flex flex-col sm:flex-row gap-y-8 sm:gap-x-8"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={leftDivVariants}
        transition={{ duration: 0.5 }}
        whileHover={{
          opacity: 0.8,
        }}
        className="w-full sm:w-1/2 h-[450px] sm:h-auto flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            fill
            src="/profile-me.png"
            alt="profile picture"
            className="object-cover object-center rounded-xl"
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightDivVariants}
        transition={{ duration: 0.5 }}
        className="bg-white w-full sm:w-1/2 font-semibol p-8 rounded-xl"
      >
        <h3 className="text-xl">Hi! My name is</h3>
        <h1 className="font-bold text-4xl text-neutral-900 my-2">
          Jarosław Gad
        </h1>
        <p className="text-md text-neutral-800">
          I&apos;m a slef-thougt{" "}
          <span className="font-semibold">Font-end Developer</span>
          who is trying to improve sites & web-apps everyday. I am createive
          person who likes to designe and build stuff that later can be used by
          people in websites. Besides, I really enjoy learning new technologies.
          Currently, I am mostly familiar with{" "}
          <span className="font-semibold">React (Next.js)</span>, but in the
          future I plan to learn a backend language to be more efficient and
          flexible in my work. If you want to work with me I&apos;m open to new
          proposal and please feel free to message me in{" "}
          <a href="#contact" className="font-semibold">
            email
          </a>{" "}
          down below.
        </p>
        <a
          href="#projects"
          className="w-full my-4 bg-neutral-800 text-neutral-200 font-semibold px-4 py-2 rounded-lg flex items-center hover:bg-neutral-600 transition"
        >
          Check out my work
          <ArrowRight className="h-4 w-4 ml-2" />
        </a>
      </motion.div>
    </section>
  );
};
