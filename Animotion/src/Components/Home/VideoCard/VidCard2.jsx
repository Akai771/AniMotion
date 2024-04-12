import React from "react";
import { Link } from "react-router-dom";
import "./VidCard.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VidCard2 = ({id, title, coverImage}) => {
    return (
      <>
        <div class="VidCard1">    
          <div className="VidCardImage1">
              <Link exact to={`/details/${id}`}>
                  <img className="VidImage1" src={coverImage} alt={title} />
                  <div className="playIcon">
                    <PlayArrowIcon id="playIcon-home"/>
                  </div>
              </Link>
            </div>
            <div class="VidCard-info1">
              <span class="VidCardTitle">{title?title:"No Title"}</span>
            </div>
        </div>
      </>
    );
};



export default VidCard2;