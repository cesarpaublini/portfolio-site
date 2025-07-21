import Hero from "@/components/sections/Hero";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import CreativeQuizSection from "@/components/sections/CreativeQuizSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      <SkillsSection />
      <CreativeQuizSection />
      <ContactSection />
      <Footer />
    </>
  );
}
