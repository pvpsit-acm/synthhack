import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'themes', label: 'Themes' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'judging', label: 'Judging' },
    { id: 'awards', label: 'Awards' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-filter backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div 
            className="text-lg sm:text-xl font-bold text-lime-400 cursor-pointer neon-glow"
            onClick={() => scrollToSection('home')}
            style={{fontFamily: 'Orbitron, Arial, sans-serif'}}
          >
            SYNTHHACK 2K25
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === item.id 
                    ? 'text-lime-400 neon-glow' 
                    : 'text-gray-300 hover:text-lime-400'
                }`}
                style={{fontFamily: 'SF Pro Display, Inter, sans-serif'}}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lime-400 hover:text-lime-300 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-purple-500/20 absolute left-0 right-0 top-full">
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-300 text-sm ${
                    activeSection === item.id 
                      ? 'text-lime-400 neon-glow bg-lime-400/10' 
                      : 'text-gray-300 hover:text-lime-400 hover:bg-lime-400/5'
                  }`}
                  style={{fontFamily: 'SF Pro Display, Inter, sans-serif'}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;