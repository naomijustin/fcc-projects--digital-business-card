import React from "react"
import iconTwitter from "../images/TwitterIcon.svg"
import iconFacebook from "../images/FacebookIcon.svg"
import iconInstagram from "../images/InstagramIcon.svg"
import iconGitHub from "../images/GitHubIcon.svg"

function Footer() {
    return (
        <div className="bg--extra-dark container-width footer--container">
            <a>
                <img src={iconTwitter} alt="Twitter icon"></img>
            </a>
            <a>
                <img src={iconFacebook} alt="Facebook icon"></img>
            </a>
            <a href="https://www.instagram.com/naomiartmedia/" target="_blank">
                <img src={iconInstagram} alt="Instagram icon"></img>
            </a>
            <a href="https://github.com/naomijustin" target="_blank">
                <img src={iconGitHub} alt="GitHub icon"></img>
            </a>
        </div>
        
    )
}

export default Footer