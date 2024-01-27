// components/CreateItem.js
import React, { useState } from 'react';

const Createlist = ({ onCreate }) => {
  const [itemName, setItemName] = useState('');

  const handleCreate = () => {
    onCreate(itemName);
    setItemName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default Createlist;
