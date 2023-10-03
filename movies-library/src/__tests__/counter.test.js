import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "components/Counter/Counter";
import React from "react";

describe("Test <CounterApp />", () => {
  const initialValue = 1;

  test("Should show value initial is an 100 <CounterApp value={100} />", () => {
    render(<Counter initialCount={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("increment button +1", () => {
    render(<Counter initialCount={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "btn-increment" }));
    expect(screen.getByText("2")).toBeTruthy();
  });

  test("decrement button -1", () => {
    render(<Counter initialCount={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "btn-decrement" }));
    expect(screen.getByText("0")).toBeTruthy();
  });
});
