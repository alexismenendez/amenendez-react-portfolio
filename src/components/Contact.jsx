import React from "react"
import "../styles/Body.css"

const Contact = () => {
    return(
        <div className="contact hero">
            <h2>Contact</h2>
            <div>
                <form className="contactContain">
                    <input placeholder="name" name="email"></input>

                    <input placeholder="email" name="email"></input>

                    <textarea placeholder="message" name="message"></textarea>

                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact