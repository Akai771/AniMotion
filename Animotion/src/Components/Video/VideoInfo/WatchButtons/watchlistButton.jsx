import React from "react";
import { useState, useEffect } from "react";
import "../VideoInfo.css";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { supabase } from "../../../Signing/supabaseClient";


function WatchlistButton({animeId, animeTitle, animeImage}) {
    const [isWatchlist, setIsWatchlist] = useState(false);
    const [colorWatch, setColorWatch] = useState("watchButton2")
    // const [watchlist, setWatchlist] = useState([]);
    const [watchlist2, setWatchlist2] = useState([]);
    const [watchlistBtnText, setWatchlistBtnText] = useState("Watchlist");

    // const checkWatchlistString = localStorage.getItem("watchlist");
    // const checkWatchlist = JSON.parse(checkWatchlistString);

    const targetAnimeId = animeId;
    // const targetAnime = checkWatchlist?checkWatchlist.find(anime => anime.animeId === targetAnimeId):null;

    const token = localStorage.getItem('token');
    const tokenData = JSON.parse(token);
    const userId = tokenData.user.id
  
    // Fetches the watchlist from the local storage
    // useEffect(() => {
    //     const storedWatchlist = localStorage.getItem('watchlist');
    //     if (storedWatchlist) {
    //       setWatchlist(JSON.parse(storedWatchlist));
    //     }
    // }, []);

    // Fetches the watchlist from the database
    useEffect(() => {
      getWatchlist2();
    }, []);

    let userData;
    async function getWatchlist2() {
      const { data } = await supabase.from("watchlistAnimotion").select();
      var userData = data.filter((data) => data.userID === userId);
      setWatchlist2(userData);
    }
    const checkWatchlist2 = watchlist2;
    const targetAnime2 = checkWatchlist2?checkWatchlist2.find(anime => anime.animeId === targetAnimeId):null;

    // Updates the watchlist button text and color
    useEffect(() => {
      setWatchlistBtnText(isWatchlist?(<>Watchlist <DoneIcon style={{paddingBottom:"4px"}}/></>):(<>Watchlist <AddIcon style={{paddingBottom:"2px"}}/></>)) 
    },[isWatchlist]);

    useEffect(() => {
      if (targetAnime2){
        setIsWatchlist(true);
        setColorWatch("watchButton3");
      }
      else{
        setIsWatchlist(false);
        setColorWatch("watchButton2");
      }
    },[targetAnime2]);

    // Adds or removes the anime from the watchlist in local storage
    // const handleAddToWatchlist = (animeId, animeTitle, animeImage) => {
    //     const existingAnimeIndex = watchlist.findIndex(
    //         (anime) => anime.animeId === animeId
    //       );
    //       if (existingAnimeIndex !== -1) {
    //         setWatchlist(watchlist.filter((anime) => anime.animeId !== animeId));
    //         localStorage.setItem('watchlist', JSON.stringify(watchlist));
    //       } 
    //       else {
    //         setWatchlist((prevWatchlist) => [
    //           ...prevWatchlist,
    //           { animeId, animeTitle, animeImage },
    //         ]);
    //         localStorage.setItem('watchlist', JSON.stringify(watchlist));
    //       }
    //     }

      // Adds or removes the anime from the watchlist in the database
      const handleAddToWatchlist2 = async (animeId, animeTitle, animeImage) => {
        const { data } = await supabase.from("watchlistAnimotion").select();
        const userData = data.filter((data) => data.userID === userId);

        const existingAnimeIndex = userData.findIndex(
            (anime) => anime.animeId === animeId
          );

          if (existingAnimeIndex !== -1) {
            await supabase.from("watchlistAnimotion")
            .delete()
            .match({animeId: animeId, userID: userId});
            getWatchlist2();
          } 
          else {
            await supabase.from("watchlistAnimotion")
            .insert([
                {animeId: animeId, animeTitle: animeTitle, animeImage: animeImage, userID: userId}
            ]);
            getWatchlist2();
          }
        }

    return(
        <button className={colorWatch} onClick={() => handleAddToWatchlist2(animeId, animeTitle, animeImage )}>{watchlistBtnText}</button>
    );
}

export default WatchlistButton;