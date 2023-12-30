import React, { Component } from "react";

export default class UserTileForm extends Component {
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
    console.log("Cancel clicked");
    // Handle cancel action
    this.props.handleCancel(); // Call the cancel function passed through props
  };

  render() {
    const { isEditMode, username, password, role } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          name="username"
          id="nameInput"
          value={username}
          onChange={this.handleChangeInput}
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="passwordInput"
          value={password}
          onChange={this.handleChangeInput}
        />

        <br />

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          name="role"
          id="roleInput"
          value={role}
          onChange={this.handleChangeInput}
        />

        <br />

        <button type="submit">{isEditMode ? 'Update' : 'Create'}</button>
        {isEditMode && <button type="button" onClick={this.handleCancel}>Cancel</button>}
      </form>
    );
  }
}
