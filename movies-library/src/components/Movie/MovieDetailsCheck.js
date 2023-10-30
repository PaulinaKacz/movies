import { Navigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import React from "react";
import MovieDetails from "./MovieDetails";

const checkMovieDetails = (movies, navigateMainPage) => () => {
  const { movieId } = useParams();

  const movieDetails = useMemo(
    () => (movieId ? movies.find((movie) => movie.title === movieId) : null),
    [movieId]
  );

  return movieDetails ? (
    <MovieDetails
      selectedMovie={movieDetails}
      navigateMainPage={navigateMainPage}
    />
  ) : (
    <Navigate to="/" />
  );
};

export default checkMovieDetails;
