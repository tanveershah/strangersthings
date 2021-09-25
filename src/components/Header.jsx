import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { removeLocalUser } from "../auth";

const Header = ({ isLoggedIn }) => {
  return (
    <div className="header">
      <div className="logo">Stranger's Things</div>
      {isLoggedIn ? (
        <nav className="nav-bar">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="current" className="nav-link" to="/addPost">Create a post</NavLink>
          <NavLink activeClassName="current" className="nav-link" to="/login" onClick={(event)=> removeLocalUser()}>Logout</NavLink>
        </nav>
      ) : (
        <nav className="nav-bar">
          <NavLink activeClassName="current" className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="current" className="nav-link" to="/posts">Posts</NavLink>
          {/* <NavLink activeClassName="current" className="nav-link" to="/register">Register</NavLink> */}
          <NavLink activeClassName="current" className="nav-link" to="/login">Login</NavLink>
        </nav>
      )}
    </div>
  );
};

export default Header;
