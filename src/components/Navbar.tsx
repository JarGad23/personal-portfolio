"use client";

import { FolderGit, Home, Layers, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { cn } from "../../libs/utils";
import type { SectionName } from "@/hooks/useSectionInView";

const navRoutes = [
  {
    label: "Hero",
    value: "hero",
    href: "#hero",
    Icon: <Home />,
  },
  {
    label: "Tech Stack",
    value: "tech-stack",
    href: "#tech-stack",
    Icon: <Layers />,
  },
  {
    label: "Projects",
    value: "projects",
    href: "#projects",
    Icon: <FolderGit />,
  },
  {
    label: "Contact",
    value: "contact",
    href: "#contact",
    Icon: <MessageCircle />,
  },
  {
    label: "Email",
    value: "email",
    href: "#email",
    Icon: <Mail />,
  },
];

export const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLasClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-5xl sticky top-0 p-4 sm:my-4 sm:rounded-2xl bg-slate-100 shadow-md  mx-auto z-50"
    >
      <ul className="flex items-center sm:justify-around justify-center flex-wrap gap-x-6 gap-y-4">
        {navRoutes.map((route, index) => (
          <li
            key={route.value}
            className={cn(
              "text-sm sm:text-base font-semibold text-neutral-900",
              route.value === activeSection ? "text-gray-400 underline" : ""
            )}
            onClick={() => {
              setActiveSection(route.value as SectionName);
              setTimeOfLasClick(Date.now());
            }}
          >
            <a href={route.href} className="flex items-center gap-x-2">
              {route.Icon}
              {route.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
