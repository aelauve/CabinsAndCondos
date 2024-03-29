import React from 'react'
import SelectionToggle from './selection-toggle'

import listIcon from "../../../../images/icons/list.png"
import mapIcon from "../../../../images/icons/map.png"

function ViewSelector() {

  const options = [
	{
		value: "gridView",
		label: "Grid",
		icon: {listIcon},
		alt: "Grid View"
	},
	{
		value: "mapView",
		label: "Map",
		icon: {mapIcon},
		alt: "Map View"
	}
  ]

  return (
    <>
        <SelectionToggle options={options} />
    </>
  )
}

export default ViewSelector