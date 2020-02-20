import React from "react";

const Movie = ({ movies }) => {
  return movies.map(movie => (
    <div>
      <h1>Movie Page</h1>
      <h1>{movie.title}</h1>
      <h1>{movie.released}</h1>
    </div>
  ));
};

export default Movie;
