import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">AI Counselling</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/logmood">Log Mood</Link>
        <Link to="/journal">Journal</Link>
      </div>
    </nav>
  );
};

export default Navbar;
