import React from 'react'
import "../../../styles/PropertyCard.css"

import GuestTag from '../PropertyTags/guest-tag.js'
import BedroomTag from '../PropertyTags/bedroom-tag'
import BathroomTag from '../PropertyTags/bathroom-tag'

function PropertyCard({ title, imgSource, price }) {
  return (
    <div className="card-container">
        <div className="image-container">
            <img src={imgSource} alt="Property Image" />
        </div>
        <div className="details-container">
            <div className="text-container">
                <h1>{title}</h1>
                <div className="pricing-container">
                    <h1 className="price-h1">${price}</h1>
                    <h2> / night</h2>
                </div>
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
        </div>
        {/* <div className="button-container">
            <DetailsButton label="Details"/>
            <DetailsButton label="Book Now"/>
        </div> */}
    </div>
  )
}

export default PropertyCard