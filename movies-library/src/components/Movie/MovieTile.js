import React from "react";

function MovieTile(props) {
  return (
    <div
      aria-label={props.movie.title}
      onClick={() => props.selectMovie(props.movie)}
    >
      <img
        className="m-movie__tile__img"
        src={process.env.PUBLIC_URL + `/${props.movie.image}`}
        alt="logo"
      />
      <div>{props.movie.title}</div>
      <div>{props.movie.releaseYear}</div>
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
