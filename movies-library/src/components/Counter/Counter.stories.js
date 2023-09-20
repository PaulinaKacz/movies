/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Counter from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
};

export const BasicCounter = () => <Counter initialCount={1} />;

export const CounterWithHooks = () => {
  // Sets the hooks for both the label and primary props
  // const [value, setValue] = useState('Secondary');
  const [counter, setCounter] = useState(1);

  // Sets a click handler to change the label's value
  // const handleOnChange = () => {
  //   if (!isPrimary) {
  //     setIsPrimary(true);
  //     setValue('Primary');
  //   }
  // };
  return <Counter initialCount={3} />;
};
