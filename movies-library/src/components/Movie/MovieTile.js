import React from "react";

function MovieTile(props) {
  return (
    <div
      aria-label={props.movie.title}
      onClick={() => props.selectMovie(props.movie)}
      data-testid="movie-tile"
    >
      <img
        className="m-movie__tile__img"
        src={props.movie.poster_path}
        alt={props.movie.title}
      />
      <div data-testid="movie-title">{props.movie.title}</div>
      <div>{props.movie.release_date}</div>
      <div>
        {props.movie.genres.map((genre, index) => (
          <div key={index} aria-label={genre}>
            <div>{genre}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieTile;
