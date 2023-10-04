import React, { useEffect, useState } from "react";
import Counter from "components/Counter/Counter";
import FilterSection from "components/FilterSection/FilterSection";
import SearchSection from "components/Search/SearchSection";
import MoviesList from "components/Movie/MoviesList";
import MovieDetails from "components/Movie/MovieDetails";
import axios from "axios";

function MovieListPage() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [movieList, setMovieList] = useState([]);

  const BASE_URL = "http://localhost:4000";

  useEffect(() => {
    searchMovies();
  }, []);

  const selectMovie = (e) => {
    setSelectedMovie(e);
  };

  const searchMovies = (e, searchType, sortBy) => {
    axios
      .get(`${BASE_URL}/movies`, {
        params: {
          search: e,
          ...(searchType ? { searchBy: searchType } : {}),
          ...(sortBy ? { sortBy: sortBy } : {}),
        },
      })
      .then((response) => {
        setMovieList(response.data.data);
      })
      .catch((error) => {});
  };

  return (
    <>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} selectMovie={selectMovie} />
      ) : (
        <SearchSection searchMovies={searchMovies} />
      )}
      <Counter initialCount={1} />
      <FilterSection searchMovies={searchMovies} />
      <MoviesList selectMovie={selectMovie} movies={movieList} />
    </>
  );
}

export default MovieListPage;
