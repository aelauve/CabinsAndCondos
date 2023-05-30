import React, { useState } from 'react'
import "../../../../styles/SelectionToggle.css"

function SelectionToggle({ options }) {

    const [formInputs, setFormInputs] = useState(options)

    let handleChange = (i, e) => {
        let newFormValues = [...formInputs];
        newFormValues[i][e.target.name] = e.target.value;
        setFormInputs(newFormValues);
      }
    
    let addFormFields = () => {
        setFormInputs([...formInputs, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formInputs];
        newFormValues.splice(i, 1);
        setFormInputs(newFormValues)
    }

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