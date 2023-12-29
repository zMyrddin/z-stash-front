import { Component } from "react";


export default class StashTileForm extends Component {
	handleChangeInput = (event) => {
		// pass in the form input data 
		// call the parent setState function 

		this.props.setParentState(event.target.name, event.target.value);
	}

	render(){
		return(
			<form>
                <label htmlFor="stashName" >Name:</label>
				<input type="text" stashName="stashName" id="nameInput" 
				value={this.props.stashName} 
				onChange={this.handleChangeInput}
				/>

				<br /> 

				<label htmlFor="location">Location:</label>
				<input 
					type="text"
					name="location"
					id="locationInput"
					value={this.props.location}
					onChange={this.handleChangeInput}
				/>

                <br /> 

                <label htmlFor="landmarks">Landmarks:</label>
                <input 
                    type="text"
                    name="landmarks"
                    id="landmarksInput"
                    value={this.props.landmarks}
                    onChange={this.handleChangeInput}
                />

                
                <br /> 

                <label htmlFor="hostileSighting">Hostiles:</label>
                <input 
                    type="text"
                    name="hostileSighting"
                    id="hostileSightingInput"
                    value={this.props.hostileSighting}
                    onChange={this.handleChangeInput}
                />

                <br /> 

                <label htmlFor="notes">Notes:</label>
                <input 
                    type="text"
                    name="notes"
                    id="notesInput"
                    value={this.props.notes}
                    onChange={this.handleChangeInput}
                />

			</form>
		)
	}
}