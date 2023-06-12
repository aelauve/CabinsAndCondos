import React from "react";
import "../../styles/components/SearchBar.css"

function SearchButton() {

  function handleSearch() {
    console.log("Searching!");
  }

  return (
        <button 
          className="search-bar-font-style search-field base-button-style search-button"
          onClick={handleSearch}>
            Search
        </button>
  )
}

export default SearchButton;
