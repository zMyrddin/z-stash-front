const deleteStash = async (stashId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/stashes/${stashId}`,
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
  
      console.log('Stash deleted successfully');
      // Optionally, you can return data or perform any other actions
      return true;
    } catch (error) {
      console.error('Error deleting stash:', error);
      // Handle errors as needed
      return false;
    }
  };
  
  export default deleteStash;
  