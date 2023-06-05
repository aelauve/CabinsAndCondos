import React from 'react'
import "../styles/pages/Properties.css"

import PropertyCard from '../components/Properties/PropertyCard/property-card.js';
import SearchBar from "../components/SearchBar/search-bar.js";
import ViewSelector from '../components/Properties/PropertyFilter/SelectionToggle/view-selector';

import westPelican from "../images/beach4.jpeg";
import allKnotty from "../images/cabin1.jpeg";
import sunnyDays from "../images/beach3.jpeg";
import logCabin from "../images/cabin4.jpeg";

function Properties() {

    const bgColor_water=`#678793`;
    const bgColor_mountain="rgba(89, 94, 33, 1)";

  return (
    <main className="main-properties">
        <section className="properties-filter-container">
            <SearchBar 
                withButton={true}
                searchBarStyle="search-bar-properties"/>
            <ViewSelector />
        </section>
            <div className="property-flexbox">
                <PropertyCard 
                title="West Pelican" 
                imgSource={westPelican}
                location="Destin, FL"
                price="500"
                bgColor={bgColor_water}
                />
                <PropertyCard 
                title="Sunny Days" 
                imgSource={sunnyDays}
                location="Destin, FL"
                price="425"
                bgColor={bgColor_water}
                />
            </div>
            <div className="property-flexbox">
                <PropertyCard 
                title="All Knotty" 
                imgSource={allKnotty}
                location="Gatlinburg, TN"
                price="375"
                bgColor={bgColor_mountain}
                />
                <PropertyCard 
                title="Log Cabin" 
                imgSource={logCabin}
                location="Gatlinburg, TN"
                price="350"
                bgColor={bgColor_mountain}
                />
            </div>
    </main>
  )
}

export default Properties