import React from 'react';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05060b] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden">
      {/* Dynamic Ambient Background Canvas */}
      <CyberBackground />

      {/* Glassmorphic Cyber HUD Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
