import React from "react";
import "../styles/Body.css"

const Header = ({ handleButtonClick }) => {
    return (
        <div className="Header">
            <div className="logoHeader">
                <button onClick={() => handleButtonClick('Splash')}>Lexi Menendez</button>
            </div>

            <div className="nav">
                <button onClick={() => handleButtonClick('About')}>About</button>
                <button onClick={() => handleButtonClick('Resume')}>Resume</button>
                <button onClick={() => handleButtonClick('Work')}>Work</button>
                <button onClick={() => handleButtonClick('Contact')}>Contact</button>
            </div>
        </div>
    )   
}

export default Header