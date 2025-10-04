/**
 * Vanilla JavaScript 3D Text Renderer for SYNTHHACK
 * This script creates a 3D text effect without any dependencies
 * Can be integrated directly into any HTML page
 */

class SynthHack3DRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    if (!this.container) {
      console.error('Container not found');
      return;
    }

    // Create the 3D text structure
    this.createHTML();
    this.addStyles();
    this.addEventListeners();
    this.startAnimations();
  }

  createHTML() {
    const synthHackText = 'SYNTHHACK'.split('');
    const yearText = '2K25'.split('');

    this.container.innerHTML = `
      <div class="synth-3d-wrapper" id="synth3d-wrapper">
        <div class="synth-3d-main">
          ${synthHackText.map((letter, index) => 
            `<span class="synth-letter" data-letter="${letter}" style="animation-delay: ${index * 0.1}s">${letter}</span>`
          ).join('')}
        </div>
        <div class="synth-3d-year">
          ${yearText.map((letter, index) => 
            `<span class="synth-letter" data-letter="${letter}" style="animation-delay: ${index * 0.1 + 0.9}s">${letter}</span>`
          ).join('')}
        </div>
      </div>
    `;
  }

  addStyles() {
    if (document.getElementById('synth-3d-styles')) return;

    const styles = `
      <style id="synth-3d-styles">
        .synth-3d-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: transform 0.3s ease;
        }

        .synth-3d-main,
        .synth-3d-year {
          display: flex;
          transform-style: preserve-3d;
        }

        .synth-3d-main {
          font-size: clamp(3rem, 12vw, 8rem);
          letter-spacing: 0.1em;
        }

        .synth-3d-year {
          font-size: clamp(2rem, 8vw, 6rem);
          letter-spacing: 0.2em;
        }

        .synth-letter {
          display: inline-block;
          font-family: 'Zalando', Arial, sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          position: relative;
          transform-style: preserve-3d;
          cursor: pointer;
          transition: all 0.3s ease;
          
          /* Gradient text */
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
          /* 3D shadow layers */
          text-shadow: 
            1px 1px 0 rgba(255,255,255,0.3),
            2px 2px 0 rgba(255,255,255,0.2),
            3px 3px 0 rgba(255,255,255,0.1),
            4px 4px 5px rgba(0,0,0,0.3),
            5px 5px 10px rgba(0,0,0,0.2),
            6px 6px 15px rgba(0,0,0,0.1);
          
          animation: 
            float 6s ease-in-out infinite,
            gradientShift 3s ease infinite,
            glow 2s ease-in-out infinite alternate;
        }

        .synth-letter::before {
          content: attr(data-letter);
          position: absolute;
          top: 2px;
          left: 2px;
          z-index: -1;
          color: rgba(255, 107, 107, 0.3);
          -webkit-text-fill-color: rgba(255, 107, 107, 0.3);
          transform: translateZ(-10px);
        }

        .synth-letter::after {
          content: attr(data-letter);
          position: absolute;
          top: 4px;
          left: 4px;
          z-index: -2;
          color: rgba(78, 205, 196, 0.2);
          -webkit-text-fill-color: rgba(78, 205, 196, 0.2);
          transform: translateZ(-20px);
        }

        .synth-letter:hover {
          transform: translateZ(20px) rotateY(15deg) scale(1.1);
          text-shadow: 
            0 0 20px currentColor,
            0 0 40px currentColor,
            0 0 60px currentColor,
            1px 1px 0 rgba(255,255,255,0.5),
            2px 2px 0 rgba(255,255,255,0.4),
            3px 3px 0 rgba(255,255,255,0.3),
            4px 4px 5px rgba(0,0,0,0.5),
            5px 5px 10px rgba(0,0,0,0.4);
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg); 
          }
          25% { 
            transform: translateY(-15px) rotateX(5deg); 
          }
          50% { 
            transform: translateY(-25px) rotateX(0deg); 
          }
          75% { 
            transform: translateY(-10px) rotateX(-5deg); 
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glow {
          from { 
            filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.5));
          }
          to { 
            filter: drop-shadow(0 0 20px rgba(78, 205, 196, 0.8));
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .synth-3d-wrapper { gap: 1rem; }
          .synth-3d-main { font-size: clamp(2rem, 10vw, 5rem); }
          .synth-3d-year { font-size: clamp(1.5rem, 6vw, 3rem); }
        }
      </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);
  }

  addEventListeners() {
    const wrapper = document.getElementById('synth3d-wrapper');
    if (!wrapper) return;

    // Mouse interaction for 3D rotation
    document.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const rotateX = deltaY * -15;
      const rotateY = deltaX * 15;
      
      wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset on mouse leave
    this.container.addEventListener('mouseleave', () => {
      wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });

    // Individual letter hover effects
    const letters = wrapper.querySelectorAll('.synth-letter');
    letters.forEach((letter, index) => {
      letter.addEventListener('mouseenter', () => {
        letter.style.animationPlayState = 'paused';
      });

      letter.addEventListener('mouseleave', () => {
        letter.style.animationPlayState = 'running';
      });
    });
  }

  startAnimations() {
    // Additional dynamic animations can be added here
    setInterval(() => {
      const letters = document.querySelectorAll('.synth-letter');
      letters.forEach((letter, index) => {
        const randomDelay = Math.random() * 2;
        letter.style.animationDelay = `${randomDelay}s`;
      });
    }, 10000); // Randomize animation delays every 10 seconds
  }

  // Method to dynamically change colors
  changeColorScheme(colors) {
    const letters = document.querySelectorAll('.synth-letter');
    letters.forEach(letter => {
      letter.style.background = `linear-gradient(45deg, ${colors.join(', ')})`;
    });
  }

  // Method to toggle 3D effect
  toggle3D(enable = true) {
    const wrapper = document.getElementById('synth3d-wrapper');
    if (!wrapper) return;

    wrapper.style.transform = enable ? 
      'perspective(1000px) rotateX(0deg) rotateY(0deg)' : 
      'none';
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Look for container with ID 'synthhack-3d'
  if (document.getElementById('synthhack-3d')) {
    window.synthHack3D = new SynthHack3DRenderer('synthhack-3d');
  }
});

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SynthHack3DRenderer;
}

// Global access
window.SynthHack3DRenderer = SynthHack3DRenderer;