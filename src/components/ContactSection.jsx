import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      name: "Arjun Kumar",
      role: "Event Coordinator",
      email: "arjun.kumar@pvpsit.edu",
      phone: "+91 98765 43210"
    },
    {
      name: "Priya Sharma",
      role: "Technical Lead",
      email: "priya.sharma@pvpsit.edu",
      phone: "+91 98765 43211"
    },
    {
      name: "Rahul Singh",
      role: "Sponsorship Head",
      email: "rahul.singh@pvpsit.edu",
      phone: "+91 98765 43212"
    },
    {
      name: "Sneha Patel",
      role: "Marketing & PR",
      email: "sneha.patel@pvpsit.edu",
      phone: "+91 98765 43213"
    },
    {
      name: "Vikram Reddy",
      role: "Logistics Manager",
      email: "vikram.reddy@pvpsit.edu",
      phone: "+91 98765 43214"
    },
    {
      name: "Anita Gupta",
      role: "Participant Relations",
      email: "anita.gupta@pvpsit.edu",
      phone: "+91 98765 43215"
    }
  ];

  return (
    <section id="contact" className="section-spacing relative">
      {/* Parallax Communication Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-lime-400/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 text-lime-400 neon-glow mb-6">
            Contact Us
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Need help or have questions? Our dedicated team is here to assist you. 
            Reach out to any of our coordinators for support.
          </p>
        </div>
        
        {/* Desktop: 3x2 Grid, Tablet: 2x3 Grid, Mobile: 1 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="space-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="heading-2 text-white text-lg mb-1">
                  {contact.name}
                </h3>
                <p className="text-sm text-cyan-400 font-medium">
                  {contact.role}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-sm hover:text-lime-400 transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-sm hover:text-lime-400 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="space-card max-w-3xl mx-auto">
            <h3 className="heading-2 text-cyan-400 mb-6">
              Ready to Join the Adventure?
            </h3>
            <p className="body-large text-gray-300 mb-8">
              Don't miss out on this incredible opportunity to code, create, and conquer 
              with like-minded innovators. Register now and be part of SYNTHHACK 2K25!
            </p>
            
            {/* Call-to-action buttons matching floating island */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Registration link will be added here!');
                }}
              >
                Register Now
              </a>
              <a 
                href="#" 
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  alert('WhatsApp community link will be added here!');
                }}
              >
                Join WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;