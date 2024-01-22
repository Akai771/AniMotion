import React from "react";
import { Link } from "react-router-dom";
import "./VidCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VidCard = ({id, title, coverImage, currentEpisode}) => {
    return (
      <>
        <div class="VidCard2">
            <div className="VidCardImage2">
              <Link exact to={`/watch/${id}`}>
                  <img className="VidImage2" src={coverImage} alt={title} />
                  <div className="playIcon">
                    <PlayArrowIcon style={{fontSize:"2.8rem"}}/>
                  </div>
              </Link>
            </div>
            <div class="VidCard-info2">
              <span class="VidCardTitle2">{title.slice(0,20)}...</span>
              <div className="vidInfo2">
                <span className="vidInfoCont2">EP {currentEpisode}</span>
              </div>
            </div>
        </div>
      </>
    );
};



export default VidCard;