import React, { useState } from 'react';
import axios from 'axios';

function StashForm() {
  const [stashData, setStashData] = useState({
    address: '',
    contents: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStashData({
      ...stashData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send stash data to the server for creation
    axios.post('/api/stash', stashData)
      .then(response => {
        // Handle success (optional)
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Add Stash</h1>
      <form onSubmit={handleSubmit}>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={stashData.address}
          onChange={handleInputChange}
        />
        <br />
        <label>Contents:</label>
        <input
          type="text"
          name="contents"
          value={stashData.contents}
          onChange={handleInputChange}
        />
        <br />
        <label>Notes:</label>
        <textarea
          name="notes"
          value={stashData.notes}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button type="submit">Add Stash</button>
      </form>
    </div>
  );
}

export default StashForm;
