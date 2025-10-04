import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Enhanced Parallax Space Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-object parallax-satellite top-10 left-10"></div>
        <div className="parallax-object parallax-planet top-20 right-10"></div>
        <div className="parallax-object parallax-asteroid bottom-40 left-5"></div>
        <div className="parallax-object parallax-rocket top-1/2" style={{animationDelay: '2s'}}></div>
        <div className="parallax-object parallax-satellite bottom-20 right-20" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center flex-1 text-center relative z-10 px-4 py-16">
        
        {/* Centered 3D Title */}
        <div className="mb-8">
          <h1 className="space-title-3d mb-4">
            SYNTHHACK
          </h1>
          <h1 className="space-title-3d">
            2K25
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="heading-2 text-cyan-400 neon-glow mb-12">
          Code. Create. Conquer.
        </p>
        
        {/* Countdown Timer in Single Container */}
        <div className="mb-12">
          <CountdownTimer targetDate="2025-10-19T09:00:00" />
        </div>
        
        {/* Event Details */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-gray-300">
          <div className="flex items-center gap-2 justify-center">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            <span className="body-medium sm:body-large">19–20 October 2025</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            <span className="body-medium sm:body-large">PVPSIT Auditorium</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            <span className="body-medium sm:body-large">48 Hours</span>
          </div>
        </div>
        
        {/* Logos Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 opacity-70">
          <div className="space-card p-3 sm:p-4 text-center min-w-[150px]">
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Organized by</div>
            <div className="text-lime-400 font-semibold mt-1 text-sm sm:text-base">ACM Student Chapter</div>
          </div>
          <div className="space-card p-3 sm:p-4 text-center min-w-[150px]">
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Department</div>
            <div className="text-lime-400 font-semibold mt-1 text-sm sm:text-base">CSE, PVPSIT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;