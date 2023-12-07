import { ContactDivider } from "@/components/ContactDivider";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center pt-28">
      <Hero />
      <ContactDivider />
    </div>
  );
}
