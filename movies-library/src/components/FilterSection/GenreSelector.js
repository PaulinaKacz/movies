"use client";

import React from "react";

function GenreSelector(props) {
  return (
    <div className="m-genreSelector" data-testid="genreSelector-container">
      {props.genres.map((genre, index) => (
        <div
          key={index}
          aria-label={genre.value}
          className={`m-genreSelector__item ${
            props.selectedGenre === genre.value &&
            "m-genreSelector__item--selected"
          }`}
          onClick={() => props.selectGenre(genre.value)}
        >
          <div>{genre.value}</div>
        </div>
      ))}
    </div>
  );
}

export default GenreSelector;
