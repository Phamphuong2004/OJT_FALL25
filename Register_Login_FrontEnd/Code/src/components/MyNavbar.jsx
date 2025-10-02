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
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ul
        className="navbar-links"
        style={{ display: "flex", alignItems: "center", margin: 0 }}
      >
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
        <span
          className="navbar-user"
          style={{
            fontWeight: "bold",
            color: "#1976d2",
            marginRight: "24px",
            fontSize: "16px",
          }}
        >
          {loggedInUser}
        </span>
      )}
    </nav>
  );
};

export default MyNavbar;
