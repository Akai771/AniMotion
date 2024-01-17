import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./MangaCard.css";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import axios from "axios";

const MangaCard = ({id, title, coverImage, vidUrl}) => {
  const [mangaTitle, setMangaTitle] = React.useState([]);
  useEffect(()=>{
    axios.get(`https://animotion-consumet-api.vercel.app/manga/mangakakalot/${title}`)
      .then((res) => setMangaTitle(res.data.results))
    },[title])
    const mangaImage = mangaTitle[0];

    return (
      <>
        <div class="VidCard">
          <div className="VidCardImage">
            <Link exact to={`/manga/details/${id}`}>
                <img className="VidImage" src={mangaImage?mangaImage.image :coverImage} alt={title} />
                <div className="playIcon">
                  <AutoStoriesIcon style={{fontSize:"2.5rem"}}/>
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



export default MangaCard;