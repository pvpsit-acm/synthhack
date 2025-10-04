import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

const FloatingActionIsland = () => {
  const handleRegister = () => {
    // Replace with actual Unstop registration link
    alert('Registration link: Replace with actual Unstop URL');
    // window.open('https://unstop.com/hackathon/synthhack-2k25', '_blank');
  };

  const handleWhatsApp = () => {
    // Replace with actual WhatsApp community link
    alert('WhatsApp link: Replace with actual community invite URL');
    // window.open('https://chat.whatsapp.com/your-community-link', '_blank');
  };

  return (
    <div className="floating-island">
      <button 
        onClick={handleRegister}
        className="btn-primary"
      >
        <ExternalLink className="w-5 h-5" />
        Register Now
      </button>
      <button 
        onClick={handleWhatsApp}
        className="btn-secondary"
      >
        <MessageCircle className="w-5 h-5" />
        Join WhatsApp
      </button>
    </div>
  );
};

export default FloatingActionIsland;