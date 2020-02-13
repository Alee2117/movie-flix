import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="search-component">
        <a href="#">
          <FontAwesomeIcon className="icon" size="3x" icon={faSearch} />
        </a>
        <span className="search">Search</span>
        <input className="search-input" type="text" />
      </div>
    </div>
  );
}

export default App;
