import React,{ useEffect, useState }from "react";
import "./watchlist.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import Preloader from "../Preloader/Preloader";
import BrowseCard from "../Browse/BrowseCard/BrowseCard";
import axios from "axios";


function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(()=>{
        localStorage.getItem('watchlist');
        setWatchlist(JSON.parse(localStorage.getItem('watchlist')));
    },[])
    console.log(watchlist);

    return(
        <div>
        <Preloader/>
        <NavBar/>
        <div className="watchlistContent">
            <h1 className="browseTitle" id="browse">Watchlist</h1>
            <div className="container">
                <div class="row">
                    <div 
                    // className="col-8"
                    >
                        <div className="BrowseAnimeContainer">
                            <div className="alignBrowseAnime">
                                {watchlist.map((anime) => (
                                    <BrowseCard
                                        key={anime.animeId}
                                        id={anime.animeId}
                                        title={anime.animeTitle}
                                        coverImage={anime.animeImage}
                                    />
                                ))}
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