import React from "react";
import FilterSection from "../components/FilterSection/FilterSection";
import SearchSection from "../components/Search/SearchSection";
import MoviesList from "../components/Movie/MoviesList";

function MovieListPage(props) {
  return (
    <>
      <SearchSection search={props.search} handleSearch={props.findMovie} />
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
