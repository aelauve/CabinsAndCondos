import React from 'react'
import SelectionToggle from './selection-toggle'

function LocationSelector() {

    const options = [
        {
            value: "beach",
            label: "Beach",
            id: "beach"
        },
        {
            value: "mountains",
            label: "Mountains",
            id: "mountains"
        },
        {
            value: "all",
            label: "All",
            id: "all"
        }
      ]
    
      return (
        <>
            <SelectionToggle options={options} />
        </>
      )
}

export default LocationSelector