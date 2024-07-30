import React from 'react';
import "./Item.css"
function Item({ item, moveItem }) {
  return (
    <div className="item" onClick={moveItem}>
      {item.name}
    </div>
  );
}

export default Item;