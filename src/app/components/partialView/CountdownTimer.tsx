import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  duration: number; // Duration in milliseconds
  onTimeout: () => void; // Callback when timer reaches 0
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration, onTimeout }) => {
  const calculateTimeLeft = () => {
    const endTime = Number(sessionStorage.getItem('countdownEndTime'));
    const currentTime = new Date().getTime();
    return endTime - currentTime;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = calculateTimeLeft();
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onTimeout]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="text-center font-medium text-base">
      <p>Resend Link after: <span className=' text-primary-bg-color'>{formatTime(timeLeft)}</span></p>
    </div>
  );
};

export default CountdownTimer;
