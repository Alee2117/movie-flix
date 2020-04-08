import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MovieForm = props => {
  return (
    <div className="search-component">
      <FontAwesomeIcon className="icon" size="lg" icon={faSearch} />
      <span className="search">Search</span>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleInput}
          className="search-input"
          type="text"
        />
      </form>
    </div>
  );
};

export default MovieForm;
