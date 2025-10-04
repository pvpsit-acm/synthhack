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
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide floating island when "Ready to Join" section is visible
          if (entry.isIntersecting) {
            console.log('Ready to Join section is visible - hiding floating island');
            setShowFloatingIsland(false);
          } else {
            console.log('Ready to Join section is not visible - showing floating island');
            setShowFloatingIsland(true);
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.3, // Lower threshold for mobile to trigger earlier
        rootMargin: '0px' // No margin adjustment for consistent behavior
      }
    );

    // Target the "Ready to Join" section specifically
    const readyToJoinSection = document.getElementById('ready-to-join');
    if (readyToJoinSection) {
      observer.observe(readyToJoinSection);
      console.log('Observing Ready to Join section, isMobile:', isMobile);
    } else {
      console.error('Ready to Join section not found!');
    }

    return () => {
      if (readyToJoinSection) {
        observer.unobserve(readyToJoinSection);
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