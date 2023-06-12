import React from "react";
import "../../styles/components/SearchBar.css"

import InputFieldDate from "./input-field-date.js";
import TableDatePicker from "../table-date-picker";
import InputFieldSelect from "./input-field-select.js";
import SearchButton from "../Buttons/search-button.js";

function SearchBar({ withButton, searchBarStyle, searchFieldStyle }) {

  if (withButton) {
    return (
      <div className={`search-bar ${searchBarStyle}`}>
        <InputFieldSelect />
        <TableDatePicker />
        {/* <InputFieldDate fieldText="Check-In"/>
        <InputFieldDate fieldText="Check-Out"/> */}
        <InputFieldSelect />
        <SearchButton buttonLabel="Search"/>
      </div>
    );
  } else {
    return (
      <div className={`search-bar ${searchBarStyle}`}>
        <InputFieldSelect />
        <InputFieldDate fieldText="Check-In"/>
        <InputFieldDate fieldText="Check-Out"/>
        <InputFieldSelect />
      </div>
    );
  }
}

export default SearchBar;
