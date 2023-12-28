import { NavLink } from "react-router-dom";



export default function Navbar(props){
    return (
        <nav>
            <h3>Find your way here!</h3>
                <ul>
                    <li>
                      <NavLink to="/" style={({isActive}) => isActive ? {color: "red"} : undefined} >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/stash" style={({isActive}) => isActive ? {color: "red"} : undefined} >
                        Stash
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user" style={({isActive}) => isActive ? {color: "red"} : undefined} >
                        Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user/login" style={({isActive}) => isActive ? {color: "red"} : undefined} >
                        Login
                      </NavLink>
                    </li>
                </ul>
        </nav>
    )
}