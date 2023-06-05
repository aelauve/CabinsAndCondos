import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../styles/components/Header.css"

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
                <NavLink to="/">Search</NavLink>
                <NavLink to="/properties">Properties</NavLink>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
        <div className="border-container">
        </div>
    </header>
  )
}

export default Header