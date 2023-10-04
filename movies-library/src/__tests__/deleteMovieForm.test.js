// @ts-nocheck
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import DeleteMovieForm from "../components/MovieForm/DeleteMovieForm/DeleteMovieForm";
import { render, fireEvent } from "@testing-library/react";

const handleConfirm = jest.fn();

describe("Test <DeleteMovieForm />", () => {
  it("Test that after a click event on a delete button component calls onChange callback", async () => {
    let clickedButton = "CONFIRM";

    const { getByText } = await render(
      <DeleteMovieForm onConfirm={handleConfirm} />
    );
    const deleteButton = getByText(clickedButton);
    expect(deleteButton).toBeDefined();

    fireEvent.click(deleteButton);
    expect(handleConfirm).toHaveBeenCalled();
  });
});
