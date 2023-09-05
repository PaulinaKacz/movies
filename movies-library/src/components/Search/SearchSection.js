import React from "react";
import SearchForm from "./SearchForm";
import searchBackgroung from "assets/header-background.png";

function SearchSection() {
  return (
    <div className="m-search__wrap">
      <div>
        <b>netflix</b>roulette
      </div>
      <img className="m-search" src={searchBackgroung} alt="movies" />
      <SearchForm />
    </div>
  );
}

export default SearchSection;
