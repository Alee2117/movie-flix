import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [movies, setMovies] = useState("");

  const handleInput = e => {
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="search-component">
      <a href="#">
        <FontAwesomeIcon className="icon" size="3x" icon={faSearch} />
      </a>
      <form onSubmit={handleSubmit}>
        <span className="search">Search</span>
        <input onChange={handleInput} className="search-input" type="text" />
      </form>
    </div>
  );
};

export default Search;
