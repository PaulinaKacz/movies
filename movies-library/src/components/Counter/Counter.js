import React, { useState } from "react";
import Button from "../Commons/Button";

function Counter({ initialCount }) {
  const [counter, setCounter] = useState(initialCount);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="m-counter">
      <div className="m-counter__title">{counter}</div>
      <div className="m-counter__buttons">
        <Button title={"Increment"} clickAction={increment} />
        <Button title={"Decrement"} clickAction={decrement} />
      </div>
    </div>
  );
}

export default Counter;
