import React from "react";
import "../../styles/SearchBar.css"

function SearchFieldDate({ fieldText }) {
  return (
    <div className="search-field">
      <div className="search-field-text search-bar-font-style">
        {fieldText}
      </div>
    </div>
  )
}

export default SearchFieldDate;
