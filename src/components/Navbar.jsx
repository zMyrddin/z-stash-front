import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const handleLogout = () => {
    // Perform logout actions, such as clearing local storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    // Redirect to the home page after logout
    window.location.href = "/";
  };

  return (
    <nav>
      <h3>Find your way here!</h3>
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => isActive ? { color: "red" } : undefined}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/stash" style={({ isActive }) => isActive ? { color: "red" } : undefined}>
            Stash
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" style={({ isActive }) => isActive ? { color: "red" } : undefined}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/login" style={({ isActive }) => isActive ? { color: "red" } : undefined}>
            Login
          </NavLink>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
