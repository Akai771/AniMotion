import React from "react";
import { Link } from "react-router-dom";
import "./BrowseCard.css";

const BrowseCard = ({id, title, coverImage, vidUrl}) => {
    return (
      <>
        <div class="VidCard">
            <Link exact to={`/details/${id}`}><img className="VidImage" src={coverImage} alt={title} /></Link>
            <div class="VidCard-info">
              <span class="VidCardTitle">{title}</span>
            </div>
        </div>
      </>
    );
};



export default BrowseCard;