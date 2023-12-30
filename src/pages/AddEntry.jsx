import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StashTileForm from "../components/StashTileForm";

const AddEntryPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [selectedEntry, setSelectedEntry] = useState({
    stashName: "",
    location: "",
    landmarks: "",
    hostileSighting: "",
    notes: "",
  });

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");

        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/stash/`,
 
            {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        
        body: JSON.stringify(selectedEntry),
      });
      
      const responseData = await response.json();

      if (response.ok) {
        console.log("Entry created successfully");
        // Redirect back to the StashesPage after creating
        navigate("/stash");
      } else {
       console.error("Error creating entry:", responseData.error);
      // Display a warning to the user
      console.warn("An error occurred while creating the entry. Please check your data.");
      }
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Use navigate to go back to the stash page
    try {
      navigate("/stash");
      console.log("After navigation");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <div>
      <h1>Add New Entry</h1>
      {/* StashTileForm for creating new entries */}
      <StashTileForm
        isEditMode={false} // Set to false for creating
        stashName={selectedEntry.stashName}
        location={selectedEntry.location}
        landmarks={selectedEntry.landmarks}
        hostileSighting={selectedEntry.hostileSighting}
        notes={selectedEntry.notes}
        setParentState={(key, value) =>
          setSelectedEntry((prev) => ({ ...prev, [key]: value }))
        }
        handleCreate={handleCreate}
        handleUpdate={() => {}}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AddEntryPage;
