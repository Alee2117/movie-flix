import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";

import Movie from "./Movie";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
    } // eslint-disable-next-line
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
          awards: res.data.Awards,
          id: res.data.imdbID
        };

        setMovie([...movies, movieObject]);
      }
    );
  };

  return (
    <div>
      <MovieForm handleSubmit={handleSubmit} handleInput={handleInput} />
      <Movie movies={movies} />
    </div>
  );
};

export default Search;
