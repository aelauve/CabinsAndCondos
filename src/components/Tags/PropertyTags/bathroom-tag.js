import React from 'react'

import PropertyTag from './property-tag'
import bath from "../../../images/icons/bath.png"

function BathroomTag({ numBathrooms }) {
  return (
    <>
      <PropertyTag 
      iconSrc={bath} 
      alt="Bathroom Icon" 
      tagText={`${numBathrooms} Baths`}
      />
    </>
  )
}

export default BathroomTag