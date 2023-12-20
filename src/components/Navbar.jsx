import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav>
      <h3>Navbar</h3>
      <ul>
        <li>
          <NavLink
            to="/"
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              // Additional logic to handle the Home NavLink
              return location.pathname === "/";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/StashList" end>
            StashList
          </NavLink>
        </li>

        {/* Conditionally render additional NavLinks for Admin */}
        {user && user.role === "admin" && (
          <>
            <li>
              <NavLink to="/UsersList">Users List</NavLink>
            </li>
            {/* Add more admin-specific NavLinks as needed */}
          </>
        )}
      </ul>
    </nav>
  );
}
