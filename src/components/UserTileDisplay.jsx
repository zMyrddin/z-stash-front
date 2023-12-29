export default function UserTileDisplay(props){
    return(
        <div>
            <h3>Name:</h3>
            <h4>{props.name}</h4>
            <h3>Role:</h3>
            <h4>{props.role}</h4>
        </div>
    )
}
