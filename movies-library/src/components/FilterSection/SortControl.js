import React from "react";

function SortControl(props) {
  return (
    <div
      className="m-filter__sortControl"
      data-testid="genreSelector-container"
    >
      <div className="m-filter__sortControl__label">SORT BY</div>
      <div className="custom-select">
        <select
          data-testid="sort-selector"
          className="custom-select__selector "
          value={props.sortBy}
          onChange={(e) => props.changeSortOption(e.target.value)}
        >
          <option
            data-testid="sort-selector-option"
            aria-label="RELEASE DATE"
            value="RELEASE DATE"
          >
            RELEASE DATE
          </option>
          <option
            data-testid="sort-selector-option"
            aria-label="TITLE"
            value="TITLE"
          >
            TITLE
          </option>
        </select>
      </div>
    </div>
  );
}

export default SortControl;
