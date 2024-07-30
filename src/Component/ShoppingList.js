import React from 'react';
import Item from './Item';
import "./ShoppingList.css"
function ShoppingList({ items, moveItem }) {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      {items.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          moveItem={() => moveItem(item, 'shopping', 'waiting')} 
        />
      ))}
    </div>
  );
}

export default ShoppingList;