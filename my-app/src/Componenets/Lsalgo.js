// src/components/Lsalgo.js
import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const Lsalgo = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, (_, index) => index + 1);
    setArray(newArray);
  };

  const linearSearch = async () => {
    const elements = document.querySelectorAll('.array-cell');

    for (let i = 0; i < array.length; i++) {
      elements[i].style.backgroundColor = '#FF4949';

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (array[i] === target) {
        elements[i].style.backgroundColor = '#28a745';
        return;
      }

      elements[i].style.backgroundColor = '#6c757d';
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
      <button className='button' onClick={linearSearch}>Search</button>
    </div>
  );
};

export default Lsalgo;
