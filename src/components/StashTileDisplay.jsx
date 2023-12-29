export default function StashTileDisplay(props){
    return(
        <div>
            <h3>Stash Name:</h3>
            <h4>{props.stashName}</h4>
            <h3>Location:</h3>
            <h4>{props.location}</h4>
            <h3>Landmarks:</h3>
            <h4>{props.landmarks}</h4>      
            <h3>Hostiles Nearby:</h3>    
            <h4>{props.hostileSighting}</h4>    
            <h3>Notes:</h3>
            <h4>{props.notes}</h4>
        </div>
    )
}

// not used atm