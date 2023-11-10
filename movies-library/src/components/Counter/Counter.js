"use client";
import React, { useState } from "react";
import Button from "../Commons/Button";

function Counter(props) {
  const [counter, setCounter] = useState(props.initialCount);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="m-counter">
      <div className="m-counter__title" data-testid="count">
        {counter}
      </div>
      <div className="m-counter__buttons">
        <Button
          name="btn-increment"
          title={"Increment"}
          clickAction={increment}
          testId="increment-button"
        />
        <Button
          name="btn-decrement"
          title={"Decrement"}
          clickAction={decrement}
          testId="decrement-button"
        />
      </div>
    </div>
  );
}

export default Counter;
