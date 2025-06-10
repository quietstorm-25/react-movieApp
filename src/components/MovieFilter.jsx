import React, { useState } from 'react';

const Filter = ({ setTitleFilter, setRateFilter }) => {
  const [localTitle, setLocalTitle] = useState('');
  const [localRate, setLocalRate] = useState('');

  const handleSearch = () => {
    setTitleFilter(localTitle);
    setRateFilter(localRate);
  };

  return (
    <div className="filter">
      <label>
        Title:
        <input
          type="text"
          placeholder="Search by title..."
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
        />
      </label>
      <label>
        Minimum Rating:
        <input
          type="number"
          placeholder="Min rating..."
          value={localRate}
          onChange={(e) => setLocalRate(e.target.value)}
          min="0"
          max="10"
          step="0.1"
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filter;
