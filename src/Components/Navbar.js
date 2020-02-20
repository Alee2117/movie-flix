import React from "react";
import logo from "../Assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img alt="" className="logo" src={logo} />
    </nav>
  );
};

export default Navbar;
