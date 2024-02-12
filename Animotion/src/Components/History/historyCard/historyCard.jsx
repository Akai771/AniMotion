import React from "react";
import { Link } from "react-router-dom";
import "./historyCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const HistoryCard = ({id, title, coverImage, vidUrl, episodeId}) => {
    return (
      <>
        <div class="historyCard">
          <div className="historyCardImage">
            <Link exact to={`/watch/${id}?epId=${episodeId}`}>
                <img className="historyImage" src={coverImage} alt={title} />
                <div className="playIcon">
                  <PlayArrowIcon style={{fontSize:"2.8rem"}}/>
                </div>
            </Link>
          </div>
            <div class="historyCard-info">
              <span class="historyCardTitle">{title}</span>
            </div>
        </div>
      </>
    );
};



export default HistoryCard;