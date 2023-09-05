import React, { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("Maverick");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchTerm}...`);
  };

  return (
    <form className="m-search__form" onSubmit={handleSearch}>
      <input
        className="m-search__input"
        type="text"
        id="search"
        placeholder="What do you want to watch?"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="m-search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
