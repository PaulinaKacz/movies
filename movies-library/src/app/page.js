"use client";
import "../App.css";
import MainPage from "../pages/MovieListPage";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function App() {
  //   const navigate = useNavigate();
  const BASE_URL = "http://localhost:4000";

  //   let [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState(null);
  const [sortValue, setSortValue] = useState();
  // searchParams.get("sortedBy") ?? ""
  //   const [genreValue, setGenreValue] = useState(searchParams.get("genre") ?? "");
  //   const [search, setSearch] = useState(searchParams.get("search") ?? "");
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
    // setSearch(searchQuery);
  };

  const sortMovie = (value) => {
    setSortValue(value);
  };
  const selectGenre = (value) => {
    // setGenreValue(value);
  };

  const selectMovie = (movieIdValue) => {
    // navigate(`/${movieIdValue}`);
  };

  const navigateMainPage = () => {
    // navigate("/");
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
            id: movie.id,
            poster_path: movie.poster_path,
            title: movie.title,
            release_date: movie.release_date,
            genres: movie.genres,
            runtime: movie.runtime,
            vote_average: movie.vote_average,
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

  const createMovie = (movieData, action) => {
    axios
      .post(`${BASE_URL}/movies`, movieData)
      .then((res) => {
        // navigate("/");
        console.log("movie added");
        action(true);
        setTimeout(() => {
          action(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateMovie = (movieData, action) => {
    axios
      .put(`${BASE_URL}/movies`, movieData)
      .then((res) => {
        // navigate("/");
        console.log("movie updated");
        action(true);
        setTimeout(() => {
          action(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   searchMovies(sortValue, genreValue, search);
  // }, [sortValue, genreValue, search, setMovies]);

  useEffect(() => {
    searchMovies(sortValue, "", "");
  }, [sortValue, setMovies]);

  // useEffect(() => {
  //   searchParams.set("search", search);
  //   searchParams.set("genre", genreValue);
  //   searchParams.set("sortedBy", sortValue);
  //   setSearchParams(searchParams);
  // }, [search, genreValue, sortValue, searchParams, setSearchParams]);

  return movies ? (
    <div className="App">
      <MainPage
        // search={search}
        search="search"
        findMovie={findMovie}
        movies={movies}
        selectMovie={selectMovie}
        sortOptions={sortOptions}
        sortValue={sortValue}
        changeSortOption={sortMovie}
        genreOptions={genreOptions}
        // genreValue={genreValue}
        selectGenre={selectGenre}
        navigateMainPage={navigateMainPage}
        createMovie={createMovie}
        updateMovie={updateMovie}
      />
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default App;
