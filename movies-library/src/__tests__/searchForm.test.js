import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "components/Search/SearchForm";
import userEvent from "@testing-library/user-event";

describe("Test <SearchForm />", () => {
  let initialMovie;

  const setup = () => {
    render(<SearchForm initialMovie={initialMovie} />);
  };

  const handleOnSubmitMock = jest.fn();

  beforeEach(() => {
    initialMovie = "Maverick";
  });

  it("Test that component renders an input with the value equal to initial value passed in props", () => {
    setup();
    expect(
      screen.getByRole("form", {
        name: /search-form/i,
      })
    ).toHaveFormValues({
      searchInput: initialMovie,
    });
  });

  it("does not submit an empty form", () => {
    setup();
    screen.getByRole("form", { name: "search-form" }).onsubmit =
      handleOnSubmitMock;

    fireEvent.click(screen.getByRole("button"));

    expect(handleOnSubmitMock).toHaveBeenCalled();
  });

  it("Test that after typing to the input and a click event on the Submit button, the onChange prop is called with proper value", () => {
    setup();
    screen.getByRole("form", { name: "search-form" }).onsubmit =
      handleOnSubmitMock;

    fireEvent.change(
      screen.getByPlaceholderText("What do you want to watch?"),
      {
        target: { value: "Pulp fiction" },
      }
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleOnSubmitMock).toHaveBeenCalled();
  });

  it("Test that after typing to the input and pressing Enter key, the onChange prop is called with proper value", async () => {
    setup();
    screen.getByRole("form", { name: "search-form" }).onsubmit =
      handleOnSubmitMock;

    const text = "hello";
    const input = screen.getByPlaceholderText("What do you want to watch?");
    await userEvent.clear(input);
    await userEvent.type(input, `${text}[Enter]`);

    expect(input).toHaveValue(text);
    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
});
