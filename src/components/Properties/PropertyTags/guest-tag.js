import React from 'react'
import "../../../styles/PropertyCard.css"

import PropertyTag from './property-tag'
import guest from "../../../images/icons/guest.png"

function GuestTag({ numGuests }) {
  return (
    <>
      <PropertyTag 
      iconSrc={guest} 
      alt="Guest Icon" 
      tagText={`${numGuests} Guests`}
      />
    </>
  )
}

export default GuestTag