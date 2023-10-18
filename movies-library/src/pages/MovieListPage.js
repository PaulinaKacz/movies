import React from "react";
import Counter from "components/Counter/Counter";
import FilterSection from "components/FilterSection/FilterSection";
import SearchSection from "components/Search/SearchSection";
import MoviesList from "components/Movie/MoviesList";
import MovieDetailsCheck from "components/Movie/MovieDetailsCheck";
import { Route, Routes } from "react-router-dom";

function MovieListPage(props) {
  const MovieDetailsWrapper = MovieDetailsCheck(
    props.movies,
    props.navigateMainPage
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SearchSection
              search={props.search}
              handleSearch={props.findMovie}
            />
          }
        />
        <Route path=":movieId" element={<MovieDetailsWrapper />} />
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
