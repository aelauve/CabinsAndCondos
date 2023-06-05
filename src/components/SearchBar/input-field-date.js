import React from "react";
import "../../styles/components/SearchBar.css"

function InputFieldDate({ fieldText }) {
  return (
    <div className="search-field">
      <div className="search-field-text search-bar-font-style">
        {fieldText}
      </div>
    </div>
  )
}

export default InputFieldDate;
