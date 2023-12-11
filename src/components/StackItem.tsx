"use client";

import { useState } from "react";
import Image from "next/image";
import { StackType } from "../data/stack";
import { motion } from "framer-motion";

type StackItemProps = {
  item: StackType;
  index: number;
};

export const StackItem = ({ item, index }: StackItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionVariants = {
    hidden: { y: 20, opacity: 0, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
    visible: {
      y: 0,
      opacity: 0.6,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    },
  };

  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative flex items-center justify-center h-28 w-28 aspect-square bg-neutral-100 rounded-lg shadow-md"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black z-10 flex items-center justify-center"
      />
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-50 flex items-center justify-center text-center"
        >
          <h3 className="font-bold text-xl text-neutral-100 ">{item.label}</h3>
        </motion.div>
      )}

      <div className="relative h-20 w-20">
        <Image
          src={item.icon}
          fill
          alt="Tech Icon"
          className="object-cover object-center"
        />
      </div>
    </motion.div>
  );
};
