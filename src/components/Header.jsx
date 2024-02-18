import React from "react";
import Navigation from "./Navigation";
import "../styles/Header.css"

const Header = () => {
    return (
        <div className="Header">
            <div className="logoHeader">Lexi Menendez</div>
            <Navigation />
        </div>
    )
}

export default Header