// @ts-nocheck
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import AddMovieForm from "../components/MovieForm/AddMovieForm/AddMovieForm";
import { render, fireEvent } from "@testing-library/react";

const handleSubmit = jest.fn();

describe("Test <AddMovieDelete />", () => {
  it("Test that after a click event on a submit button component calls onSubmit callback", async () => {
    let clickedButton = "SUBMIT";

    const formModel = () => ({
      title: "",
      movieUrl: "",
      genre: [],
      overview: "",
      runtime: "",
      vote_average: "",
      releaseDate: "",
    });

    const title = "Add Movie";

    const { getByText } = await render(
      <AddMovieForm
        initialData={formModel}
        title={title}
        handleSubmit={handleSubmit}
      />
    );
    const submitButton = getByText(clickedButton);
    const titleHeader = getByText(title);

    expect(submitButton).toBeDefined();
    expect(titleHeader).toBeDefined();

    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
