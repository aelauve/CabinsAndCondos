import React from 'react'
import Tag from '../tag'
import "../../../styles/components/Tags.css"

function PropertyTag({ iconSrc, iconAlt, tagText }) {
  return (
    <Tag 
      className="property-card-tag"
      iconSrc={iconSrc}
      iconAlt={iconAlt}
      tagText={tagText} />
  )
}

export default PropertyTag