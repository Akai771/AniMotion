import React from "react";
import { Link } from "react-router-dom";
import "./TrendingCard.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


const TrendingCard = ({ id, title, coverImage, type, duration }) => {
  return (
    <>
      <Link exact to={`/details/${id}`} className="trendingLink">
        <div class="trendingCard">
          <div className="trendingCard-Info">
            <div className="trendingTitleAlign">
              <span class="trendingTitle">{title}</span>
            </div>
            <div className="trendingCardRankDiv">
              <span className="trendingCardRank">{type}</span>
            </div>
          </div>
          <div className="trendingCardImage">
            <img className="trendingImage" src={coverImage} alt={title} />
            <div className="playIcon2">
              <PlayArrowIcon id="playIcon2-home" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TrendingCard;
