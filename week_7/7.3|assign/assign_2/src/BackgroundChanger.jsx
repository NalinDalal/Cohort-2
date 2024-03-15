import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="background-changer" style={{ backgroundColor }}>
      <h2>Background Changer</h2>
      <div>
        <button onClick={() => handleColorChange('red')}>Red</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
        <button onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button onClick={() => handleColorChange('white')}>White</button>
        <button onClick={() => handleColorChange('black')}>Black</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
