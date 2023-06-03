import React from 'react'
import "../../styles/components/Tags.css"

function Tag({ iconSrc, iconAlt, tagText, className }) {
  return (
    <div className={`tag ${className}`}>
        <div className="tag-image-container">
            <img src={iconSrc} alt={iconAlt} />
        </div>
        {tagText}
    </div>
  )
}

export default Tag