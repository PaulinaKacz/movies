import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieTile from "components/Movie/MovieTile";

describe("Test <MovieTile />", () => {
  const handleOnSelectMovie = jest.fn();

  it("Test that component select movie passed in props", async () => {
    const selectedMovie = {
      image: "killBill.png",
      releaseYear: "1994",
      title: "Kill Bill",
      genres: ["Oscar winning Movie"],
    };

    render(<MovieTile movie={selectedMovie} />);
    expect(screen.getByText(selectedMovie.title)).toBeTruthy();
  });

  it("Test that after a click event on a movie component calls onChange callback", async () => {
    let selectedMovie = {
      image: "inception.png",
      releaseYear: "2003",
      title: "Inception",
      genres: ["Action & Adventure"],
    };

    render(
      <MovieTile movie={selectedMovie} selectMovie={handleOnSelectMovie} />
    );

    fireEvent.click(screen.getByLabelText(selectedMovie.title));
    expect(handleOnSelectMovie).toHaveBeenCalled();
  });
});
