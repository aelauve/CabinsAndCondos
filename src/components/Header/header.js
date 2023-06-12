import React from 'react'
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/properties">Properties</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
        <div className="border-container">
        </div>
    </header>
  )
}

export default Header