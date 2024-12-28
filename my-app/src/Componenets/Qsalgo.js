// src/components/Qsalgo.js
import React, { useState, useEffect } from 'react';
import GenerateButton from './GenerateButton';
import SpeedSlider from './SpeedSlider';
import ToggleButtons from './ToggleButtons';
import './SortingVisualizer.css';

const Qsalgo = () => {
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

    // Reset the visual representation
    const elements = document.querySelectorAll(
      visualizationMode === 'bars' ? '.array-bar' : '.array-cell'
    );
    elements.forEach((element) => {
      element.style.backgroundColor = '#6c757d';
    });
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const quickSort = async () => {
    const elements = document.querySelectorAll(
      visualizationMode === 'bars' ? '.array-bar' : '.array-cell'
    );

    const partition = async (low, high) => {
      const pivot = array[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        elements[j].style.backgroundColor = '#FF4949';
        await sleep(speed);

        if (array[j] <= pivot) {
          i++;
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          setArray([...array]);
          await sleep(speed);
        }

        elements[j].style.backgroundColor = '#6c757d';
      }

      const temp = array[i + 1];
      array[i + 1] = array[high];
      array[high] = temp;
      setArray([...array]);

      return i + 1;
    };

    const quickSortRecursive = async (low, high) => {
      if (low < high) {
        const partitionIndex = await partition(low, high);

        elements[partitionIndex].style.backgroundColor = '#28a745';

        await Promise.all([
          quickSortRecursive(low, partitionIndex - 1),
          quickSortRecursive(partitionIndex + 1, high),
        ]);
      }
    };

    await quickSortRecursive(0, array.length - 1);

    // Highlight the entire sorted array
    for (let i = 0; i < array.length; i++) {
      elements[i].style.backgroundColor = '#28a745';
      await sleep(speed);
    }
  };

  const renderElements = () => {
    return array.map((value, idx) => (
      <div key={idx} className={visualizationMode === 'bars' ? 'array-bar' : 'array-cell'}>
        {visualizationMode === 'bars' && <div style={{ height: `${value}px` }}></div>}
        {visualizationMode === 'cells' && <div>{value}</div>}
      </div>
    ));
  };

  return (
    <div className='contain' font-size='larger'>
      <GenerateButton generateArray={generateArray} />
      <SpeedSlider setSpeed={setSpeed} />
      <ToggleButtons setVisualizationMode={setVisualizationMode} />
      <div className="array-container" font-size='larger'>
        {renderElements()}
      </div>
      <button className='button' onClick={quickSort}>Sort</button>
    </div>
  );
};

export default Qsalgo;
