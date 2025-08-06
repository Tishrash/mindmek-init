import React, { useEffect, useState } from 'react';
interface CountdownTimerProps {
  targetDate: Date;
}
export function CountdownTimer({
  targetDate
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);
  const timeUnits = [{
    label: 'Days',
    value: timeLeft.days
  }, {
    label: 'Hours',
    value: timeLeft.hours
  }, {
    label: 'Minutes',
    value: timeLeft.minutes
  }, {
    label: 'Seconds',
    value: timeLeft.seconds
  }];
  return <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map(unit => <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-gray-800 border border-gray-700 rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#00AEEF]">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-sm text-gray-400">{unit.label}</span>
        </div>)}
    </div>;
}