import React from 'react';

const CropSelector = ({ onCropSelect }) => {
  const crops = ['Wheat', 'Rice', 'Corn'];

  const handleChange = (event) => {
    onCropSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="crop">Select Crop:</label>
      <select id="crop" onChange={handleChange}>
        <option value="">--Select a Crop--</option>
        {crops.map((crop, index) => (
          <option key={index} value={crop}>{crop}</option>
        ))}
      </select>
    </div>
  );
};

export default CropSelector;
