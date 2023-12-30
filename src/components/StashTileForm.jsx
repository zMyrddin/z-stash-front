import React, { Component } from "react";

export default class StashTileForm extends Component {
  handleChangeInput = (event) => {
    // pass in the form input data
    // call the parent setState function
    this.props.setParentState(event.target.name, event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Determine whether to create or update based on isEditMode
    if (this.props.isEditMode) {
      // Perform update action
      this.props.handleUpdate();
    } else {
      // Perform create action
      this.props.handleCreate();
    }
  };

  handleCancel = () => {
    // Handle cancel action
    this.props.handleCancel();
  };

  render() {
    const { isEditMode, stashName, location, landmarks, hostileSighting, notes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="stashName">Name:</label>
        <input
          type="text"
          name="stashName"
          id="nameInput"
          value={stashName}
          onChange={this.handleChangeInput}
        />

        <br />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="locationInput"
          value={location}
          onChange={this.handleChangeInput}
        />

        <br />

        <label htmlFor="landmarks">Landmarks:</label>
        <input
          type="text"
          name="landmarks"
          id="landmarksInput"
          value={landmarks}
          onChange={this.handleChangeInput}
        />

        <br />

        <label htmlFor="hostileSighting">Hostiles:</label>
        <input
          type="text"
          name="hostileSighting"
          id="hostileSightingInput"
          value={hostileSighting}
          onChange={this.handleChangeInput}
        />

        <br />

        <label htmlFor="notes">Notes:</label>
        <input
          type="text"
          name="notes"
          id="notesInput"
          value={notes}
          onChange={this.handleChangeInput}
        />

        <br />

        <button type="submit">{isEditMode ? 'Update' : 'Create'}</button>
        {isEditMode && <button type="button" onClick={this.handleCancel}>Cancel</button>}
      </form>
    );
  }
}
