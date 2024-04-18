import React, { useState } from 'react';

const Search = ({ searchHandler }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    searchHandler(event.target.value); 
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Search;
