"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const { ref } = useSectionInView("contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="w-full max-w-4xl flex flex-col items-center justify-center gap-y-8 my-20"
    >
      <div className="bg-zinc-100 rounded-2xl px-8 py-3 opacity-90">
        <h2 className="font-semibold">Let&apos;s get in touch.</h2>
      </div>
      <ContactForm />
    </motion.section>
  );
};
