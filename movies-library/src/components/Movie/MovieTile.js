"use client";

import EditMovieButton from "../MovieForm/AddMovieForm/EditMovieButton";
import React from "react";
import { useRouter } from "next/navigation";

function MovieTile(props) {
  const router = useRouter();
  return (
    <div aria-label={props.movie.title} data-testid="movie-tile">
      <EditMovieButton title={props.movie.title} />
      <img
        className="m-movie__tile__img"
        src={props.movie.poster_path}
        alt={props.movie.title}
        onClick={() => router.push(`/${props.movie.id}`)}
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
