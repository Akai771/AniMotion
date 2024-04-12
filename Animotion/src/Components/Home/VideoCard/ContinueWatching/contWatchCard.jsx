import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./contWatchCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ContWatchingCard = ({id, title, coverImage, currentEpisode}) => {
    const redirectEpisodeId = `${id}-episode-${currentEpisode}`
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/details/${id}`)
        window.location.reload();
    }
    return (
      <>
        <div class="contWatchCard">
            <div className="contWatchdImgDiv">
              <Link exact to={`/watch/${id}?epId=${redirectEpisodeId}`}>
                  <img className="contWatchdImg" src={coverImage} alt={title} />
                  <div className="pIcon">
                    <PlayArrowIcon id="pIcon-home"/>
                  </div>
              </Link>
            </div>
            <div className="horizontal-line" />
            <div className="contWatchCardAlign">
              <span class="contWatchCardTitle">{title}</span>
            </div>
        </div>
      </>
    );
};



export default ContWatchingCard;