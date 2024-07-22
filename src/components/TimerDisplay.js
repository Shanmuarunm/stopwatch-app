import React from 'react';
import './TimerDisplay.css';

const formatTime = (elapsedTime) => {
  const milliseconds = parseInt((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
};

const TimerDisplay = ({ elapsedTime }) => {
  return (
    <div className="timer-display">
      {formatTime(elapsedTime)}
    </div>
  );
};

export default TimerDisplay;
