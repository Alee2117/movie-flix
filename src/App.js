import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
