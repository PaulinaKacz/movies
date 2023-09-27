// @ts-nocheck
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "components/FilterSection/SortControl";

describe("Test <SortControl />", () => {
  it("Test that component passed sort option in props", async () => {
    const selectedSortOption = "RELEASE DATE";

    render(<SortControl sortBy={selectedSortOption} />);
    expect(screen.getByText(selectedSortOption)).toBeTruthy();
  });

  test("Simulates selection", () => {
    let selectedSortOption = "RELEASE DATE";
    const { getByTestId, getAllByTestId } = render(
      <SortControl sortBy={selectedSortOption} />
    );

    fireEvent.click(getByTestId("sort-selector"), {
      target: { value: "RELEASE DATE" },
    });

    let options = getAllByTestId("sort-selector-option");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
  });
});
