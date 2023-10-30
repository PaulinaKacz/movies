import "./App.css";
import MainPage from "pages/MovieListPage";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:4000";

  let [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState(null);
  const [sortValue, setSortValue] = useState(
    searchParams.get("sortedBy") ?? ""
  );
  const [genreValue, setGenreValue] = useState(searchParams.get("genre") ?? "");
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [genreOptions] = useState([
    { label: "Comedy", value: "Comedy" },
    { label: "Drama", value: "Drama" },
    { label: "Romance", value: "Romance" },
    { label: "Animation", value: "Animation" },
  ]);
  const [sortOptions] = useState([
    { label: "Release Date", value: "Release Date" },
    { label: "Title", value: "Title" },
  ]);

  const findMovie = (searchQuery) => {
    setSearch(searchQuery);
  };

  const sortMovie = (value) => {
    setSortValue(value);
  };
  const selectGenre = (value) => {
    setGenreValue(value);
  };

  const selectMovie = (movieIdValue) => {
    navigate(`/${movieIdValue}`);
  };

  const navigateMainPage = () => {
    navigate("/");
  };

  const searchMovies = (sortValue, genreValue, search) => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`${BASE_URL}/movies`, {
        params: {
          search: search,
          ...(genreValue ? { filter: genreValue } : {}),
          ...(sortValue ? { sortBy: sortValue } : {}),
          searchBy: "title",
        },
      })
      .then((response) => {
        setMovies(
          response.data.data.map((movie) => ({
            imageUrl: movie.poster_path,
            title: movie.title,
            date: movie.release_date,
            genres: movie.genres.map((genre) => ({ name: genre })),
            runtime: movie.runtime,
            rating: movie.vote_average,
            overview: movie.overview,
          }))
        );
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        const result = error.response;
        return Promise.reject(result);
      });

    return () => {
      cancelToken.cancel();
    };
  };

  useEffect(() => {
    searchMovies(sortValue, genreValue, search);
  }, [sortValue, genreValue, search, setMovies]);

  useEffect(() => {
    searchParams.set("search", search);
    searchParams.set("genre", genreValue);
    searchParams.set("sortedBy", sortValue);
    setSearchParams(searchParams);
  }, [search, genreValue, sortValue, searchParams, setSearchParams]);

  return movies ? (
    <div className="App">
      <MainPage
        search={search}
        findMovie={findMovie}
        movies={movies}
        selectMovie={selectMovie}
        sortOptions={sortOptions}
        sortValue={sortValue}
        changeSortOption={sortMovie}
        genreOptions={genreOptions}
        genreValue={genreValue}
        selectGenre={selectGenre}
        navigateMainPage={navigateMainPage}
      />
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default App;
