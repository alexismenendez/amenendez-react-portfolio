import React from "react"
import "../styles/Body.css"
import work1 from "../assets/Screenshot 2024-02-27 at 18-30-11 Petstagram(1).png"
import work2 from "../assets/Screenshot 2023-12-07 at 21-08-33 tic tac toe.png"
import work3 from "../assets/screenshot.png"
import work4 from "../assets/screenshot-2.png"
import work5 from "../assets/Screenshot 2023-12-20 at 15-58-38 Travel Buddy.png"
import work6 from "../assets/screenshot copy.png"

const Work = () => {
    return(
        <div className="work hero">
            <h2>Portfolio</h2>
            <div className="portContent">
                <div className="card">
                    <a target="_blank" href="https://github.com/hansl40721/petstagram">
                    <img src={work1}/>
                    <h3>Petstagram</h3>
                    </a>
                </div>

                <div className="card">
                    <a target="_blank" href="https://github.com/alexismenendez/tic-tac-toe-game">
                    <img src={work2}/>
                    <h3>Tic Tac Toe Game</h3>
                    </a>
                </div>

                <div className="card">
                    <a target="_blank" href="https://github.com/alexismenendez/amenendez-weather-dashboard">
                    <img src={work3}/>
                    <h3>Weather Dashboard</h3>
                    </a>
                </div>

                <div className="card">
                    <a target="_blank" href="https://github.com/alexismenendez/coding-quiz">
                    <img src={work4}/>
                    <h3>Coding Quiz</h3>
                    </a>
                </div>

                <div className="card">
                    <a target="_blank" href="https://github.com/ellacheu/TravelBuddy-Express">
                    <img src={work5}/>
                    <h3>Travel Buddy</h3>
                    </a>
                </div>

                <div className="card">
                    <a target="_blank" href="https://github.com/alexismenendez/amenendez-social-network-api">
                    <img src={work6}/>
                    <h3>Social Network API</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work