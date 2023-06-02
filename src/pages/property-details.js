import React from 'react'
import Header from '../components/Header/header'
import SearchFieldSelect from "../components/SearchBar/search-field-select";
import SearchFieldDate from "../components/SearchBar/search-field-date";
import "../styles/PropertyDetails.css"

import img1 from "../images/cabin3.jpeg"
import img2 from "../images/cabin1.jpeg"
import img3 from "../images/cabin2.jpeg"
import img4 from "../images/cabin4.jpeg"
import img5 from "../images/cabin5.jpeg"
import logo from "../images/logo-combined.png"


function PropertyDetails() {
  return (
    <>
        <main>
            <Header></Header>
            <div className="details-main-content">
                <section className="property-images-display-wrapper">
                    <div className="featured-property-image-wrapper">
                        <img
                            className="feature-image"
                            src={img2}
                            alt=""
                        />
                    </div>
                    <div className="addtl-property-images-wrapper">
                        <div className="addtl-image-wrapper">
                            <img
                                className="addtl-image"
                                src={img1}
                                alt=""
                            />
                        </div>
                        
                        <div className="addtl-image-wrapper">
                            <img
                                className="addtl-image"
                                src={img3}
                                alt=""
                            />
                        </div>

                        <div className="addtl-image-wrapper">
                            <img
                                className="addtl-image"
                                src={img4}
                                alt=""
                            />
                        </div>

                        <div className="addtl-image-wrapper">
                            <img
                                className="addtl-image"
                                src={img5}
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className="info-wrapper">
                    <div className="details-container">
                        <div className="location-container">
                            <div className="location-logo-wrapper">
                                <img 
                                    className="location-logo" 
                                    src={logo} 
                                    alt="" 
                                />
                            </div>
                            <div className="title-location-details">
                                <h1>Property Title</h1>
                                <h2>Gatlinburg, TN</h2>
                            </div>
                        </div>

                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h3>Section Title 1</h3>
                        <p>
                            --- Text Here ---
                        </p>

                        <h3>Section Title 2</h3>
                        <p>
                            --- Text Here ---
                        </p>
                    </div>
                    <div className="booking-wrapper">
                        <div className="pricing-reviews-wrapper">
                            <div className="pricing-wrapper">
                                <h1 className="price-h1">$350</h1>
                                <h2 className="price-h2">/ night</h2>
                            </div>
                            <div className="reviews-wrapper">
                                Reviews
                            </div>
                        </div>
                        <div className="booking-details-wrapper">
                            <SearchFieldSelect />
                            <SearchFieldDate />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
  )
}

export default PropertyDetails