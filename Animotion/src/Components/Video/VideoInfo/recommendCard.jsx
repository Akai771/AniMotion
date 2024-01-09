import React from "react";
import { Link } from "react-router-dom";
import "./recommendCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const RecommendCard = ({id, title, image}) => {
    return (
      <>
        <div class="RecommendCard">
          <div className="RecommendImage">
            <Link exact to={`/details/${id}`}>
                <img className="RecommendCardImage" src={image} alt={title} />
                <div className="playIcon2">
                  <PlayArrowIcon style={{fontSize:"2.8rem"}}/>
                </div>
            </Link>
          </div>
            <div class="RecommendCard-info">
              <span class="RecommendCardTitle">{title}</span>
            </div>
        </div>
      </>
    );
};



export default RecommendCard;