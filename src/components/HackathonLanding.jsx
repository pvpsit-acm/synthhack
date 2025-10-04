import React, { useState, useEffect, useRef } from 'react';
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
  const [showFloatingIsland, setShowFloatingIsland] = useState(true);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'contact') {
            // Hide floating island when contact section is visible
            setShowFloatingIsland(!entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the contact section is visible
        rootMargin: '-100px 0px' // Add some margin to trigger earlier
      }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
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
      
      {/* Floating Action Island - Hidden when contact section is visible */}
      <FloatingActionIsland isVisible={showFloatingIsland} />
    </div>
  );
};

export default HackathonLanding;