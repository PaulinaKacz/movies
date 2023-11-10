"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "../../components/Movie/MovieDetails";
import { useSearchParams } from "next/navigation";

import { usePathname } from "next/navigation";

function App() {
  const BASE_URL = "http://localhost:4000";
  const pathname = usePathname();
  const [movies, setMovies] = useState(null);
  const [sortValue, setSortValue] = useState();

  const searchMovies = (sortValue, genreValue, search) => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`${BASE_URL}/movies${pathname}`, {
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
        console.log("response");
        console.log(response);
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
    searchMovies(sortValue, "", "");
  }, [sortValue, setMovies]);

  const searchParams = useSearchParams();

  const movieId = searchParams.get("movieId");

  const movieDetails = null;

  return movieDetails ? (
    <MovieDetails
      selectedMovie={movieDetails}
      //   navigateMainPage={navigateMainPage}
    />
  ) : (
    <div>Loading</div>
  );
}

export default App;
