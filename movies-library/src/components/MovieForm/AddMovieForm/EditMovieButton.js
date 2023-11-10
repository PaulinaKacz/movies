"use client";
import Button from "../../Commons/Button";
// import { useNavigate } from "react-router-dom";
import React from "react";

function EditMovieButton(props) {
  //   const navigate = useNavigate();
  const handleButtonClick = () => {
    // navigate(`${props.title}/edit`);
  };

  return <Button title={"EDIT MOVIE"} clickAction={handleButtonClick} />;
}
export default EditMovieButton;
