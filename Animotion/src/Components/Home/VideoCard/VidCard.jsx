import React from "react";
import { Link } from "react-router-dom";
import "./VidCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VidCard = ({id, title, coverImage, currentEpisode}) => {
    const redirectEpisodeId = `${id}-episode-${currentEpisode}`
    return (
      <>
        <div class="recentEpCard">
            <div className="recentEpCardImage">
              <Link exact to={`/watch/${id}?epId=${redirectEpisodeId}`}>
                  <img className="recentEpImage" src={coverImage} alt={title} />
                  <div className="playIcon">
                    <PlayArrowIcon style={{fontSize:"2.8rem"}}/>
                  </div>
              </Link>
            </div>
            <div class="recentEp-info">
              <span class="recentEpTitle">{title.slice(0,30)}...</span>
              <div className="recentEpInfo">
                <span className="recentEpInfoCont">EP {currentEpisode}</span>
              </div>
            </div>
        </div>
      </>
    );
};



export default VidCard;