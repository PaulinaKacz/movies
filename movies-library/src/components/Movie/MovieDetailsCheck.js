"use client";

import { useMemo } from "react";
import React from "react";
import MovieDetails from "./MovieDetails";
import Dialog from "../Dialog/Dialog";
import AddMovieForm from "..//MovieForm/AddMovieForm/AddMovieForm";
import { FormModel } from "..//MovieForm/FormModel";
import { useRouter } from "next/router";
import Navigate from "../../lib/Navigate";

const checkMovieDetails =
  (movies, navigateMainPage, checkType, handleMovieEdit) => () => {
    const router = useRouter();
    const { movieId } = router.query;

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
      <Navigate to="/" replace />
    );
  };

export default checkMovieDetails;
