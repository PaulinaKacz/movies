import React from "react";

function MovieDetails(props) {
  return (
    <div className="m-movie__details" data-testid="movie-details">
      <img
        className="m-movie__tile__img"
        src={props.selectedMovie.poster_path}
        alt={props.selectedMovie.title}
      />
      <div>
        <div className="m-movie__details__header">
          <span className="m-movie__details__header__title">
            {props.selectedMovie.title}
          </span>
          <span>{props.selectedMovie.vote_average}</span>
        </div>

        <div>
          {props.selectedMovie.genres.map((genre, index) => (
            <div key={index} aria-label={genre}>
              <div>{genre}</div>
            </div>
          ))}
        </div>
        <div>
          <span className="m-movie__details__info__year">
            {props.selectedMovie.release_date}
          </span>
          <span>{props.selectedMovie.runtime}</span>
        </div>
        <div>{props.selectedMovie.overview}</div>
        <div
          className="m-movie__searchIcon"
          onClick={() => props.selectMovie("")}
          data-testid="search-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="18.5"
              cy="10.5"
              r="9.5"
              stroke="#F65261"
              strokeWidth="2"
            />
            <path
              d="M10.5 19.5L1.5 28.5"
              stroke="#F65261"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
