import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StashTileForm from "../components/StashTileForm";

const StashesPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [stashData, setStashData] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({
    stashName: "",
    location: "",
    landmarks: "",
    hostileSighting: "",
    notes: "",
  });

  useEffect(() => {
    fetchStashData();
  }, []);

  const fetchStashData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/stash", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setStashData(data.result);
    } catch (error) {
      console.error("Error fetching stash data:", error);
    }
  };

  const handleEdit = (entry) => {
    setIsEditMode(true);
    setSelectedEntry(entry);
  };

  const handleCreate = () => {
    setIsEditMode(true);
    setSelectedEntry({
      stashName: "",
      location: "",
      landmarks: "",
      hostileSighting: "",
      notes: "",
    });

    // Use navigate to go to the add entry page
    navigate("/stashes/add");
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/stash/${selectedEntry._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(selectedEntry),
        }
      );

      if (response.ok) {
        console.log("Entry updated successfully");
        // Fetch updated stash data after update
        fetchStashData();
        setIsEditMode(false);
      } else {
        console.error("Error updating entry");
      }
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  return (
    <div>
      <h1>Stashes</h1>
      {stashData.map((stash) => (
        <div key={stash._id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <h2>{stash.stashName}</h2>
          <p>Location: {stash.location}</p>
          <p>Landmarks: {stash.landmarks}</p>
          <p>Hostile Sighting: {stash.hostileSighting}</p>
          <p>Notes: {stash.notes}</p>
          <button onClick={() => handleEdit(stash)}>Edit</button>
          {/* Add a confirmation dialog for delete button */}
          <button onClick={() => console.log("Delete entry:", stash)}>Delete</button>
        </div>
      ))}
      {/* Button to navigate to the AddEntryPage */}
      <button onClick={handleCreate}>Add Entry</button>

      {/* Render the StashTileForm based on edit mode */}
      {isEditMode && (
        <StashTileForm
          isEditMode={isEditMode}
          stashName={selectedEntry.stashName}
          location={selectedEntry.location}
          landmarks={selectedEntry.landmarks}
          hostileSighting={selectedEntry.hostileSighting}
          notes={selectedEntry.notes}
          setParentState={(key, value) =>
            setSelectedEntry((prev) => ({ ...prev, [key]: value }))
          }
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default StashesPage;