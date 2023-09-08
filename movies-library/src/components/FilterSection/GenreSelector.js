import React from "react";

function GenreSelector(props) {
  return (
    <div className="m-genreSelector">
      {props.genres.map((genre, index) => (
        <div
          className={`m-genreSelector__item ${
            props.selectedGenre === genre.name &&
            "m-genreSelector__item--selected"
          }`}
          onClick={() => props.selectGenre(genre.name)}
        >
          <div>{genre.name}</div>
        </div>
      ))}
    </div>
  );
}

export default GenreSelector;
