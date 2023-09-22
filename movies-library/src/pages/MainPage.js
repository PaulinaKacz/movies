import React, { useState } from "react";
import Counter from "components/Counter/Counter";
import FilterSection from "components/FilterSection/FilterSection";
import SearchSection from "components/Search/SearchSection";
import MoviesList from "components/Movie/MoviesList";
import MovieDetails from "components/Movie/MovieDetails";

const movies = [
  {
    image: "avengers.png",
    releaseYear: "2004",
    title: "Avengers",
    genres: ["Action & Adventure"],
    description: "Lorem ipsum sit amet...",
    duration: "2h45min",
    rating: "8.9",
  },
  {
    image: "bohemianRhapsody.png",
    releaseYear: "2003",
    title: "Bohemian Rhapsody",
    genres: ["Drama", "Biography", "Music"],
    description: "Lorem ipsum sit amet...",
    duration: "2h45min",
    rating: "8.9",
  },
  {
    image: "inception.png",
    releaseYear: "2003",
    title: "Inception",
    genres: ["Action & Adventure"],
    description: "Lorem ipsum sit amet...",
    duration: "2h45min",
    rating: "8.9",
  },
  {
    image: "killBill.png",
    releaseYear: "1994",
    title: "Kill Bill",
    genres: ["Oscar winning Movie"],
    description: "Lorem ipsum sit amet...",
    duration: "2h45min",
    rating: "8.9",
  },
  {
    image: "pulpFiction.png",
    releaseYear: "2004",
    title: "Pulp Fiction",
    genres: ["Action & Adventure"],
    description: "Lorem ipsum sit amet...",
    duration: "2h45min",
    rating: "8.9",
  },
  {
    image: "reservoirDogs.png",
    releaseYear: "1994",
    title: "Reservoir Dogs",
    genres: ["Oscar winning Movie"],
    description: "Lorem ipsum sit amet...",
    duration: "2h45min",
    rating: "8.9",
  },
];

function MainPage() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [sortBy, setSortBy] = useState("RELEASE DATE");

  const selectMovie = (e) => {
    setSelectedMovie(e);
  };

  const changeSorting = (e) => {
    setSortBy(e);
  };

  return (
    <>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} selectMovie={selectMovie} />
      ) : (
        <SearchSection />
      )}
      <Counter initialCount={1} />
      <FilterSection sortBy={sortBy} changeSorting={changeSorting} />
      <MoviesList selectMovie={selectMovie} movies={movies} />
    </>
  );
}

export default MainPage;
