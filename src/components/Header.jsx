import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { removeLocalUser } from "../auth";

const Header = ({ isLoggedIn }) => {
  return (
    <div className="header">
      {isLoggedIn ? (
        <nav className="nav-bar">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/newPost">Create a post</NavLink>
          <NavLink className="nav-link" to="/" onClick={(event)=> removeLocalUser()}>Logout</NavLink>
        </nav>
      ) : (
        <nav className="nav-bar">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/">Login</NavLink>
          <NavLink className="nav-link" to="/">Register</NavLink>
        </nav>
      )}
    </div>
  );
};

export default Header;
