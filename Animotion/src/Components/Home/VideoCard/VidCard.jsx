import React from "react";
import "./VidCard.css";

const VidCard = ({title, coverImage, currentEpisode, duration, format}) => {
    var ti = JSON.stringify(title);
    return (
      <>
        <div class="VidCard">
            <img className="VidImage" src={coverImage} alt={title} />
            <div class="VidCard-info">
              <span class="VidCardTitle">{title?title.slice(0,19):"No Title"}...</span>
              <div className="vidInfo">
                <span className="vidInfoCont">{duration}m</span>
                <span className="vidInfoCont">{format}</span>
                <span className="vidInfoCont">EP {currentEpisode}</span>
              </div>
            </div>
        </div>
      </>
    );
};



export default VidCard;