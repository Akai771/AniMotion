import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoInfo.css";


function WatchNowButton({animeId, animeTitle, animeImage}) {
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("history");
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
      localStorage.setItem("history", JSON.stringify(updatedHistory));
    }
    navigate(`/watch/${animeId}`);
}

    return(
        <button className="watchButton" onClick={() => handleWatchButton(animeId, animeTitle, animeImage )}>Watch Now</button>
    );
}

export default WatchNowButton;