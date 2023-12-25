import React from "react";
import { Link } from "react-router-dom";
import "./VidCard.css";

const VidCard2 = ({id, title, coverImage, currentEpisode, duration, format, vidUrl}) => {
    return (
      <>
        <div class="VidCard">    
            <Link exact to={`/details/${id}`}><img className="VidImage" src={coverImage} alt={title} /></Link>
            <div class="VidCard-info">
              <span class="VidCardTitle">{title.slice(0,20)}...</span>
              <div className="vidInfo">
              </div>
            </div>
        </div>
      </>
    );
};



export default VidCard2;