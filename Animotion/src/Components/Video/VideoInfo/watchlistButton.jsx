import React from "react";
import { useState, useEffect } from "react";
import "./VideoInfo.css";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';


function WatchlistButton({animeId, animeTitle, animeImage}) {
    const [isWatchlist, setIsWatchlist] = useState(false);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
        }
    }, []);

    const handleAddToWatchlist = (animeId, animeTitle, animeImage) => {
        const existingAnimeIndex = watchlist.findIndex(
            (anime) => anime.animeId === animeId
          );
      
          if (existingAnimeIndex !== -1) {
            setIsWatchlist(false);
            setWatchlist(watchlist.filter((anime) => anime.animeId !== animeId));
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
          } 
          else {
            setIsWatchlist(true);
            setWatchlist((prevWatchlist) => [
              ...prevWatchlist,
              { animeId, animeTitle, animeImage },
            ]);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
          }
        };
        const watchlistBtnText = watchlist.some((anime) => anime.animeId === animeId)? <>Watchlist<AddIcon/></>: <>Watchlist<DoneIcon/></>;

    return(
        <button className="watchButton" onClick={() => handleAddToWatchlist(animeId, animeTitle, animeImage )}>{watchlistBtnText}</button>
    );
}

export default WatchlistButton;