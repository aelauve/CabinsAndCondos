import React from 'react'
import Header from '../components/Header/header'
import InputFieldText from '../components/SearchBar/input-field-text';
import "../styles/Contact.css"

function Contact() {
  return (
    <>
        <main>
            <Header />
            <div className="contact-main-content">

              <div className="form-container">

                <h1>Get in Touch!</h1>

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
                    id="contact-message" 
                    name="contact-message" 
                    rows="6" 
                    cols="50"
                    placeholder="Message">

                </textarea>

                <button>Submit</button>

                <div className="contact-details-container">

                </div>

              </div>

            </div>
        </main>
    </>
  )
}

export default Contact