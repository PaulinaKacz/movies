import React from "react";
import GenreSelector from "./GenreSelector";
import SortControl from "./SortControl";

function FilterSection(props) {
  return (
    <div className="m-filter">
      <GenreSelector
        genres={props.genres}
        selectedGenre={props.genreValue}
        selectGenre={props.selectGenre}
      />
      <SortControl
        sortBy={props.sortValue}
        changeSortOption={props.changeSortOption}
      />
    </div>
  );
}

export default FilterSection;
