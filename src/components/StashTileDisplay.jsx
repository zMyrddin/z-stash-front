export default function StashTileDisplay(props){
    return(
        <div>
            <h3>{props.stashName}</h3>
            <h3>{props.location}</h3>
            <h3>{props.landmarks}</h3>          
            <h3>{props.hostileSighting}</h3>    
            <h3>{props.notes}</h3>
        </div>
    )
}

// not used atm