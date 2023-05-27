import React from "react";
import "../../styles/SearchBar.css"

function SearchBarButton({ buttonLabel }) {
  return (
    <div className="search-field search-bar-button-container">
        <button className="search-bar-font-style search-bar-button">{buttonLabel}</button>
    </div>
  )
}

export default SearchBarButton;
