import React, { useState } from 'react'
import "../../../../styles/components/SelectionToggle.css"

function SelectionToggle({ options }) {

    const [formInputs, setFormInputs] = useState(options)

    const state = {
      toggle: false
    };
  
      function toggleStateOnClick() {
        //   setState({
        //       toggle: !state.toggle
        //   });
      };
  
    return (
      <>
          <form className="switch-field">
            {formInputs.map((element, index) => (
                <div className="form-inline" key={index}>
                    <input
                        type="radio"
                        id="switch_left"
                        name="switchToggle"
                        value={element.value}
                        onChange={toggleStateOnClick}
                        checked={!state.toggle}
                    />
                    <label htmlFor="switch_left">
                        {element.label}
                    </label>
                </div>
                
            ))}
            </form>
      </>
    )
  }

export default SelectionToggle