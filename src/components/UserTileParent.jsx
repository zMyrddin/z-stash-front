import React, { Component } from "react";
import UserTileDisplay from "./UserTileDisplay";
import UserTileForm from "./UserTileForm";

export default class UserTileParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      name: "name",
      role: "role",
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
        // process.env.REACT_APP_BACKEND_URL + "/users"
        "http://localhost:3001/users",
        {
            method: "GET", // specify the HTTP method
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
        name: data.result.name,
        role: data.result.role,
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
        <UserTileForm
          name={this.state.name}
          role={this.state.role}
          setParentState={this.updateState}
        />
      );
    } else {
      return (
        <div>
          <UserTileDisplay
          name={this.state.name}
          role={this.state.role}
          />
        </div>
      );
    }
  }
}
