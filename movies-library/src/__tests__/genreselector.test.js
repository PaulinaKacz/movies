import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GenreSelector from "components/FilterSection/GenreSelector";

describe("Test <GenreSelector />", () => {
  const setup = () => {
    render(<GenreSelector genres={genres} />);
  };

  const handleOnChangeGenre = jest.fn();
  const genres = [
    { name: "ALL" },
    { name: "DOCUMENTARY" },
    { name: "COMEDY" },
    { name: "HORROR" },
    { name: "CRIME" },
  ];

  test.each(genres)(
    "test that component renders all genres passed in props",
    (genre) => {
      setup();
      expect(screen.getByText(genre.name)).toBeTruthy();
    }
  );

  it("Test that component highlights a selected genre passed in props", async () => {
    const selectedGenre = "DOCUMENTARY";

    render(<GenreSelector genres={genres} selectedGenre={selectedGenre} />);

    const box = screen.getByLabelText(selectedGenre);

    expect(box).toHaveClass("m-genreSelector__item--selected");
  });

  it("Test that after a click event on a genre button component calls onChange callback", async () => {
    let initialySelectedGenre = "DOCUMENTARY";
    let clickedGenre = "COMEDY";

    render(
      <GenreSelector
        genres={genres}
        selectedGenre={initialySelectedGenre}
        selectGenre={handleOnChangeGenre}
      />
    );
    fireEvent.click(screen.getByLabelText(clickedGenre));
    expect(handleOnChangeGenre).toHaveBeenCalled();
  });
});
