import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "components/Movie/MovieDetails";

describe("Test <MovieDetails />", () => {
  it("Test that component display movie passed in props", async () => {
    const selectedMovie = {
      image: "killBill.png",
      releaseYear: "1994",
      title: "Kill Bill",
      genres: ["Oscar winning Movie"],
    };

    render(<MovieDetails selectedMovie={selectedMovie} />);
    expect(screen.getByText(selectedMovie.title)).toBeTruthy();
  });
});
