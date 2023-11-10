"use client";

import React from "react";
import MovieTile from "./MovieTile";

function MoviesList(props) {
  console.log(props.movies);
  return (
    <div className="m-movie__list" data-testid="movieList-container">
      {props.movies.map((movie, index) => (
        <MovieTile movie={movie} selectMovie={props.selectMovie} />
      ))}
    </div>
  );
}

export default MoviesList;
