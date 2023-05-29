import React from 'react'
import Header from "../components/Header/header.js";
import "../styles/Properties.css"

import PropertyCard from '../components/PropertyCard/property-card.js';
import PropertyFilter from '../components/PropertyCard/property-filter.js';
import LocationTitle from '../components/Properties/location-title.js';

import img1 from "../images/beach5.jpeg";

function Properties() {
  return (
    <>
        <main>
            <Header />
            <section className="main-content">
                <PropertyFilter />
                <LocationTitle location="All Locations" />
                <div className="property-flexbox">
                    <PropertyCard 
                    title="West Pelican" 
                    imgSource={img1}
                    location="Destin, Florida"
                    />
                    <PropertyCard 
                    title="West Pelican" 
                    imgSource={img1}
                    location="Destin, Florida"
                    />
                    <PropertyCard 
                    title="West Pelican" 
                    imgSource={img1}
                    location="Destin, Florida"
                    />
                    <PropertyCard 
                    title="West Pelican" 
                    imgSource={img1}
                    location="Destin, Florida"
                    />
                </div>
            </section>
        </main>
    </>
  )
}

export default Properties