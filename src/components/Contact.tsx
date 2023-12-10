"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export const Contact = () => {
  const { ref } = useSectionInView("contact", 0.5);

  return (
    <section ref={ref} id="contact" className="h-screen mt-28">
      Concat
    </section>
  );
};
