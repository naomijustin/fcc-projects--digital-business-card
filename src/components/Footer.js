import React from "react"
import iconTwitter from "../images/TwitterIcon.svg"
import iconFacebook from "../images/FacebookIcon.svg"
import iconInstagram from "../images/InstagramIcon.svg"
import iconGitHub from "../images/GitHubIcon.svg"

function Footer() {
    return (
        <div className="bg--extra-dark container-width footer--container">
            <img src={iconTwitter} alt="Twitter icon"></img>
            <img src={iconFacebook} alt="Facebook icon"></img>
            <img src={iconInstagram} alt="Instagram icon"></img>
            <img src={iconGitHub} alt="GitHub icon"></img>
        </div>
        
    )
}

export default Footer