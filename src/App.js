import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Movie from "./Components/Movie";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Search} />
        <Route path="/movie" component={Movie} />
      </div>
    </Router>
  );
}

export default App;
