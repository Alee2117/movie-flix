import React from "react";
import logo from "../Assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} />
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Subscriptions</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
