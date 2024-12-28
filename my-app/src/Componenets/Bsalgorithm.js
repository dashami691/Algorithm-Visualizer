// src/components/SortingVisualizer.js
import React, { useState, useEffect } from 'react';
import SpeedSlider from './SpeedSlider';

const Bsalgorithm = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50); // Default speed
  const [visualizationMode, setVisualizationMode] = useState('bars');

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 300) + 10
    );
    setArray(newArray);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    const elements = document.querySelectorAll(
      visualizationMode === 'bars' ? '.array-bar' : '.array-cell'
    );

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        elements[j].style.backgroundColor = '#FF4949';
        elements[j + 1].style.backgroundColor = '#FF4949';

        await sleep(speed);

        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          setArray([...array]);
        }

        elements[j].style.backgroundColor = '#6c757d';
        elements[j + 1].style.backgroundColor = '#6c757d';
      }

      elements[array.length - 1 - i].style.backgroundColor = '#28a745';
    }
  };

  const renderElements = () => {
    return array.map((value, idx) => (
      <div key={idx} className={visualizationMode === 'bars' ? 'array-bar' : 'array-cell'}>
        {visualizationMode === 'bars' && <div style={{ height: ${value}px }}></div>}
        {visualizationMode === 'cells' && <div>{value}</div>}
      </div>
    ));
  };

  return (
    <div>
      <GenerateButton generateArray={generateArray} />
      <SpeedSlider setSpeed={setSpeed} />
      <ToggleButtons setVisualizationMode={setVisualizationMode} />
      <div className="array-container">
        {renderElements()}
      </div>
      <button onClick={bubbleSort}>Sort</button>
    </div>
  );
};

export default Bsalgorithm;