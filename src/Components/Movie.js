import React from "react";
import "./Movie.css";

const Movie = ({ movies }) => {
  return movies.map(movie => (
    <div key={movie.id}>
      <img
        height="450"
        width="350"
        className="poster"
        alt=""
        src={movie.poster}
      ></img>
      <div className="movie-info">
        <h1 className="title" key={movie.title}>
          {movie.title}
        </h1>
        <small>{movie.runtime}</small>
        <h3>{movie.plot}</h3>
        <h1 key={movie.id}>{movie.rated}</h1>
        <h1>{movie.genre}</h1>
        <small>Released: {movie.released}</small>
        <p>Director: {movie.director}</p>
        <p>Writers: {movie.writer}</p>
        <p>Leading Actors: {movie.actors}</p>
      </div>
    </div>
  ));
};

export default Movie;
