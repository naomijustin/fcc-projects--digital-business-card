import React from "react"
import profileImage from "../images/Naomi_Profile_500px.jpg"
import mailIcon from "../images/Mail.svg"
import linkedInIcon from "../images/linkedin.svg"

function Info() {
    return (
        <div className="bg--dark">
            <img className="info--img" src={profileImage}></img>
            <h1 className="txt-h1">Naomi Justin</h1>
            <h4 className="txt-h4">Frontend Developer</h4>
            <h5 className="txt-h5">naomijustin.com</h5>
            <div className="info--button-container pb-10px">
                <button id="btnEmail"><img src={mailIcon} alt="Email icon"></img>Email</button>
                <a href="https://www.linkedin.com/in/naomi-justin/" target="_blank">
                    <button id="btnLinkedIn"><img src={linkedInIcon} alt="LinkedIn icon"></img>Linked In</button>
                </a>
            </div>
        </div>
    )
}

export default Info