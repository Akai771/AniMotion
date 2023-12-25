import React from "react";
import { Link } from "react-router-dom";
import "./VidCard.css";

const VidCard = ({id, title, coverImage, currentEpisode}) => {
    return (
      <>
        <div class="VidCard">
          <Link exact to={`/details/${id}`}><img className="VidImage" src={coverImage} alt={title} /></Link>
            <div class="VidCard-info">
              <span class="VidCardTitle">{title.slice(0,20)}...</span>
              <div className="vidInfo">
                <span className="vidInfoCont">EP {currentEpisode}</span>
              </div>
            </div>
        </div>
      </>
    );
};



export default VidCard;