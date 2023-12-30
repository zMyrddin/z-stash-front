import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserTileForm from "../components/UserTileForm";

const UserPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [userData, setUserData] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    username: "",
    role: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUserData(data.result);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleEdit = (user) => {
    setIsEditMode(true);
    setSelectedUser(user);
  };

  const handleCreate = () => {
    setIsEditMode(true);
    setSelectedUser({
      username: "",
      role: "",
    });

    // Use navigate to go to the add user page
    navigate("/users/add");
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${selectedUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(selectedUser),
        }
      );

      if (response.ok) {
        console.log("User updated successfully");
        // Fetch updated user data after update
        fetchUserData();
        setIsEditMode(false);
      } else {
        console.error("Error updating user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    // Display a confirmation dialog before deleting the user
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          console.log("User deleted successfully");
          // Fetch updated user data after deletion
          fetchUserData();
        } else {
          console.error("Error deleting user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleCancel = () => {
    // Handle cancel action
    setIsEditMode(false);
    setSelectedUser({
      username: "",
      role: "",
    });
  };

  return (
    <div>
      <h1>Users</h1>
      {userData.map((user) => (
        <div key={user._id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <h2>{user.username}</h2>
          <p>Role: {user.role}</p>
          <button onClick={() => handleEdit(user)}>Edit</button>
          {/* Add a confirmation dialog for delete button */}
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
      {/* Button to navigate to the AddUserPage */}
      <button onClick={handleCreate}>Add User</button>

      {/* Render the UserTileForm based on edit mode */}
      {isEditMode && (
        <UserTileForm
          isEditMode={isEditMode}
          username={selectedUser.username}
        //   password={selectedUser.password}
          role={selectedUser.role}
          setParentState={(key, value) =>
            setSelectedUser((prev) => ({ ...prev, [key]: value }))
          }
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UserPage;
