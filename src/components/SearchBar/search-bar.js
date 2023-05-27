import React from "react";
import "../../styles/SearchBar.css"

import SearchFieldDate from "./search-field-date.js";
import SearchFieldSelect from "./search-field-select.js";
import SearchBarButton from "./search-bar-button.js";

const locationDropdown = {
    labels: [],
    values: []
}

const guestDropdown = {
    labels: [],
    values: []
}

function SearchBar() {
  return (
    <div className='search-bar'>
        <SearchFieldSelect />
        <SearchFieldDate fieldText="Check-In"/>
        <SearchFieldDate fieldText="Check-Out"/>
        <SearchFieldSelect />
        <SearchBarButton buttonLabel="Search"/>
    </div>
  );
}

export default SearchBar;
