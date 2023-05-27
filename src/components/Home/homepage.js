import React, { useState, useEffect } from "react";
import "../../styles/Home.css";

import img1 from "../../images/beach1.png";
import img2 from "../../images/cabin1.jpeg";
import img3 from "../../images/beach2.png";
import img4 from "../../images/cabin2.jpeg";

import SearchBar from "../SearchBar/search-bar.js";

const imgs = [img1, img2, img3, img4];

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
    <div className="bg-base" style={{ backgroundImage: `url(${imgs[index]}`, opacity: 1}}>
        <div className="homepage-content-container">
            <h1 className="homepage-title"> Explore with us. Relax with us. </h1>
            <SearchBar />
        </div>
    </div>
  );
}

export default Homepage;
