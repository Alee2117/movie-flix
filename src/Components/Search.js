import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Movie from "./Movie";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from "axios";

const Search = () => {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoaded(true);
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
        let movieObject = {
          title: res.data.Title,
          poster: res.data.Poster,
          year: res.data.Year,
          rated: res.data.Rated,
          released: res.data.Released,
          runtime: res.data.Runtime,
          genre: res.data.Genre,
          director: res.data.Director,
          writer: res.data.Writer,
          actors: res.data.Actors,
          plot: res.data.Plot,
          awards: res.data.Awards
        };

        setMovie([...movies, movieObject]);
      }
    );
  };

  return (
    <Router>
      <div className="search-component">
        <Link to="/movie">
          <a href="#">
            <FontAwesomeIcon className="icon" size="3x" icon={faSearch} />
          </a>
        </Link>
        <span className="search">Search</span>
        <Link to="/movie">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              className="search-input"
              type="text"
            />
          </form>
        </Link>
      </div>
      <Switch>
        <Route path="/movie" exact component={Movie}>
          <Movie movies={movies} />/
        </Route>
      </Switch>
    </Router>
  );
};

export default Search;
