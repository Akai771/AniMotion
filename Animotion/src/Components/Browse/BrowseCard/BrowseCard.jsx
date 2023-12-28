import React from "react";
import { Link } from "react-router-dom";
import "./BrowseCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BrowseCard = ({id, title, coverImage, vidUrl}) => {
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
              <span class="VidCardTitle">{title}</span>
            </div>
        </div>
      </>
    );
};



export default BrowseCard;