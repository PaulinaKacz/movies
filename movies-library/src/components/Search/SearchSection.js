import React, { useState } from "react";
import SearchForm from "./SearchForm";
import searchBackgroung from "assets/header-background.png";

function SearchSection(props) {
  const [searchQuery, setSearchQuery] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.searchMovies(searchQuery, "title");
  };

  return (
    <div className="m-search__wrap">
      <div>
        <b>netflix</b>roulette
      </div>
      <img className="m-search" src={searchBackgroung} alt="movies" />
      <SearchForm
        onSubmit={handleFormSubmit}
        searchMovies={props.searchMovies}
        setSearchQuery={props.setSearchQuery}
        searchQuery={props.searchQuery}
      />
    </div>
  );
}

export default SearchSection;
