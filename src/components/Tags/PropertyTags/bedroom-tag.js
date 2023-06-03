import React from 'react'

import PropertyTag from './property-tag'
import bed from "../../../images/icons/bed.png"

function BedroomTag({ numBedrooms }) {
  return (
    <>
      <PropertyTag 
      iconSrc={bed}
      alt="Bedroom Icon" 
      tagText={`${numBedrooms} Beds`}
      />
    </>
  )
}

export default BedroomTag