import React from "react";
import { useState, useEffect } from "react";
import "./VideoInfo.css";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';


function WatchlistButton({animeId, animeTitle, animeImage}) {
    const [isWatchlist, setIsWatchlist] = useState(false);
    const [colorWatch, setColorWatch] = useState("watchButton2")
    const [watchlist, setWatchlist] = useState([]);
    const [watchlistBtnText, setWatchlistBtnText] = useState("Watchlist");
    const checkWatchlistString = localStorage.getItem("watchlist");
    const checkWatchlist = JSON.parse(checkWatchlistString);
    const targetAnimeId = animeId;
    const targetAnime = checkWatchlist.find(anime => anime.animeId === targetAnimeId);

    const token = localStorage.getItem('token');
    const tokenData = JSON.parse(token);
    const userId = tokenData.user.id
      
    useEffect(() => {
        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
          setWatchlist(JSON.parse(storedWatchlist));
        }
    }, []);


    useEffect(() => {
      setWatchlistBtnText(isWatchlist?(<>Watchlist <DoneIcon style={{paddingBottom:"4px"}}/></>):(<>Watchlist <AddIcon style={{paddingBottom:"2px"}}/></>)) 
    },[isWatchlist]);

    useEffect(() => {
      if (targetAnime){
        setIsWatchlist(true);
        setColorWatch("watchButton3");
      }
      else{
        setIsWatchlist(false);
        setColorWatch("watchButton2");
      }
    },[targetAnime]);

    const handleAddToWatchlist = (animeId, animeTitle, animeImage) => {
        const existingAnimeIndex = watchlist.findIndex(
            (anime) => anime.animeId === animeId
          );
          if (existingAnimeIndex !== -1) {
            setWatchlist(watchlist.filter((anime) => anime.animeId !== animeId));
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
          } 
          else {
            setWatchlist((prevWatchlist) => [
              ...prevWatchlist,
              { animeId, animeTitle, animeImage },
            ]);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
          }
        }

    return(
        <button className={colorWatch} onClick={() => handleAddToWatchlist(animeId, animeTitle, animeImage )}>{watchlistBtnText}</button>
    );
}

export default WatchlistButton;