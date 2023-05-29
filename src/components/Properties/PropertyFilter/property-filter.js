import React from 'react'
import "../../../styles/Properties.css"

import FilterTitle from './filter-title'
import ViewSelector from './view-selector';

function PropertyFilter() {

  const options = [
    { 
      label: "List",
      value: "list", 
      testID: "list-option", 
      accessibilityLabel: "List View"
    },
    { 
      label: "Map",
      value: "map", 
      testID: "map-option", 
      accessibilityLabel: "Map View"
    },
  ];

  return (
    <div className="filter-container">
        <div className="property-type-filter">
            <FilterTitle title="Location" />
        </div>
        <div className="view-type-filter">
            <FilterTitle title="View" />
            <ViewSelector />
        </div>
    </div>
  )
}

export default PropertyFilter