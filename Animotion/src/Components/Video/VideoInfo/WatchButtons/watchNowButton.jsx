import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../VideoInfo.css";


function WatchNowButton({animeId, animeTitle, animeImage}) {
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
  useEffect(() => {
    const storedHistory = localStorage.getItem("history_alt");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleWatchButton = (animeId, animeTitle, animeImage) => {
    const existingHistoryIndex = history.findIndex(
      (anime) => anime.animeId === animeId
    );

    if (existingHistoryIndex !== -1) {

    } 
    else {

      const updatedHistory = [...history, { animeId, animeTitle, animeImage }];
      setHistory(updatedHistory);
      localStorage.setItem("history_alt", JSON.stringify(updatedHistory));
    }
    navigate(`/watch/${animeId}?epId=${animeId}-episode-1`);
}

    return(
        <button className="watchNowButton" onClick={() => handleWatchButton(animeId, animeTitle, animeImage )}>Watch Now</button>
    );
}

export default WatchNowButton;