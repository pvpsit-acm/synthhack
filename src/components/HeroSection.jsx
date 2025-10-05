import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import SynthHack3DCSS from "./SynthHack3DCSS";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center flex-1 text-center relative z-10 px-4 py-16">
        <div className="min-h-screen pt-8 sm:pt-0">
          {/* SYNTHHACK 2K25 Logo Section - Using PNG Assets */}
          <div className="mb-8 relative hero-logo-section">
            <div className="hero-main-logo-container">
              {/* SYNTHHACK Logo */}
              <img
                src="/assets/SynthHack.png"
                alt="SYNTHHACK"
                className="hero-synthhack-image"
              />

              {/* Divider Line and 2K25 Container */}
              <div className="hero-2k25-section">
                <img
                  src="/assets/Rectangle.png"
                  alt=""
                  className="hero-divider-line hero-divider-left"
                />
                <img
                  src="/assets/2k25.png"
                  alt="2K25"
                  className="hero-2k25-image"
                />
                <img
                  src="/assets/Rectangle.png"
                  alt=""
                  className="hero-divider-line hero-divider-right"
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="heading-2 text-cyan-400 mb-12">
            Code. Create. Conquer.
          </p>

          {/* Countdown Timer in Single Container */}
          <div className="mb-12">
            <CountdownTimer targetDate="2025-10-11T23:56:00" />
          </div>

          {/* Event Details */}
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-gray-300">
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
              <span className="font-bold sm:font-bold body-medium sm:body-large ">
                19-20 October 2025
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
              <span className="font-bold sm:font-bold body-medium sm:body-large ">
                PVPSIT Auditorium
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
              <span className="font-bold sm:font-bold body-medium sm:body-large ">24 Hours</span>
            </div>
          </div>
        </div>
        {/* Logos Section */}
        <h2 className="heading-1 text-lime-400   mb-4 sm:mb-6">Organised By</h2>
        <div className="flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-8">
          <div className="space-card p-3 sm:p-4 text-center min-w-[150px]">
            <div className="text-lime-400 font-semibold mt-1 text-sm sm:text-base">
              <a target="_blank" href="https://pvpsiddhartha.acm.org/">
                <img
                  className="w-60 h-auto"
                  src="/assets/ACMFullLogo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="space-card p-3 sm:p-4 text-center min-w-[150px]">
            <a
              target="_blank"
              href="https://www.pvpsiddhartha.ac.in/cse_department"
            >
              <img
                className="w-60 h-auto"
                src="/assets/cselogo.png"
                alt=""
              />
            </a>
          </div>
          <div className="space-card p-3 sm:p-4 text-center min-w-[150px]">
            <a target="_blank" href="https://www.pvpsiddhartha.ac.in/">
              <img
                className="w-60 h-auto"
                src="/assets/PVPSITLogo.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
