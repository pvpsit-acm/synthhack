import React from 'react';
import { UserPlus, Search, CheckCircle, Code, Clock, Eye, Award } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Registration",
      description: "Sign up and form your team (5 Members)",
      date: "Oct 3-11"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Screening Round",
      description: "Team verification and problem statement selection",
      date: "Oct 8-14"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Results",
      description: "Selected teams announcement",
      date: "Oct 15"
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
      description: "24 hours of intensive development",
      date: "Oct 19-20"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Final Review",
      description: "Project submissions and presentations",
      date: "Oct 20, 11 AM"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Ceremony",
      description: "Winners announcement and prize distribution",
      date: "Oct 20, 12 PM"
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
        
        {/* Route Map Timeline */}
        <div className="route-timeline-container">
          {/* Main Route Line */}
          <div className="route-line"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="route-stop" data-step={index + 1}>
              {/* Route Point/Station */}
              <div className="route-point">
                <div className="route-icon">
                  {event.icon}
                </div>
                <div className="route-number">{index + 1}</div>
              </div>
              
              {/* Route Content Card */}
              <div className="route-card">
                <div className="route-date">{event.date}</div>
                <h3 className="route-title">{event.title}</h3>
                <p className="route-description">{event.description}</p>
                
                {/* Progress indicator */}
                <div className="route-progress">
                  <div className="route-progress-bar" style={{width: `${((index + 1) / timelineEvents.length) * 100}%`}}></div>
                </div>
              </div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;