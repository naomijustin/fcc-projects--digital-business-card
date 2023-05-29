import React from "react"
import profileImage from "../images/Naomi_Profile_500px.jpg"
import mailIcon from "../images/Mail.svg"

function Info() {
    return (
        <div className="bg--dark">
            <img className="info--img" src={profileImage}></img>
            <h1 className="txt-h1">Naomi Justin</h1>
            <h4 className="txt-h4">Frontend Developer</h4>
            <h5 className="txt-h5">naomijustin.com</h5>
            <div className="info--button-container">
                <button id="btnEmail"><img src={mailIcon}></img>Email</button>
                <button id="btnLinkedIn">Linked In</button>
            </div>
        </div>
    )
}

export default Info