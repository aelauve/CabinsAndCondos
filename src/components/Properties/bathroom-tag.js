import React from 'react'

import PropertyTag from './property-tag'

function BathroomTag({ numBathrooms }) {
  return (
    <>
      <PropertyTag 
      iconSrc="" 
      alt="Bathroom Icon" 
      tagText={`${numBathrooms} Bathrooms`}
      />
    </>
  )
}

export default BathroomTag