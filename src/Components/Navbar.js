import React from "react";
import logo from "../Assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} />
      <ul className="links">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Subscriptions</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
