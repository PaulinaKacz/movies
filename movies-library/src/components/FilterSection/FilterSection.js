import React, { useState } from "react";
import GenreSelector from "./GenreSelector";

const genres = [
  { name: "ALL" },
  { name: "DOCUMENTARY" },
  { name: "COMEDY" },
  { name: "HORROR" },
  { name: "CRIME" },
];

function FilterSection() {
  const [selectedGenre, setSelectedGenre] = useState("ALL");

  const changeCategory = (e) => {
    setSelectedGenre(e);
  };

  return (
    <GenreSelector
      genres={genres}
      selectedGenre={selectedGenre}
      selectGenre={changeCategory}
    />
  );
}

export default FilterSection;
