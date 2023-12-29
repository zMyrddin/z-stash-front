import { Component } from "react";


export default class UserTileForm extends Component {
	handleChangeInput = (event) => {
		// pass in the form input data 
		// call the parent setState function 

		this.props.setParentState(event.target.name, event.target.value);
	}

	render(){
		return(
			<form>
                <label htmlFor="name" >Name:</label>
				<input 
                    type="text" 
                    name="name" 
                    id="nameInput" 
                    value={this.props.name} 
                    onChange={this.handleChangeInput}
				/>

				<br /> 

				<label htmlFor="role">Role:</label>
				<input 
					type="text"
					name="role"
					id="roleInput"
					value={this.props.role}
					onChange={this.handleChangeInput}
				/>

			</form>
		)
	}
}