import React from 'react'
import "../../styles/Header.css"

import logo from "../../images/logo-combined.png";

function Header() {
  return (
    <header>
        <div className="header-flex-container">
            <div className="logo-container">
                <img
                    src={logo}
                    alt ="Logo"
                    className="logo"
                ></img>
            </div>
            <nav>
                <a href="#">Search</a>
                <a href="#">Properties</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </nav>
        </div>
        <div className="border-container">
        </div>
    </header>
  )
}

export default Header