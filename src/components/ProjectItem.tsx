"use client";

import { useState } from "react";
import { Project } from "../../data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../libs/utils";

type ProjectItemPorps = {
  project: Project;
  index: number;
};

export const ProjectItem = ({ project, index }: ProjectItemPorps) => {
  const [isHovering, setIsHovering] = useState(false);

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

  const fadeInFromSideAnimationVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
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
        once: false,
      }}
      custom={index}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full h-[600px] rounded-lg"
    >
      <motion.div
        className={cn(
          "max-w-full h-full absolute inset-0 z-20 bg-black opacity-50 rounded-xl transition duration-500 ease-in-out",
          isHovering && "opacity-80"
        )}
      />
      <Image
        src={project.image}
        fill
        alt="Project image"
        className="object-contain object-center rounded-xl"
      />
      <div className="absolute z-30 p-8 space-y-8 max-w-full">
        <h3 className="font-bold text-white text-3xl">{project.label}</h3>
        {isHovering ? (
          <>
            <p className="text-md font-semibold text-neutral-400">
              {project.description}
            </p>
            <div className="flex flex-col gap-y-4">
              <h4 className="text-neutral-100 font-semibold text-lg">
                Tech Stack:
              </h4>
              <motion.div className="flex gap-x-4">
                {project.technologies.map((technologie, i) => (
                  <motion.div
                    key={`${technologie}-${i}`}
                    variants={fadeInFromSideAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: false,
                    }}
                    custom={i}
                    className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-lg"
                  >
                    <div className="relative h-12 w-12">
                      <Image
                        fill
                        src={technologie.icon}
                        className="object-cover object-center"
                        alt="Technologie Icon"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <a
                target="_blank"
                href={project.href}
                className="text-lg font-semibold text-white underline"
              >
                Live website
              </a>
              <a
                target="_blank"
                href={project.github}
                className="text-lg font-semibold text-white underline"
              >
                Github repository
              </a>
            </div>
          </>
        ) : null}
      </div>
    </motion.div>
  );
};
