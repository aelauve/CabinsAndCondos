import React from 'react'
import "../../../styles/components/PropertyCard.css"

import GuestTag from '../../Tags/PropertyTags/guest-tag.js'
import BedroomTag from '../../Tags/PropertyTags/bedroom-tag'
import BathroomTag from '../../Tags/PropertyTags/bathroom-tag'

function PropertyCard({ title, imgSource, location, price, bgColor }) {
  return (
    <div 
        className="card-container"
        style={{backgroundColor: {bgColor}}}>
        <div className="image-container">
            <img src={imgSource} alt="Property" />
        </div>
        <div className="details-container">
            <div className="text-container">
                <div className="titles-container">
                    <a href="/details"><h1>{title}</h1></a>
                    <h2>{location}</h2>
                </div>
                
                <div className="pricing-container">
                    <h1>${price}</h1>
                    <h2> / night</h2>
                </div>
            </div>
            <div className="property-tags-container">
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
    </div>
  )
}

export default PropertyCard