async function userList() {
    console.log("Retrieving User List");
  
    try {
      const result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/users/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!result.ok) {
        throw new Error(`Error! Status: ${result.status}`);
      }
  
      const data = await result.json();
  
      console.log(data);
  
      return data;
    } catch (error) {
      console.error("Error retrieving user list:", error);
      throw error; // Re-throw the error for the calling code to handle
    }
  }
  
  module.exports = { userList };
  