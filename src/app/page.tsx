"use client";

import { MotionConfig } from "framer-motion";
import { Contact } from "@/components/Contact";
import { ContactDivider } from "@/components/ContactDivider";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { useWindowSize } from "react-use";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <MotionConfig reducedMotion={width < 786 ? "always" : "never"}>
      <div className="w-full px-4 md:px-8 mx-auto flex flex-col items-center mt-12">
        <Hero />
        <ContactDivider />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </MotionConfig>
  );
}
