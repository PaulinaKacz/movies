import Button from "components/Commons/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

function AddMovieButton() {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate("/new");

  return (
    <Button
      className="m-search__button--add"
      title={"+ ADD MOVIE"}
      clickAction={handleButtonClick}
    />
  );
}
export default AddMovieButton;
