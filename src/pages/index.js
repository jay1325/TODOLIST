import React, { useState } from 'react';
import Createlist from '../Components/Createlist';

const Home = () => {
  const [items, setItems] = useState([]);

  const handleCreate = (itemName) => {
    const newItem = { id: Date.now(), name: itemName };
    setItems([...items, newItem]);
  };

  const handleUpdate = (itemId, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
  };

  const handleDelete = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1>Todo List</h1>
      <Createlist onCreate={handleCreate} />

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleUpdate(item.id, prompt('New name:'))}>
              Update
            </button>{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
