/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Counter from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
};

export const BasicCounter = () => <Counter initialCount={1} />;

export const Secondary = {
  args: {
    initialCount: "1",
  },
};
