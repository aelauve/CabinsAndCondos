import React from 'react'

function PropertyTag({ iconSrc, iconAlt, tagText }) {
  return (
    <div className="property-tag">
        <img src={iconSrc} alt={iconAlt} />
        {tagText}
    </div>
  )
}

export default PropertyTag