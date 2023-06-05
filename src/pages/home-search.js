import React, { useState, useEffect } from "react";
import "../styles/pages/HomeSearch.css";

import img1 from "../images/beach3.jpeg";
import img2 from "../images/cabin1.jpeg";
import img3 from "../images/beach4.jpeg";
import img4 from "../images/cabin5.jpeg";
import img5 from "../images/beach5.jpeg";
import img6 from "../images/cabin3.jpeg";

import SearchBar from "../components/SearchBar/search-bar.js";

const imgs = [img1, img2, img3, img4, img5, img6];

function Homepage() {
  const [index, advanceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      advanceIndex((i) => {
        return i === imgs.length - 1 ? 0 : i + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <main
        className="main-home"
        style={{backgroundImage: `url(${imgs[index]}`}}>
        
        <div className="homepage-content-container">
            <h1 className="homepage-title"> Explore with us. Relax with us. </h1>
            <SearchBar 
              withButton={true}
              searchBarStyle="search-bar-home"
            />
        </div>

      </main>

{/*       
      <div 
        className="bg-base" 
        style={{ 
            backgroundImage: 
                `url(${imgs[index]}`
                }}>
        <Header />
        <div className="homepage-content-container">
            <h1 className="homepage-title"> Explore with us. Relax with us. </h1>
            <SearchBar />
        </div>
    </div> */}
    </>
  );
}

export default Homepage;
