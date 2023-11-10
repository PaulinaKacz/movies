"use client";
import Button from "../../../components/Commons/Button";
import React from "react";
import Link from "next/link";

function AddMovieButton() {
  return (
    <Link href="/new">
      <Button className="m-search__button--add" title={"+ ADD MOVIE"} />
    </Link>
  );
}
export default AddMovieButton;
