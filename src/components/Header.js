import React from "react";
import Navigation from './Navigation'
import './styles/Header.css'

function Header() {
    return (
        <nav className="Header">
            <h1>Nolan Frame</h1>
            <Navigation/>
        </nav>
    )
}

export default Header;