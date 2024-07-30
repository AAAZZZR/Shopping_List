import React, { useState } from 'react';
import Item from './Item';
import SearchBar from './SearchBar';
import "./WaitingArea.css"
function WaitingArea({ items, moveItem }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="waiting-area">
      <h2>Waiting Area</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredItems.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          moveItem={() => moveItem(item, 'waiting', 'shopping')} 
        />
      ))}
    </div>
  );
}

export default WaitingArea;