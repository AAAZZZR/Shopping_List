import React, { useState } from 'react';
import ShoppingList from './Component/ShoppingList';
import WaitingArea from './Component/WaitingArea';
import AddItemForm from './Component/AddItemForm';
import './App.css';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [waitingItems, setWaitingItems] = useState([]);

  const moveItem = (item, from, to) => {
    const fromList = from === 'shopping' ? shoppingItems : waitingItems;
    const toList = to === 'shopping' ? shoppingItems : waitingItems;

    const updatedFromList = fromList.filter(i => i.id !== item.id);
    const updatedToList = [...toList, item].sort((a, b) => a.name.localeCompare(b.name));

    if (from === 'shopping') {
      setShoppingItems(updatedFromList);
      setWaitingItems(updatedToList);
    } else {
      setWaitingItems(updatedFromList);
      setShoppingItems(updatedToList);
    }
  };

  const addItem = (name) => {
    const newItem = { id: Date.now(), name };
    setWaitingItems([...waitingItems, newItem].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <div className="App">
      <h1>Shopping List </h1>
      <AddItemForm addItem={addItem} />
      <div className="container">
        <ShoppingList items={shoppingItems} moveItem={moveItem} />
        <WaitingArea items={waitingItems} moveItem={moveItem} />
      </div>
    </div>
  );
}

export default App;