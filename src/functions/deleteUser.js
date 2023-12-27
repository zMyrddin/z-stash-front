const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Include your authentication token if required
            // 'Authorization': `Bearer ${yourAuthToken}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
  
      console.log('User deleted successfully');
      // Optionally, you can return data or perform any other actions
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle errors as needed
      return false;
    }
  };
  
  export default deleteUser;
  