import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center flex-1 text-center relative z-10 px-4 py-16">
        
        {/* Centered 3D Title */}
        <div className="mb-8">
          <h1 className="zalando font-black text-6xl mb-4">
            SYNTHHACK
          </h1>
          <h1 className="zalando text-6xl">
            2K25
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="heading-2 text-cyan-400 mb-12">
          Code. Create. Conquer.
        </p>
        
        {/* Countdown Timer in Single Container */}
        <div className="mb-12">
          <CountdownTimer targetDate="2025-10-10T09:00:00" />
        </div>
        
        {/* Event Details */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-gray-300">
          <div className="flex items-center gap-2 justify-center">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            <span className="body-medium sm:body-large">19-20 October 2025</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            <span className="body-medium sm:body-large">PVPSIT Auditorium</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            <span className="body-medium sm:body-large">24 Hours</span>
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