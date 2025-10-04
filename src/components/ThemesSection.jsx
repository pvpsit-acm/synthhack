import React from 'react';
import { BookOpen, Heart, Smartphone, DollarSign, Wheat, Shield } from 'lucide-react';

const ThemesSection = () => {
  const themes = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Productivity & Education",
      description: "Tools and platforms that enhance learning, productivity, and knowledge sharing."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Social Innovation",
      description: "Solutions that address social challenges and create positive community impact."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Digital health solutions, fitness apps, and wellness tracking systems."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "FinTech & Digital Economy",
      description: "Financial technology, payment solutions, and digital commerce innovations."
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Agriculture & Food Security",
      description: "Smart farming, food distribution, and sustainable agriculture solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "Cybersecurity, data protection, and privacy-focused applications."
    }
  ];

  return (
    <section id="themes" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-1 text-lime-400   mb-4 sm:mb-6">
            Problem Statements
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Choose from six exciting domains and create solutions that make a real difference. 
            Each theme offers unique challenges and opportunities for innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="space-card text-center group cursor-pointer">
              <div className="text-lime-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:scale-110">
                {theme.icon}
              </div>
              <h3 className="heading-2 text-white mb-3 text-base sm:text-lg">
                {theme.title}
              </h3>
              <p className="body-medium text-gray-300 text-sm sm:text-base">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;