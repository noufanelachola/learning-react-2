import React from "react";
import Photo from "../assets/photo.jpg";
import "./Info.css";

const Info = () => {
    return(
        <div className="infoContent">
            <div className="infoPhoto">
                <img src={Photo} />
            </div>
        </div>
    );
}

export default Info;