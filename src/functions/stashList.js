async function stashList() {
    console.log("Retrieving Stash List");
  
    try {
      const result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/stash/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
  
      const data = await result.json();
  
      console.log(data);
  
      return data;
    } catch (error) {
      console.error("Error retrieving stash list:", error);
      throw error; // Re-throw the error for the calling code to handle
    }
  }
  
  module.exports = { stashList };
  