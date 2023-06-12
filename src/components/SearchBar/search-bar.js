import React from "react";
import "../../styles/components/SearchBar.css"

import TableDatePicker from "../table-date-picker";
import InputFieldSelect from "./input-field-select.js";
import SearchButton from "../Buttons/search-button.js";

function SearchBar({ withButton, searchBarStyle, searchFieldStyle }) {

  const locationOptions = {
    "All Locations": "All Locations",
    "Gatlinburg, TN": "Gatlinburg, TN",
    "Fort Walton Beach, FL": "Fort Walton Beach, FL"
  }

  const guestOptions = {
    1: "1 Guest",
    2: "2 Guest",
    3: "3 Guest",
    4: "4 Guest",
    5: "5 Guest",
    6: "6 Guest",
    7: "7 Guest",
    8: "8 Guest"
  }

  if (withButton) {
    return (
      <div className={`search-bar ${searchBarStyle}`}>
        <InputFieldSelect 
          name="location"
          selectOptions={locationOptions}/>
        <TableDatePicker />
        <InputFieldSelect 
          name="guests"
          selectOptions={guestOptions}/>
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
