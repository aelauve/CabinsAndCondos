import React from 'react'
import "../../styles/PropertyCard.css"

import DetailsButton from '../Properties/details-button'
import GuestTag from '../Properties/guest-tag'
import BedroomTag from '../Properties/bedroom-tag'
import BathroomTag from '../Properties/bathroom-tag'

function PropertyCard({ title, imgSource, location }) {
  return (
    <div className="card-container">
        <h1>{title}</h1>
        <div className="image-container">
            <img src={imgSource} alt="Property Image" />
        </div>
        <div className="details-container">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <div className="tags-container">
            <GuestTag
            numGuests="6"
            />
            <BedroomTag
            numBedrooms="4"
            />
            <BathroomTag
            numBathrooms="3"
            />
        </div>
        <div className="button-container">
            <DetailsButton label="Details"/>
            <DetailsButton label="Book Now"/>
        </div>
    </div>
  )
}

export default PropertyCard