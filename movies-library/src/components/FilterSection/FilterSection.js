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

  const changeCategory = (e) => {
    setSelectedGenre(e);
  };

  return (
    <div className="m-filter">
      <GenreSelector
        genres={genres}
        selectedGenre={selectedGenre}
        selectGenre={changeCategory}
      />
      <SortControl sortBy={props.sortBy} changeSorting={props.changeSorting} />
    </div>
  );
}

export default FilterSection;
