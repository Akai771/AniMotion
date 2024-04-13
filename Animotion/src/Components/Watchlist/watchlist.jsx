import React,{ useEffect, useState }from "react";
import "./watchlist.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import Preloader from "../Preloader/Preloader";
import BrowseCard from "../Browse/BrowseCard/BrowseCard";
import { supabase } from "../Signing/supabaseClient";


function Watchlist() {
    // const [watchlist, setWatchlist] = useState([]);
    const [watchlist2, setWatchlist2] = useState([]);
    const token = localStorage.getItem('token');
    const tokenData = JSON.parse(token);
    const userId = tokenData.user.id

    // Fetches the watchlist from the database
    useEffect(() => {
      getWatchlist2();

      window.scrollTo(0, 0);
    }, []);

    async function getWatchlist2() {
      const { data } = await supabase.from("watchlistAnimotion").select();
      const userData = data.filter((data) => data.userID === userId);
      setWatchlist2(userData);
    }

    // Fetches the watchlist from the local storage
    // useEffect(()=>{
    //     localStorage.getItem('watchlist');
    //     setWatchlist(JSON.parse(localStorage.getItem('watchlist')));
    // },[])

    return(
        <div>
        <Preloader/>
        <NavBar/>
        <div className="watchlistContent">
            <h1 className="browseTitle" id="browse">Watchlist</h1>
            <div className="container">
                <div class="row">
                    <div>
                        <div className="BrowseAnimeContainer">
                            <div className="alignBrowseAnime">
                                {watchlist2?watchlist2.map((anime) => (
                                    <BrowseCard
                                        key={anime.animeId}
                                        id={anime.animeId}
                                        title={anime.animeTitle}
                                        coverImage={anime.animeImage}
                                    />
                                )):null}
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <br/><br/>                
        </div>
        <Footer/>
        <ChatbotButton/>
        <TopRedirect location="#browse"/>
    </div>
    );
}

export default Watchlist;