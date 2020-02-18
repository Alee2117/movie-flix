import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Movie from "./Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

const Search = () => {
  const [movies, setMovies] = useState("");
  const [search, setSearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInput = e => {
    setMovies(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoaded(true);
    // setSearch(e.target.value);
  };

  useEffect(() => {
    if (isLoaded) {
      getMovies(search);
      setIsLoaded(false);
    }
  }, [isLoaded]);

  const getMovies = search => {
    Axios.get(`http://www.omdbapi.com/?t=${search}&apikey=183ac7ca`).then(
      res => {
        console.log(res.data);
      }
    );
  };

  return (
    <Router>
      <div className="search-component">
        <a href="#">
          <FontAwesomeIcon className="icon" size="3x" icon={faSearch} />
        </a>
        <form onSubmit={handleSubmit}>
          <span className="search">Search</span>
          <input onChange={handleInput} className="search-input" type="text" />
        </form>
        <p>{movies}</p>
      </div>
      <Route path="/movie" component={Movie}>
        <Movie />/
      </Route>
    </Router>
  );
};

export default Search;
