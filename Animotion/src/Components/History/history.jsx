import React,{ useEffect, useState }from "react";
import "./history.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import Preloader from "../Preloader/Preloader";
import HistoryCard from "./historyCard/historyCard";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


function History() {
    const [history, setHistory] = useState([]);

    useEffect(()=>{
        localStorage.getItem('history_alt');
        setHistory(JSON.parse(localStorage.getItem('history_alt')));
    },[])

    const handleHistoryClick = () =>{
        localStorage.removeItem('history_alt')
        window.location.reload();
    }

    return(
        <div>
        <Preloader/>
        <NavBar/>
        <div className="historyContent">
            <div className="historyHeader">
                <h1 className="historyTitle" id="browse">History</h1>
                <button className="clearHistory" onClick={handleHistoryClick}><DeleteForeverOutlinedIcon style={{marginBottom:"3px", color:"white"}}/>Clear History</button>
            </div>
            <div className="container">
                <div class="row">
                    <div 
                    // className="col-8"
                    >
                        <div className="BrowseAnimeContainer">
                            <div className="alignBrowseAnime">
                                {history?history.map((anime) => (
                                    console.log(anime.animeEpisodeId),
                                    <HistoryCard
                                        key={anime.animeId}
                                        id={anime.animeId}
                                        title={anime.animeTitle}
                                        coverImage={anime.animeImage}
                                        episodeId={anime.animeEpisodeId}
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

export default History;