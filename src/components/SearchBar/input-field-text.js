import React from "react";
import "../../styles/SearchBar.css"

function InputFieldText({ label }) {
  return (
    <>
      <input
        type="text"
        id="input-field-text"
        name="name-input"
        placeholder={label}
        required>
      </input>
    </>
  )
}

export default InputFieldText;
