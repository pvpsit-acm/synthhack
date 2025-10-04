import React from 'react';
import { Eye, Lightbulb, Settings, Presentation } from 'lucide-react';

const JudgingSection = () => {
  const criteria = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Clarity",
      description: "Clear problem definition, well-structured solution, and easy-to-understand implementation."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Creative approach, unique features, and originality in solving the problem statement."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Feasibility",
      description: "Technical implementation quality, scalability, and real-world applicability."
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Presentation",
      description: "Effective communication, demo quality, and ability to showcase the solution's impact."
    }
  ];

  return (
    <section id="judging" className="section-spacing relative">
      {/* Parallax Spaceship */}
      <div className="absolute top-10 right-10 w-24 h-12 bg-gradient-to-r from-lime-400/20 to-cyan-400/20 transform rotate-12 blur-sm animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 text-lime-400 neon-glow mb-6">
            Judging Criteria
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Your projects will be evaluated by industry experts and academic professionals 
            based on these four key criteria. Ensure your solution excels in each area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {criteria.map((criterion, index) => (
            <div key={index} className="space-card text-center group relative overflow-hidden">
              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-lime-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:scale-110">
                  {criterion.icon}
                </div>
                <h3 className="heading-2 text-white mb-3 text-xl">
                  {criterion.title}
                </h3>
                <p className="body-medium text-gray-300">
                  {criterion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="space-card max-w-2xl mx-auto">
            <h3 className="heading-2 text-cyan-400 mb-4">
              Judging Panel
            </h3>
            <p className="body-medium text-gray-300">
              Our esteemed panel includes industry veterans, startup founders, 
              senior developers, and academic researchers who will provide valuable 
              feedback and select the winning projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingSection;