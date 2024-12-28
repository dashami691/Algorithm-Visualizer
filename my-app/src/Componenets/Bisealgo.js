// src/components/Bisealgo.js
import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const Bisealgo = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, (_, index) => index + 1);
    setArray(newArray);
  };

  const binarySearch = async () => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      const elements = document.querySelectorAll('.array-cell');
      elements[mid].style.backgroundColor = '#FF4949';

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (array[mid] === target) {
        elements[mid].style.backgroundColor = '#28a745';
        return;
      } else if (array[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

      elements[mid].style.backgroundColor = '#6c757d';
    }
  };

  const renderElements = () => {
    return array.map((value, idx) => (
      <div key={idx} className='array-cell'>
        {value}
      </div>
    ));
  };

  return (
    <div className='contain'>
      <div>
        <label className='label'>
          Target:
          <input
            className='input'
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            min="1"
            max="20"
          />
        </label>
      </div>
      <div className="array-container">
        {renderElements()}
      </div>
      <button className='button' onClick={binarySearch}>Search</button>
    </div>
  );
};

export default Bisealgo;
