import Hero from "@/components/sections/Hero";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      <SkillsSection />
    </>
  );
}
