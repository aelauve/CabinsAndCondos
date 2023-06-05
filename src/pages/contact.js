import React from 'react'
import InputFieldText from '../components/SearchBar/input-field-text';
import "../styles/pages/Contact.css"
import "../styles/components/Inputs.css"

import SubmitButton from '../components/Buttons/submit-button';

function Contact() {
  return (
        <main className="main-contact">
            <div className="contact-main-content">

              <div className="form-container">

                <h1>Let's get in touch! Test</h1>

                <div className="contact-input-container">

                  <div className="contact-input-fields-container">
                    <InputFieldText label="First Name"/>
                    <InputFieldText label="Last Name"/>
                  </div>

                  <div className="contact-input-fields-container">
                    <InputFieldText label="Email"/>
                    <InputFieldText label="Phone"/>
                  </div>

                </div>

                <textarea 
                    className="contact-inputs"
                    id="contact-message" 
                    name="contact-message" 
                    rows="6" 
                    cols="50"
                    placeholder="Message">

                </textarea>

                <SubmitButton />

                <div className="contact-details-container">

                </div>

              </div>

            </div>
        </main>
  )
}

export default Contact