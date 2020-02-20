import React from "react";
import logo from "../Assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img alt="" className="logo" src={logo} />
      <ul className="links">
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        <li className="active">Home</li>
        {/* </Link> */}
        <li>About</li>
        <li>Subscriptions</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
