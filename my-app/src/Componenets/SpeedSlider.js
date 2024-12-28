// src/components/SpeedSlider.js
import React from 'react';

const SpeedSlider = ({ setSpeed }) => {
  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div>
      <label>Speed:</label>
      <input
        type="range"
        min="1"
        max="1000"  // Adjust the max value to slow down the speed
        defaultValue="5"  // You can adjust the default value as well
        onChange={handleSpeedChange}
      />
    </div>
  );
};

export default SpeedSlider;
