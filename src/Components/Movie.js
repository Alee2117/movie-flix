import React from "react";
import "./Movie.css";

const Movie = ({ movies }) => {
  return movies.map(movie => (
    <div key={movie.id}>
      <div className="poster-title">
        <ul>
          <li>
            <img
              height="450"
              width="350"
              className="poster"
              alt=""
              src={movie.poster}
            ></img>
          </li>
          <li>
            <h1 className="title" key={movie.title}>
              {movie.title}
            </h1>
            <small>{movie.runtime}</small>
          </li>
        </ul>
      </div>
      <div className="rating-genre">
        <h1 className="rating" key={movie.id}>
          {movie.rated}
        </h1>
        <h1>{movie.genre}</h1>
      </div>
      <h3 className="plot">{movie.plot}</h3>
      <div className="movie-info">
        <p>Director: {movie.director}</p>
        <p>Writer(s): {movie.writer}</p>
        <p>Leading Actors: {movie.actors}</p>
        <p>{movie.awards}</p>
        <small className="released">Released: {movie.released}</small>
      </div>
    </div>
  ));
};

export default Movie;
