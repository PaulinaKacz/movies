import React from "react";
import Dialog from "../components/Dialog/Dialog";
import { useMemo, useState } from "react";
import AddMovieForm from "../components/MovieForm/AddMovieForm/AddMovieForm";
import SuccessMessage from "../components/MovieForm/SuccessInfo/SuccessInfo";
import FormMovieDelete from "../components/MovieForm/DeleteMovieForm/DeleteMovieForm";

export default {
  title: "Component/Dialog",
  component: Dialog,
};

export const Template = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleCloseButton = () => setIsOpened(false);
  const handleOpenDialog = () => setIsOpened(true);
  return (
    <>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <Dialog isOpened={isOpened} onCloseButtonClick={handleCloseButton}>
        Lorem ipsum sit amet
      </Dialog>
    </>
  );
};

export const MovieAddTemplate = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleCloseButton = () => setIsOpened(false);
  const handleOpenDialog = () => setIsOpened(true);

  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);

  const createFormMovieModel = () => ({
    title: "",
    movieUrl: "",
    genre: [],
    overview: "",
    runtime: "",
    rating: "",
    releaseDate: "",
  });

  const model = useMemo(() => createFormMovieModel(), []);
  const handleSubmit = (e) => {
    setIsShowSuccessMessage(true);
  };

  return (
    <>
      <button onClick={handleOpenDialog}>Add Movie</button>
      <Dialog isOpened={isOpened} onCloseButtonClick={handleCloseButton}>
        {isShowSuccessMessage ? (
          <SuccessMessage title="CONGRATULATIONS !">
            The movie has been added to <br />
            database successfully
          </SuccessMessage>
        ) : (
          <AddMovieForm
            title="ADD MOVIE"
            initialData={model}
            handleSubmit={handleSubmit}
          />
        )}
      </Dialog>
    </>
  );
};

export const MovieDeleteTemplate = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleCloseButton = () => setIsOpened(false);
  const handleOpenDialog = () => setIsOpened(true);

  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);

  const handleSubmit = () => setIsShowSuccessMessage(true);

  return (
    <>
      <button onClick={handleOpenDialog}>Delete Movie</button>
      <Dialog isOpened={isOpened} onCloseButtonClick={handleCloseButton}>
        {isShowSuccessMessage ? (
          <SuccessMessage title="CONGRATULATIONS !">
            The movie has been deleted successfully
          </SuccessMessage>
        ) : (
          <FormMovieDelete onConfirm={handleSubmit} />
        )}
      </Dialog>
    </>
  );
};

export const MovieEditTemplate = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleCloseButton = () => setIsOpened(false);
  const handleOpenDialog = () => setIsOpened(true);

  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);

  const createFormMovieModel = () => ({
    title: "Shrek",
    movieUrl: "https://www.shrekmovie.com",
    genre: [],
    overview: "Lorem ipsum sit amet...",
    runtime: "2h10min",
    rating: "8.8",
    releaseDate: "10.10.2002",
  });

  const model = useMemo(() => createFormMovieModel(), []);
  const handleSubmit = (e) => {
    console.log(e);
    setIsShowSuccessMessage(true);
  };

  return (
    <>
      <button onClick={handleOpenDialog}>Edit Movie</button>
      <Dialog isOpened={isOpened} onCloseButtonClick={handleCloseButton}>
        {isShowSuccessMessage ? (
          <SuccessMessage title="CONGRATULATIONS !">
            The movie has been updated successfully
          </SuccessMessage>
        ) : (
          <AddMovieForm
            title="EDIT MOVIE"
            initialData={model}
            handleSubmit={handleSubmit}
          />
        )}
      </Dialog>
    </>
  );
};
