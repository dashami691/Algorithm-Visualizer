// src/components/ToggleButtons.js
import React, { useState } from 'react';
import './ToggleButtons.css'; // Import the CSS file for styling

const ToggleButtons = ({ setVisualizationMode }) => {
  const [activeButton, setActiveButton] = useState('bars');

  const handleToggle = (mode) => {
    setVisualizationMode(mode);
    setActiveButton(mode);
  };

  return (
    <div className="toggle-buttons-container">
      <button
        className={`toggle-button ${activeButton === 'bars' ? 'active' : ''}`}
        onClick={() => handleToggle('bars')}
      >
        Bars
      </button>
      <button
        className={`toggle-button ${activeButton === 'cells' ? 'active' : ''}`}
        onClick={() => handleToggle('cells')}
      >
        Cells
      </button>
    </div>
  );
};

export default ToggleButtons;
