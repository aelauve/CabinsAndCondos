import React from 'react'
import "../styles/pages/About.css"

import TableDatePicker from '../components/table-date-picker'

function About() {
  return (
    <>
        <main className="main-about">
              <div className="image-collage-wrapper">

                <div className="about-featured-image-container">
                  <div className="featured-image-wrapper">
                    <img src="" alt="" />
                  </div>
                </div>

                <div className="about-addtl-image-container">
                  <div className="addtl-image-horizontal-flex">
                    <div className="addtl-image-horizontal-wrapper">
                      <img src="" alt="" />
                    </div>
                    <div className="addtl-image-vertical-flex">
                      <div className="addtl-image-vert-wrapper">
                        <img src="" alt="" />
                      </div>
                      <div className="addtl-image-vert-wrapper">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="about-content-wrapper">
                <h1>Welcome to Cabins &amp; Condos!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <TableDatePicker />
        </main>
    </>
  )
}

export default About