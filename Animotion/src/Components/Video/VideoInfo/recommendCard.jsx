import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./recommendCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const RecommendCard = ({id, title, image}) => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/details/${id}`)
        window.location.reload();
    }
    return (
      <>
        <div class="RecommendCard">
          <div className="RecommendImage">
            <button className="recommendCardBtn" onClick={handleClick}>
                <img className="RecommendCardImage" src={image} alt={title} />
                <div className="playIcon2">
                  <PlayArrowIcon style={{fontSize:"2.8rem"}}/>
                </div>
            </button>
          </div>
            <div class="RecommendCard-info">
              <span class="RecommendCardTitle">{title}</span>
            </div>
        </div>
      </>
    );
};



export default RecommendCard;