import React from 'react'
import Header from "../components/Header/header.js";
import "../styles/Properties.css"

import PropertyCard from '../components/PropertyCard/property-card.js';
import PropertyFilter from '../components/PropertyCard/property-filter.js';
import LocationTitle from '../components/Properties/location-title.js';

import westPelican from "../images/beach4.jpeg";
import allKnotty from "../images/cabin1.jpeg";
import sunnyDays from "../images/beach3.jpeg";
import logCabin from "../images/cabin4.jpeg";

function Properties() {
  return (
    <>
        <main>
            <Header />
            <section className="main-content">
                <PropertyFilter />
                <LocationTitle location="Destin, FL" />
                <div className="property-flexbox">
                    <PropertyCard 
                    title="West Pelican" 
                    imgSource={westPelican}
                    price="500"
                    />
                    <PropertyCard 
                    title="Sunny Days" 
                    imgSource={sunnyDays}
                    price="425"
                    />
                </div>
                <LocationTitle location="Gatlinburg, TN" />
                <div className="property-flexbox">
                    <PropertyCard 
                    title="All Knotty" 
                    imgSource={allKnotty}
                    price="375"
                    />
                    <PropertyCard 
                    title="Log Cabin" 
                    imgSource={logCabin}
                    price="350"
                    />
                </div>
            </section>
        </main>
    </>
  )
}

export default Properties