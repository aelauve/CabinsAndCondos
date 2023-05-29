import React from 'react'
import "../../styles/PropertyCard.css"

import PropertyTag from './property-tag'

function GuestTag({ numGuests }) {
  return (
    <>
      <PropertyTag 
      iconSrc="" 
      alt="Guest Icon" 
      tagText={`${numGuests} Guests`}
      />
    </>
  )
}

export default GuestTag