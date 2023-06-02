import React from 'react'
import Header from "../components/Header/header.js";
import "../styles/Properties.css"

import PropertyCard from '../components/Properties/PropertyCard/property-card.js';
import PropertyFilter from '../components/Properties/PropertyFilter/property-filter.js';
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
                <div className="property-flexbox">
                    <PropertyCard 
                    title="West Pelican" 
                    imgSource={westPelican}
                    location="Destin, FL"
                    price="500"
                    />
                    <PropertyCard 
                    title="Sunny Days" 
                    imgSource={sunnyDays}
                    location="Destin, FL"
                    price="425"
                    />
                </div>
                <div className="property-flexbox">
                    <PropertyCard 
                    title="All Knotty" 
                    imgSource={allKnotty}
                    location="Gatlinburg, TN"
                    price="375"
                    />
                    <PropertyCard 
                    title="Log Cabin" 
                    imgSource={logCabin}
                    location="Gatlinburg, TN"
                    price="350"
                    />
                </div>
            </section>
        </main>
    </>
  )
}

export default Properties