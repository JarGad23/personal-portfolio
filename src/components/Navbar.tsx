"use client";

import { FolderGit, Home, Layers, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../libs/utils";
import useActiveSection from "@/hooks/useSectionInView";

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
];

const scrollToSection = (id: string) => {
  const navbarHeight = 80;
  const element = document.getElementById(id);
  if (element) {
    const offsetTop =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const Navbar = () => {
  const routeIds = navRoutes.map((route) => route.value);
  const activeSection = useActiveSection(routeIds);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-5xl sticky top-0 p-4 sm:my-4 sm:rounded-2xl bg-slate-100 shadow-md  mx-auto z-50"
    >
      <ul className="flex items-center sm:justify-around justify-center flex-wrap gap-x-6 gap-y-4">
        {navRoutes.map((route, index) => (
          <motion.li
            key={route.value}
            className="relative text-sm sm:text-base font-semibold"
            whileHover={{
              color: "#146CCD",
            }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(route.value);
            }}
            initial={{ color: "#1e293b" }}
            animate={{
              color: route.value === activeSection ? "#146CCD" : "#1e293b",
            }}
            transition={{ duration: 0.3 }}
            style={{ cursor: "pointer" }}
          >
            <a href={route.href} className="flex items-center gap-x-2">
              {route.Icon}
              {route.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};
