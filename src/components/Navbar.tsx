"use client";

import { FolderGit, Home, Layers, Mail, MessageCircle } from "lucide-react";

export const Navbar = () => {
  const navRoutes = [
    {
      label: "Hero",
      href: "#hero",
      Icon: <Home />,
    },
    {
      label: "Tech Stack",
      href: "#tech-stack",
      Icon: <Layers />,
    },
    {
      label: "Projects",
      href: "#projects",
      Icon: <FolderGit />,
    },
    {
      label: "Contact",
      href: "#contact",
      Icon: <MessageCircle />,
    },
    {
      label: "Email",
      href: "#email",
      Icon: <Mail />,
    },
  ];

  return (
    <nav className="w-full max-w-5xl sticky top-0 p-4 sm:my-4 sm:rounded-2xl bg-slate-100 shadow-md flex items-center sm:justify-around justify-center flex-wrap gap-x-6 gap-y-4 mx-auto z-50">
      {navRoutes.map((route, index) => (
        <a
          className="text-sm sm:text-base font-semibold text-neutral-900 flex items-center gap-x-2"
          href={route.href}
        >
          {route.Icon}
          {route.label}
        </a>
      ))}
    </nav>
  );
};
