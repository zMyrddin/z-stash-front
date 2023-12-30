import React, { Component } from "react";
import StashTileDisplay from "./StashTileDisplay";
import StashTileForm from "./StashTileForm";

export default class StashTileParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      stashName: "name",
      location: "location",
      landmarks: "landmark",
      hostileSighting: "no please",
      notes: "none",
    };
  }

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchStashData();
  }

  async fetchStashData() {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/stash",
        {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
      }
        );
      const data = await response.json();

      console.log(data);

      // Update the state with the fetched data
      this.setState({
        stashName: data.result.stashName,
        location: data.result.location,
        landmarks: data.result.landmarks,
        hostileSighting: data.result.hostileSighting,
        notes: data.result.notes
      });
      console.log('Updated state:', this.state);
    } catch (error) {
      console.error('Error fetching stash data:', error);
    }
  }

  updateState = (stateKeyId, newStateValue) => {
    if (Object.keys(this.state).includes(stateKeyId)) {
      this.setState({
        [stateKeyId]: newStateValue,
      });
    } else {
      console.warn("Incorrect state was almost created or edited.");
    }
  };

  render() {
    if (this.state.editMode) {
      return (
        <StashTileForm
          stashName={this.state.stashName}
          location={this.state.location}
          landmarks={this.state.landmarks}
          hostileSighting={this.state.hostileSighting}
          notes={this.state.notes}
          setParentState={this.updateState}
        />
      );
    } else {
      return (
        <div>
          <StashTileDisplay
            stashName={this.state.stashName}
            location={this.state.location}
            landmarks={this.state.landmarks}
            hostileSighting={this.state.hostileSighting}
            notes={this.state.notes}
          />
        </div>
      );
    }
  }
}
