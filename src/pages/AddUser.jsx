import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTileForm from "../components/UserTileForm";

const AddUserPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [selectedUser, setSelectedUser] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedUser),
      });
  
      const responseData = await response.text();
  
      console.log("Response from server:", responseData);
  
      // Now check if the response is valid JSON before parsing
      try {
        const jsonResponse = JSON.parse(responseData);
  
        if (response.ok) {
          console.log("User created successfully");
          // Redirect back to the UsersPage after creating
          navigate("/users");
        } else {
          console.error("Error creating user", jsonResponse.error);
          // Display a warning to the user
          console.warn("An error occurred while creating the entry. Please check your data.");
        }
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Use navigate to go back to the users page
    try {
      navigate("/users");
      console.log("After navigation");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <div>
        <h1>Add New User</h1>
        {/* UserTileForm for creating new users */}
        <UserTileForm
            isEditMode={false} // Set to false for creating
            username={selectedUser.username}
            role={selectedUser.role}
            password={selectedUser.password} // Include the password field
            setParentState={(key, value) =>
            setSelectedUser((prev) => ({ ...prev, [key]: value }))
        }
        handleCreate={handleCreate}
        handleUpdate={() => {}}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AddUserPage;
