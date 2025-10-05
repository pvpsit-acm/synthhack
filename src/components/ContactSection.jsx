import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      name: "N Sampreeth Chowdary",
      role: "ACM Chair",
      email: "nschowdary1234@gmail.com",
      phone: "+91 86886 54968"
    },
    {
      name: "Pavan Kumar Chennupati",
      role: "ACM Vice Chair",
      email: "pavankc005@gmail.com",
      phone: "+91 90149 14111"
    },
    {
      name: "G Gowtham Chowdary",
      role: "ACM Secretary",
      email: "garapatigowtham6@gmail.com",
      phone: "+91 99889 94648"
    },
    {
      name: "Y Siddhartha Chowdary",
      role: "Technical Lead",
      email: "sidduyalamanchili3@gmail.com",
      phone: "+91 90102 94227"
    },
    {
      name: "Srithan Katta",
      role: "Logistics Manager",
      email: "srithankatta9@gmail.com",
      phone: "+91 93902 19304"
    },
    {
      name: "Kistamsetti Sai Lalith",
      role: "Participant Relations",
      email: "mrsailalith@gmail.com",
      phone: "+91 94925 68081"
    }
  ];

  return (
    <section id="contact" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 text-lime-400   mb-6">
            Contact Us
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Need help or have questions? Our dedicated team is here to assist you. 
            Reach out to any of our coordinators for support.
          </p>
        </div>
        
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
        
        <div id="ready-to-join" className="mt-16 text-center">
          <div className="space-card max-w-3xl mx-auto">
            <h3 className="heading-2 text-cyan-400 mb-6">
              Ready to Join the Adventure?
            </h3>
            <p className="body-large text-gray-300 mb-8">
              Don't miss out on this incredible opportunity to code, create, and conquer 
              with like-minded innovators. Register now and be part of SYNTHHACK 2K25!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                target='_blank'
                href="https://unstop.com/p/synthhack-acm-pvpsit-1567429" 
                className="btn-primary"
                
              >
                Register Now
              </a>
              <a 
                target='_blank'
                href="https://chat.whatsapp.com/E3z7veXGX8r2EgNzAueNLx" 
                className="btn-secondary"
                
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