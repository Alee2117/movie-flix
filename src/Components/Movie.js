import React from "react";

const Movie = ({ movies }) => {
  return movies.map(movie => (
    <div key={movie.id}>
      <h1 key={movie.title}>{movie.title}</h1>
      <h1 key={movie.id}>{movie.released}</h1>
    </div>
  ));
};

export default Movie;
