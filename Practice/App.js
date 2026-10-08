import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickedColor, setClickedColor] = useState('Red');

  // Hex values for soft pastel page backgrounds matching the theme
  const backgroundColors = {
    Red: '#fee2e2',
    Blue: '#e0f2fe',
    Green: '#dcfce7',
    Yellow: '#fef9c3'
  };

  function handleClick(color) {
    setClickedColor(color);
    // REMOVED: document.querySelector("body").style.background...
  }

  return (
    /* React safely overrides the full background color right here */
    <div 
      className="app-container" 
      style={{ backgroundColor: backgroundColors[clickedColor] }}
    >
      <h1 className={`heading text-${clickedColor.toLowerCase()}`}>
        You have clicked {clickedColor} Button
      </h1>
      
      <div className="button-group">
        <button className="btn btn-red" onClick={() => handleClick('Red')}>
          Red
        </button>
        <button className="btn btn-blue" onClick={() => handleClick('Blue')}>
          Blue
        </button>
        <button className="btn btn-green" onClick={() => handleClick('Green')}>
          Green
        </button>
        <button className="btn btn-yellow" onClick={() => handleClick('Yellow')}>
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
