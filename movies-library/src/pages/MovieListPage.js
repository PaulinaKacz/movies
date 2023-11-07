import React, { useMemo, useState } from "react";
import Counter from "components/Counter/Counter";
import FilterSection from "components/FilterSection/FilterSection";
import SearchSection from "components/Search/SearchSection";
import MoviesList from "components/Movie/MoviesList";
import MovieDetailsCheck from "components/Movie/MovieDetailsCheck";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FormModel } from "components/MovieForm/FormModel";
import Dialog from "components/Dialog/Dialog";
import SuccessfullMessage from "components/MovieForm/SuccessInfo/SuccessInfo";
import AddMovieForm from "components/MovieForm/AddMovieForm/AddMovieForm";

function MovieListPage(props) {
  const MovieDetailsWrapper = MovieDetailsCheck(
    props.movies,
    props.navigateMainPage
  );

  const handleMovieEdit = async (e) => {
    await props.updateMovie(e, setIsShowSuccessMessage);
  };

  const MovieEditWithMovieDetails = MovieDetailsCheck(
    props.movies,
    props.navigateMainPage,
    "edit",
    handleMovieEdit
  );

  const navigate = useNavigate();

  const handleMovieAdd = async (e) => {
    await props.createMovie(e, setIsShowSuccessMessage);
  };

  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);

  const model = useMemo(() => FormModel(), []);

  const handleCloseButton = () => {
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchSection
                search={props.search}
                handleSearch={props.findMovie}
              />
              {isShowSuccessMessage && (
                <Dialog isOpened={true} onCloseButtonClick={handleCloseButton}>
                  <SuccessfullMessage title="CONGRATULATIONS !">
                    The movie has been updated successfully
                  </SuccessfullMessage>
                </Dialog>
              )}
            </>
          }
        />
        <Route path=":movieId" element={<MovieDetailsWrapper />} />
        <Route
          path="new"
          element={
            <>
              <SearchSection
                search={props.search}
                handleSearch={props.findMovie}
              />
              <Dialog isOpened={true} onCloseButtonClick={handleCloseButton}>
                {isShowSuccessMessage ? (
                  <SuccessfullMessage title="CONGRATULATIONS !">
                    The movie has been added to <br />
                    database successfully
                  </SuccessfullMessage>
                ) : (
                  <AddMovieForm
                    title="ADD MOVIE"
                    initialData={model}
                    handleSubmit={handleMovieAdd}
                  />
                )}
              </Dialog>
            </>
          }
        />
        <Route
          path=":movieId/edit"
          element={
            <>
              <SearchSection
                search={props.search}
                handleSearch={props.findMovie}
              />
              <MovieEditWithMovieDetails />
            </>
          }
        />
      </Routes>
      <Counter initialCount={1} />
      <FilterSection
        sortOptions={props.sortOptions}
        sortValue={props.sortValue}
        changeSortOption={props.changeSortOption}
        genres={props.genreOptions}
        genreValue={props.genreValue}
        selectGenre={props.selectGenre}
      />
      <MoviesList selectMovie={props.selectMovie} movies={props.movies} />
    </>
  );
}

export default MovieListPage;
