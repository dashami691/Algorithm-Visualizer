// src/components/GenerateButton.js
import React from 'react';
import './SortingVisualizer.css'

const GenerateButton = ({ generateArray }) => {
  return <button className='gbutton' onClick={generateArray}>Generate Array</button>;
};

export default GenerateButton;
