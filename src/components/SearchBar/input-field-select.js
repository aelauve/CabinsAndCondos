import React from "react";
import "../../styles/components/SearchBar.css"

function InputFieldSelect({ name }) {

  return (
    <div className="search-field">
      <select name={name} id={name} className="search-field-select search-bar-font-style">
        <option value="All Locations">All Locations</option>
        <option value="Gatlinburg, TN">Gatlinburg, TN</option>
        <option value="Fort Walton Beach, FL">Fort Walton Beach, FL</option>
      </select>
    </div>
  )
}

export default InputFieldSelect;
