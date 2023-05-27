import React from "react";
import "../../styles/SearchBar.css"

function SearchFieldSelect() {
  return (
    <div className="search-field">
      <select name="cars" id="cars" className="search-field-select search-bar-font-style">
        <option value="All Locations">All Locations</option>
        <option value="Gatlinburg, TN">Gatlinburg, TN</option>
        <option value="Fort Walton Beach, FL">Fort Walton Beach, FL</option>
      </select>
    </div>
  )
}

export default SearchFieldSelect;
