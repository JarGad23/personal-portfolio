"use client";

import { createContext, useContext, useState } from "react";
import type { SectionName } from "@/hooks/useSectionInView";

type ActiveSectionContextProviderType = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLasClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderType) => {
  const [activeSection, setActiveSection] = useState<SectionName>("hero");
  const [timeOfLastClick, setTimeOfLasClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLasClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("Failed to use active section context");
  }

  return context;
};
