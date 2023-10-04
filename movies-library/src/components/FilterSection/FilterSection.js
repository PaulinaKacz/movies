import React, { useState } from "react";
import GenreSelector from "./GenreSelector";
import SortControl from "./SortControl";

const genres = [
  { name: "ALL" },
  { name: "DOCUMENTARY" },
  { name: "COMEDY" },
  { name: "HORROR" },
  { name: "CRIME" },
];

function FilterSection(props) {
  const [selectedGenre, setSelectedGenre] = useState("ALL");
  const [sortBy, setSortBy] = useState("RELEASE DATE");

  const changeCategory = (e) => {
    setSelectedGenre(e);
    props.searchMovies(e, "genre", sortBy);
  };

  const changeSortOption = (e) => {
    setSortBy(e);
    props.searchMovies(selectedGenre, "genre", e);
  };

  return (
    <div className="m-filter">
      <GenreSelector
        genres={genres}
        selectedGenre={selectedGenre}
        selectGenre={changeCategory}
      />
      <SortControl sortBy={sortBy} changeSortOption={changeSortOption} />
    </div>
  );
}

export default FilterSection;
