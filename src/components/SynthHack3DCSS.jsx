import React, { useEffect, useRef } from 'react';

const SynthHack3DCSS = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse move handler for 3D interaction
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const rotateX = deltaY * -15;
      const rotateY = deltaX * 15;
      
      container.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // Reset handler
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg)';
    };

    // Add event listeners to the container itself for better interaction
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="synth-3d-container">
      <div ref={containerRef} className="synth-3d-text-wrapper">
        <div className="synth-3d-text synth-main">
          <span>S</span>
          <span>Y</span>
          <span>N</span>
          <span>T</span>
          <span>H</span>
          <span>H</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
        </div>
        <div className="synth-3d-text synth-year">
          <span>2</span>
          <span>K</span>
          <span>2</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default SynthHack3DCSS;