import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#040407] text-zinc-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-200">
      {/* Custom magnetic desktop cursor */}
      <CustomCursor />

      {/* Subtle global grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
