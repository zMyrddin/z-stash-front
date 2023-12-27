import React from 'react';
import deleteStash from './stashApi'; // Adjust the path based on your file structure

const StashComponent = ({ stash }) => {
  const handleDeleteClick = async () => {
    if (window.confirm('Are you sure you want to delete this stash?')) {
      const deleted = await deleteStash(stash._id);
      if (deleted) {
        // Optionally, update your component state or perform any other actions
      }
    }
  };

  return (
    <div>
      {/* Display stash information */}
      <p>{`Stash Name: ${stash.name}, Owner: ${stash.owner}`}</p>
      {/* Button to delete the stash */}
      <button onClick={handleDeleteClick}>Delete Stash</button>
    </div>
  );
};

export default StashComponent;
