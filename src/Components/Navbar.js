import React from "react";
import logo from "../Assets/logo.svg";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <img className="logo" src={logo} />
        <ul className="links">
          <li>
            <Link to="/">
              <a href="#" className="active">
                Home
              </a>
            </Link>
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
    </Router>
  );
};

export default Navbar;
