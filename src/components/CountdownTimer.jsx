import React, { useState, useEffect, useRef } from 'react';

const FlipDigit = ({ value, isFlipping }) => {
  return (
    <div className="flip-counter">
      <div className={`flip-digit ${isFlipping ? 'flipping' : ''}`}>
        {value.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate = '2025-10-19T09:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [flipping, setFlipping] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });
  
  const prevTimeRef = useRef(timeLeft);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
        
        // Check which values changed to trigger flip animation
        const newFlipping = {
          days: newTimeLeft.days !== prevTimeRef.current.days,
          hours: newTimeLeft.hours !== prevTimeRef.current.hours,
          minutes: newTimeLeft.minutes !== prevTimeRef.current.minutes,
          seconds: newTimeLeft.seconds !== prevTimeRef.current.seconds
        };
        
        setFlipping(newFlipping);
        setTimeLeft(newTimeLeft);
        prevTimeRef.current = newTimeLeft;
        
        // Reset flip animation after 600ms
        setTimeout(() => {
          setFlipping({ days: false, hours: false, minutes: false, seconds: false });
        }, 600);
        
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, key: 'days' },
    { label: 'Hours', value: timeLeft.hours, key: 'hours' },
    { label: 'Minutes', value: timeLeft.minutes, key: 'minutes' },
    { label: 'Seconds', value: timeLeft.seconds, key: 'seconds' }
  ];

  return (
    <div className="space-card p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="flex justify-center items-center gap-3 sm:gap-6 mb-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center">
            <FlipDigit 
              value={unit.value} 
              isFlipping={flipping[unit.key]}
            />
            <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider mt-2 font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-xs sm:text-sm text-cyan-400 uppercase tracking-wide font-medium">
          Register now to secure your spot!
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;