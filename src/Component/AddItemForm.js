import React, { useState } from 'react';
import "./AddItemForm.css"
function AddItemForm({ addItem }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      addItem(itemName.trim());
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;