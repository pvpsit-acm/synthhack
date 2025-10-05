import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

const FloatingActionIsland = ({ isVisible = true }) => {
  const handleRegister = () => {
    window.open('https://unstop.com/p/synthhack-acm-pvpsit-1567429', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://chat.whatsapp.com/E3z7veXGX8r2EgNzAueNLx', '_blank');
  };

  console.log('FloatingActionIsland isVisible:', isVisible);

  return (
    <div className={`floating-island ${!isVisible ? 'hidden' : ''}`}>
      <button 
        onClick={handleRegister}
        className="btn-primary w-1/2"
      >
        <ExternalLink className="w-5 h-5" />
        Register <span className='hidden md:inline'>Now</span>
      </button>
      <button 
        onClick={handleWhatsApp}
        className="btn-secondary w-1/2"
      >
        <MessageCircle className="w-5 h-5" />
        Join <span className='hidden md:inline'>WhatsApp</span>
      </button>
    </div>
  );
};

export default FloatingActionIsland;