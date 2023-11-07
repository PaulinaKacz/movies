// @ts-nocheck
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import AddMovieForm from "../components/MovieForm/AddMovieForm/AddMovieForm";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

const handleSubmit = jest.fn();

describe("Test <AddMovieForm />", () => {
  it("Test that after a click event on a submit button component calls onSubmit callback", async () => {
    let clickedButton = "SUBMIT";

    const emptyFormModel = (props) => ({
      id: "",
      title: "",
      poster_path: "",
      genres: [],
      overview: "",
      runtime: "",
      vote_average: "",
      release_date: "",
    });

    const title = "ADD MOVIE";

    render(
      <AddMovieForm
        initialData={emptyFormModel}
        title={title}
        handleSubmit={handleSubmit}
      />
    );

    const submitButton = screen.getByText(clickedButton);

    fireEvent.click(submitButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
  });

  it("Test that after a click event on a submit button editFormComponent calls onSubmit callback", async () => {
    let clickedButton = "SUBMIT";

    const exampleFormModel = (props) => ({
      id: 399055,
      title: "The Shape of Water",
      poster_path:
        "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
      genres: ["Drama", "Fantasy", "Romance"],
      overview:
        "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
      runtime: 1235,
      vote_average: 7.3,
      release_date: "2017-12-01",
    });

    const title = "Edit movie";

    render(
      <AddMovieForm
        initialData={exampleFormModel}
        title={title}
        handleSubmit={handleSubmit}
      />
    );
    const submitButton = screen.getByText(clickedButton);
    fireEvent.click(submitButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
  });
});
