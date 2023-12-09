import { ContactDivider } from "@/components/ContactDivider";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="w-full px-4 md:px-8 mx-auto flex flex-col items-center mt-12">
      <Hero />
      <ContactDivider />
      <TechStack />
      <Projects />
    </div>
  );
}
