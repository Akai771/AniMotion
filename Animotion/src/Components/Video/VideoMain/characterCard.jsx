import React from "react";
import "./VideoMain.css";

const CharacterCard = ({image, c_name}) => {
    return(<>
        <div className="characterCard">
            <div className="characterCardImgDiv">
                <img src={image} alt="Anime Character Image" className="characterCardImage"/>
            </div>
            <span className="characterCardName">{c_name}</span>             
        </div>
    </>)
}

export default CharacterCard;