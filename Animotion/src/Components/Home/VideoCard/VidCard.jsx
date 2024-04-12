import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VidCard.css";
import "../../Video/VideoInfo/RecommendCard/recommendCard.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VidCard = ({id, title, coverImage, currentEpisode}) => {
    const redirectEpisodeId = `${id}-episode-${currentEpisode}`
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/details/${id}`)
        window.location.reload();
    }
    return (
      <>
        <div class="recentEpCard">
            <div className="recentEpCardImage">
              <Link exact to={`/watch/${id}?epId=${redirectEpisodeId}`}>
                  <img className="recentEpImage" src={coverImage} alt={title} />
                  <div className="playIcon">
                    <PlayArrowIcon id="playIcon-home"/>
                  </div>
              </Link>
            </div>
            <div class="recentEp-info">
              <div className="recentEpTitleAlign">
                <span class="recentEpTitle">{title}</span>
              </div>
              <div className="recentEpInfo">
                <span className="recentEpInfoCont">EP {currentEpisode}</span>
              </div>
            </div>
        </div>
      </>
    );
};



export default VidCard;