import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ThemesSection from './ThemesSection';
import TimelineSection from './TimelineSection';
import JudgingSection from './JudgingSection';
import AwardsSection from './AwardsSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import FloatingActionIsland from './FloatingActionIsland';

const HackathonLanding = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'themes', 'timeline', 'judging', 'awards', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated Space Background */}
      <div className="space-background"></div>
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <TimelineSection />
        <JudgingSection />
        <AwardsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      {/* Floating Action Island */}
      <FloatingActionIsland />
    </div>
  );
};

export default HackathonLanding;