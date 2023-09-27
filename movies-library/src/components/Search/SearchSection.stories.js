/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import SearchForm from "./SearchForm";

export default {
  title: "Example/Search",
  component: SearchForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //   tags: ["autodocs"],
  // parameters: {
  //   // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: "fullscreen",
  // },
};

// export const CounterEl = {s
//   args: {
//     initialCount: 1,
//   },
// };

// export const Basic = () => <Counter initialCount={1} />;
// export const Basic2 = () => <Counter initialCount={3} />;

function Story(args) {
  return <SearchForm {...args} />;
  //   return <Counter {...args} />;
}
export const Default2 = Story.bind({});

// export const Inverted = Story.bind({});
// Inverted.args = {
//   initialCount: 1,
// };
