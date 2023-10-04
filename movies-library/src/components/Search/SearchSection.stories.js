/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import SearchForm from "./SearchForm";

export default {
  title: "Example/Search",
  component: SearchForm,
};

function Story(args) {
  return <SearchForm {...args} />;
}
export const Default2 = Story.bind({});
