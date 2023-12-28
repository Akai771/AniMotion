import React from "react";
import { Link } from "react-router-dom";
import "./VidCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VidCard = ({id, title, coverImage, currentEpisode}) => {
    return (
      <>
        <div class="VidCard">
            <div className="VidCardImage">
              <Link exact to={`/details/${id}`}>
                  <img className="VidImage" src={coverImage} alt={title} />
                  <div className="playIcon">
                    <PlayArrowIcon style={{fontSize:"2.8rem"}}/>
                  </div>
              </Link>
            </div>
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