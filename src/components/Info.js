import React from "react";
import Photo from "../assets/photo.jpg";
import Mail from "../assets/Mail.png";
import LinkedIn from "../assets/linkedin.png";
import "./Info.css";

const Info = () => {
    return(
        <div className="infoContent">
            <div className="infoPhoto">
                <img src={Photo} />
            </div>
            <div className="mainContent">
                <p className="info--Name">Noufan Elachola</p>
                <p className="info--Title">Frontend Developer</p>
                <p className="info--Web">
                    <a href="#">noufanelachola.github.io</a>
                </p>

                <div className="infoBtn">
                    <a href="mailto:noufansadiqelachola@gmail.com">
                        <button className="btn btnEmail" >
                            <img src={Mail} />
                            <p>Email</p>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/noufan-elachola-32228a1b0/">
                        <button className="btn btnLinkedIn" onclick="window.location.href='https://www.linkedin.com/in/noufan-elachola-32228a1b0/';"> 
                            <img src={LinkedIn} />
                            <p>LinkedIn</p> 
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Info;