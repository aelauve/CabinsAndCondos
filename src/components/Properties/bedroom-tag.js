import React from 'react'

import PropertyTag from './property-tag'

function BedroomTag({ numBedrooms }) {
  return (
    <>
      <PropertyTag 
      iconSrc="" 
      alt="Bedroom Icon" 
      tagText={`${numBedrooms} Bedrooms`}
      />
    </>
  )
}

export default BedroomTag