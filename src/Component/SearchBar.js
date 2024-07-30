import React from 'react';
import "./SearchBar.css"
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search items..."
    />
  );
}

export default SearchBar;