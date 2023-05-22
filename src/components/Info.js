import React from "react"
import profileImage from "../images/Naomi-Image.jpg"

function Info() {
    return (
        <div>
            <img className="info--img" src={profileImage}></img>
            <h1>Naomi Justin</h1>
            <h4>Frontend Developer</h4>
        </div>
    )
}

export default Info