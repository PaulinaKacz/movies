import React, { useState } from "react";

function SearchForm(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.searchMovies(searchQuery);
  };

  return (
    <form
      className="m-search__form"
      onSubmit={handleFormSubmit}
      aria-label="search-form"
    >
      <input
        className="m-search__input"
        type="text"
        id="search"
        placeholder="What do you want to watch?"
        value={searchQuery}
        onChange={handleChange}
        aria-label="search-input"
        name="searchInput"
      />
      <button
        className="m-search__button"
        type="submit"
        aria-label="search-button"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
