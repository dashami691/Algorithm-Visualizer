// src/components/SortingVisualizer.js
import React, { useState, useEffect } from 'react';
import GenerateButton from './GenerateButton';
import SpeedSlider from './SpeedSlider';
import ToggleButtons from './ToggleButtons';
import './SortingVisualizer.css';

const Bsalgo = () => {
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

  const mergeSort = async () => {
    const elements = document.querySelectorAll(
      visualizationMode === 'bars' ? '.array-bar' : '.array-cell'
    );

    const merge = async (start, mid, end) => {
      let i = start;
      let j = mid + 1;

      while (i <= mid && j <= end) {
        elements[i].style.backgroundColor = '#FF4949';
        elements[j].style.backgroundColor = '#FF4949';

        await sleep(speed);

        if (array[i] <= array[j]) {
          elements[i].style.backgroundColor = '#6c757d';
          i++;
        } else {
          const valueToInsert = array[j];
          const indexToInsert = j;

          // Shift elements to make space for the value to insert
          for (let k = j; k > i; k--) {
            array[k] = array[k - 1];
          }

          array[i] = valueToInsert;

          setArray([...array]);
          await sleep(speed);

          // Increment indices after insertion
          i++;
          mid++;
          j++;
        }
      }

      // Reset colors
      for (let k = start; k <= end; k++) {
        elements[k].style.backgroundColor = '#6c757d';
      }
    };

    const mergeSortRecursive = async (start, end) => {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);

        await mergeSortRecursive(start, mid);
        await mergeSortRecursive(mid + 1, end);
        await merge(start, mid, end);
      }
    };

    await mergeSortRecursive(0, array.length - 1);

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
      <button className='button' onClick={mergeSort}>Sort</button>
    </div>
  );
};

export default Bsalgo;
