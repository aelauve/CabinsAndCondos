import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/components/SearchBar.css"

function SearchButton() {

  const navigate = useNavigate();

  function handleSearch() {
    console.log("Searching!");
    navigate(`/properties`);
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
