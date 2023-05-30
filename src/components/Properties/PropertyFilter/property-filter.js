import React from 'react'
import "../../../styles/Properties.css"

import FilterTitle from './filter-title'
import ViewSelector from './SelectionToggle/view-selector';
import LocationSelector from './SelectionToggle/location-selector';

import locationIcon from "../../../images/icons/location.png"

function PropertyFilter() {

  return (
    <div className="filter-container">
        <div className="property-type-filter">
          <div className="location-icon-wrapper">
            <img className="filter-logo" src={locationIcon} alt="Location Selection" />
          </div>
            {/* <FilterTitle title="Location" /> */}
            <LocationSelector />
        </div>
        <div className="view-type-filter">
            <FilterTitle title="View" />
            <ViewSelector />
        </div>
    </div>
  )
}

export default PropertyFilter