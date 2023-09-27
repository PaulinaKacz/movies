import { useMemo, useState } from "react";
import React from "react";
import InputSelect from "./GenreSelectorInput/GenreSelectorInput";

const GenreSelect = (props) => {
  const [value, setValue] = useState([]);

  const genresOptions = useMemo(
    () => props.genres.map((genre) => genre.name),
    [props.genres]
  );

  const onChange = (v) => {
    setValue(v);
    props.onSelect(
      props.genres.filter((genre) => v.includes(props.genre.name))
    );
  };

  return (
    <InputSelect
      className={props.className}
      name="genre"
      options={genresOptions}
      value={value}
      onChange={onChange}
    />
  );
};

export default GenreSelect;
