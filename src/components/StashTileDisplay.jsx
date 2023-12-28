export default function StashTileDisplay(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.location}</h3>
            <h3>{props.notes}</h3>
        </div>
    )
}