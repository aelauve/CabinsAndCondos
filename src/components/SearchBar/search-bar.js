import React from "react";
import "../../styles/components/SearchBar.css"

import TableDatePicker from "../table-date-picker";
import InputFieldSelect from "./input-field-select.js";
import SearchButton from "../Buttons/search-button.js";

function SearchBar({ withButton, searchBarStyle, searchFieldStyle }) {

  if (withButton) {
    return (
      <div className={`search-bar ${searchBarStyle}`}>
        <InputFieldSelect 
          name="location" />
        <TableDatePicker />
        <InputFieldSelect 
          name="guests"/>
        <SearchButton buttonLabel="Search"/>
      </div>
    );
  } else {
    return (
      <div className={`search-bar ${searchBarStyle}`}>
        <InputFieldSelect />
        <TableDatePicker />
        <InputFieldSelect />
      </div>
    );
  }
}

export default SearchBar;
