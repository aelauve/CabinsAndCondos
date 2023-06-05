import React from "react";
import "../../styles/components/Inputs.css"

function InputFieldText({ label }) {
  return (
    <>
      <input
        type="text"
        className="contact-inputs"
        id="input-field-text"
        name="name-input"
        placeholder={label}
        required>
      </input>
    </>
  )
}

export default InputFieldText;
