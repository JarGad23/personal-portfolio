"use client";

import { stack } from "../../data/stack";
import { StackItem } from "./StackItem";
import { motion } from "framer-motion";

export const TechStack = () => {
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
      className="w-full max-w-4xl flex flex-col items-center justify-center gap-y-8 mt-8"
    >
      <div className="bg-zinc-100 rounded-2xl px-8 py-3 opacity-90">
        <h2 className="font-semibold">My Tech Stack</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
        {stack.map((item, index) => (
          <StackItem key={item.label} item={item} index={index} />
        ))}
      </div>
    </motion.section>
  );
};
