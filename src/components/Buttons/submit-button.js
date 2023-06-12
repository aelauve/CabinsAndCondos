import React from 'react';
import "../../styles/components/Buttons.css";

function SubmitButton() {
  return (
    <button 
      className="base-button-style submit-button"
      type="submit"
      form="contact-form"
      value="Submit">
        Submit
    </button>
  )
}

export default SubmitButton