import { Navigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import React from "react";
import MovieDetails from "./MovieDetails";
import Dialog from "components/Dialog/Dialog";
import AddMovieForm from "components/MovieForm/AddMovieForm/AddMovieForm";
import { FormModel } from "components/MovieForm/FormModel";

const checkMovieDetails =
  (movies, navigateMainPage, checkType, handleMovieEdit) => () => {
    const { movieId } = useParams();

    const movieDetails = useMemo(
      () => (movieId ? movies.find((movie) => movie.title === movieId) : null),
      [movieId]
    );

    return movieDetails ? (
      checkType === "edit" ? (
        <Dialog isOpened={true} onCloseButtonClick={navigateMainPage}>
          <AddMovieForm
            title="Edit movie"
            initialData={FormModel(movieDetails)}
            handleSubmit={handleMovieEdit}
          />
        </Dialog>
      ) : (
        <MovieDetails
          selectedMovie={movieDetails}
          navigateMainPage={navigateMainPage}
        />
      )
    ) : (
      <Navigate to="/" />
    );
  };

export default checkMovieDetails;
