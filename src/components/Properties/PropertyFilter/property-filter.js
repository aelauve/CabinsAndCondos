import React from 'react'
import "../../../styles/pages/Properties.css"

import FilterTitle from './filter-title'
import ViewSelector from './SelectionToggle/view-selector';
import LocationSelector from './SelectionToggle/location-selector';

import locationIcon from "../../../images/icons/location.png"

function PropertyFilter() {

  return (
    <div className="filter-container">
        <div className="property-type-filter">
            <LocationSelector />
        </div>
        <div className="view-type-filter">
            <ViewSelector />
        </div>
    </div>
  )
}

export default PropertyFilter