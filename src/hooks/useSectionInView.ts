import { useState, useEffect } from "react";

const useActiveSection = (
  sectionIds: string[],
  threshold = 0.5
): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (visibleSections.length > 0) {
        const mostVisibleSection = visibleSections.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio
            ? current
            : prev;
        });
        if (mostVisibleSection.target.id !== currentSection) {
          setCurrentSection(mostVisibleSection.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, index) => index / 100),
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, currentSection]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    }, 100); // Adjust debounce delay as needed

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [currentSection, activeSection]);

  return activeSection;
};

export default useActiveSection;
