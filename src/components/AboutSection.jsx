import React from 'react';
import { Users, Code, Trophy, Utensils, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking",
      description: "Connect with like-minded developers, mentors, and industry professionals."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Fun & Food",
      description: "Enjoy great food, music, and activities while you code and collaborate."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Hands-On Coding",
      description: "24 hours of intensive coding to bring your innovative ideas to life."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Resume Boost",
      description: "Add valuable hackathon experience and projects to your portfolio."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Challenge Yourself",
      description: "Push your limits and discover what you're truly capable of creating."
    }
  ];

  return (
    <section id="about" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-1 text-lime-400   mb-4 sm:mb-6">
            Why Participate?
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Join us for an extraordinary 24-hour journey where innovation meets implementation. 
            SYNTHHACK 2K25 is more than just a hackathon – it's a launchpad for your ideas 
            and a catalyst for your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="space-card text-center group">
              <div className="text-lime-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="heading-2 text-white mb-3 text-lg sm:text-xl">
                {feature.title}
              </h3>
              <p className="body-medium text-gray-300 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index + 3} className="space-card text-center group">
              <div className="text-lime-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="heading-2 text-white mb-3 text-lg sm:text-xl">
                {feature.title}
              </h3>
              <p className="body-medium text-gray-300 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;