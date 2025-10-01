import React from "react";
import { NavLink } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manage-user"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Manage User
          </NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
      {loggedInUser && (
        <div
          className="navbar-user"
          style={{ marginRight: "32px", fontWeight: "bold", color: "#1976d2" }}
        >
          {loggedInUser}
        </div>
      )}
    </nav>
  );
};

export default MyNavbar;
