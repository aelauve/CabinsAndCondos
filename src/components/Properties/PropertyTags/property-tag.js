import React from 'react'

function PropertyTag({ iconSrc, iconAlt, tagText }) {
  return (
    <div className="property-tag">
        <div className="tag-image-container">
            <img src={iconSrc} alt={iconAlt} />
        </div>
        {tagText}
    </div>
  )
}

export default PropertyTag