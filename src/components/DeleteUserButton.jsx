import React from 'react';
import deleteUser from '../functions/deleteUser';

const UserComponent = ({ user }) => {
  const handleDeleteClick = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const deleted = await deleteUser(user._id);
      if (deleted) {
        // Optionally, update your component state or perform any other actions
      }
    }
  };

  return (
    <div>
      {/* Display user information */}
      <p>{`Username: ${user.username}, Role: ${user.role}`}</p>
      {/* Button to delete the user */}
      <button onClick={handleDeleteClick}>Delete User</button>
    </div>
  );
};

export default UserComponent;
