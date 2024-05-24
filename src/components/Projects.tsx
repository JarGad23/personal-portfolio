"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl flex flex-col items-center justify-center gap-y-8 mt-12"
    >
      <div className="bg-zinc-100 rounded-2xl px-8 py-3 opacity-90">
        <h2 className="font-semibold">Projects I&apos;ve worked on</h2>
      </div>
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectItem key={project.label} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};
