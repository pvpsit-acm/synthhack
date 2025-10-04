import React from 'react';
import { Trophy, Palette, Zap, Globe } from 'lucide-react';

const AwardsSection = () => {
  const recognitionAwards = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Best UI/UX",
      description: "Most innovative and user-friendly interface design that demonstrates exceptional attention to detail and user experience principles."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Beginner Arena",
      description: "Outstanding project by first-time hackathon participants showing exceptional learning curve and creative problem-solving approach."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Real-World Impact",
      description: "Solution with the highest potential for social impact and practical implementation that addresses genuine societal challenges."
    }
  ];

  return (
    <section id="awards" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4  " />
          </div>
          <h2 className="heading-1 text-lime-400   mb-4 sm:mb-6">
            Awards & Prizes
          </h2>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-6  " style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>
            ₹35,000 Prize Pool
          </div>
          <p className="body-large max-w-3xl mx-auto text-gray-300 mb-12">
            Compete for exciting prizes and recognition. Winners will receive cash awards, 
            certificates, and exclusive opportunities to showcase their innovations.
          </p>
        </div>
        
        {/* Special Recognition Section */}
        <div className="text-center mb-8">
          <h3 className="heading-1 text-cyan-400   mb-8">
            Special Recognition
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {recognitionAwards.map((award, index) => (
            <div key={index} className="space-card text-center group relative overflow-hidden">
              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-2 sm:p-4">
                <div className="text-yellow-400 mb-4 flex justify-center group-hover:text-orange-400 transition-colors duration-300 transform group-hover:scale-110">
                  {award.icon}
                </div>
                <h3 className="heading-2 text-white mb-3 text-lg sm:text-xl">
                  {award.title}
                </h3>
                <p className="body-medium text-gray-300 text-sm sm:text-base leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="space-card max-w-3xl mx-auto p-6 sm:p-8">
            <h3 className="heading-2 text-cyan-400 mb-4">
              What You'll Gain
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium text-gray-300">Internship opportunities with sponsor companies</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium text-gray-300">Mentorship from industry professionals</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium text-gray-300">Featured showcase on PVPSIT website</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium text-gray-300">Certificate of participation for all teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;