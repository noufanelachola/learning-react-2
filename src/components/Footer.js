import React from "react";
import Twitter from "../assets/Twitter Icon.png";
import Facebook from "../assets/Facebook Icon.png";
import Instagram from "../assets/Instagram Icon.png";
import Github from "../assets/GitHub Icon.png";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footerContent">
            <a href="https://twitter.com/noufan_elachola"><img className="icon" src={Twitter}/></a>
            <a href="https://www.facebook.com/profile.php?id=100093440737442"><img className="icon" src={Facebook}/></a>
            <a href="https://www.instagram.com/devneurnouf/"><img className="icon" src={Instagram}/></a>
            <a href="https://github.com/noufanelachola"><img className="icon" src={Github}/></a>
        </div>
    );
}

export default Footer;