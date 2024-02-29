import React from "react";
import "../styles/Body.css"

const Resume  = () => {
    return (
        <div className="resume hero">
            <h2>Resume</h2>
            <div className="resumeText">
                <div className="education">
                    <h3>Education</h3>
                    <div className="edContent">
                        <h4>2023-2024</h4>
                        <p>University of Minnesota</p>
                        <p>Full Stack Web Dev Certificate</p>

                        <h4>2017-2019</h4>
                        <p>Full Sail University</p>
                        <p>Bachelor's of Science, Game Art</p>

                        <h4>2016-2017</h4>
                        <p>Century College</p>
                        <p>Visual Communications Certificate</p>
                    </div>
                </div>
                <div className="experience">
                    <h3>Experience</h3>
                    <div>
                        <h4>Character Artist @ Studio Grim</h4>
                        <p>April 2022 - December 2022</p>
                        <p>Responsible for creating characters and such and so on</p>

                        <h4>Character Artist @ Fathom 7</h4>
                        <p>January 2022 - April 2022</p>
                        <p>Responsible for creating characters and such and so on</p>

                        <h4>Character Artist @ Full Sail</h4>
                        <p>September 2020 - February 2021</p>
                        <p>Responsible for creating characters and such and so on</p>
                    </div>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <div>
                        <h4>HTML, CSS, Javascript, React, Vite, Express, Node, MongoDB, SQL</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume