import Hero from "@/components/sections/Hero";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Creative Technologist & Strategist specializing in web development, design, and digital strategy. Explore my portfolio of innovative projects and creative solutions.",
  openGraph: {
    title: "Cesar Paublini | Creative Technologist & Strategist",
    description: "Creative Technologist & Strategist specializing in web development, design, and digital strategy. Explore my portfolio of innovative projects and creative solutions.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
