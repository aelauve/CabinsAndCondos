import React from 'react'
import "../../styles/Properties.css"

import FilterTitle from '../Properties/filter-title'

function PropertyFilter() {
  return (
    <div className="filter-container">
        <div className="property-type-filter">
            <FilterTitle title="Location" />
        </div>
        <div className="view-type-filter">
            <FilterTitle title="View" />

        </div>
    </div>
  )
}

export default PropertyFilter