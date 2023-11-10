"use client";

import Dialog from "../../components/Dialog/Dialog";
import AddMovieForm from "../../components/MovieForm/AddMovieForm/AddMovieForm";
import { NewFormModel } from "../../components/MovieForm/NewFormModel";
import Navigate from "../../lib/Navigate";
import React, { useMemo, useState } from "react";
import axios from "axios";

export default function NewMoviePage(props) {
  const BASE_URL = "http://localhost:4000";

  const createMovie = (movieData, action) => {
    axios
      .post(`${BASE_URL}/movies`, movieData)
      .then((res) => {
        action(true);
        setTimeout(() => {
          action(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMovieAdd = async (e) => {
    await createMovie(e, setIsShowSuccessMessage);
  };

  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);

  const handleCloseButton = () => {
    <Navigate to="/" replace />;
  };

  const model = useMemo(() => NewFormModel(), []);

  return (
    <Dialog isOpened={true} onCloseButtonClick={handleCloseButton}>
      <AddMovieForm
        title="ADD MOVIE"
        initialData={model}
        handleSubmit={handleMovieAdd}
      />
    </Dialog>
  );
}
