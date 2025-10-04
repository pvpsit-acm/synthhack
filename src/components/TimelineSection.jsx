import React from 'react';
import { UserPlus, Search, CheckCircle, Code, Clock, Eye, Award } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Registration",
      description: "Sign up and form your team (max 4 members)",
      date: "Oct 1-15"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Screening",
      description: "Team verification and problem statement selection",
      date: "Oct 16-17"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Results",
      description: "Selected teams announcement",
      date: "Oct 18"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Hackathon Begins",
      description: "Opening ceremony and problem statement reveal",
      date: "Oct 19, 9 AM"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Coding Marathon",
      description: "48 hours of intensive development",
      date: "Oct 19-20"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Final Review",
      description: "Project submissions and presentations",
      date: "Oct 20, 6 PM"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Ceremony",
      description: "Winners announcement and prize distribution",
      date: "Oct 20, 8 PM"
    }
  ];

  return (
    <section id="timeline" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-1 text-lime-400   mb-4 sm:mb-6">
            Event Timeline
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Your journey from registration to victory. Follow this timeline to stay 
            updated with all important dates and milestones.
          </p>
        </div>
        
        {/* Timeline Infographic */}
        <div className="timeline-container">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="timeline-line hidden md:block"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Point */}
              <div className="timeline-point hidden md:block"></div>
              
              {/* Timeline Connector */}
              <div className="timeline-connector hidden md:block"></div>
              
              {/* Timeline Content */}
              <div className="timeline-content">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400 flex-shrink-0">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-2 text-white text-lg mb-1">
                      {event.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-lime-400 font-semibold">
                      {event.date}
                    </div>
                  </div>
                </div>
                <p className="body-medium text-gray-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;