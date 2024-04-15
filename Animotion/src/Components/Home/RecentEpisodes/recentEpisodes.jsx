import React from "react";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import "./recentEpisodes.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import axios from "axios";
import VidCard from "../VideoCard/VidCard";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Preloader from "../../Preloader/Preloader";

const RecentEpisodes = () => {
    const [page, setPage] = useState(1);
    const [recentEp, setRecentEp] = useState([]);
    
    const handleNextPage = () => {
        if(page>0){
            setPage(page+1);
        
        }
    }

    const handlePrevPage = () => {
        if(page>1){
            setPage(page-1);
        }
    }

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/recent-episodes?page=${page}`)
        .then((res) => setRecentEp(res.data.results))

        window.scrollTo(0,0);
    },[page])

    return(<>
        <div>
            <Preloader/>
            <NavBar/>
            <div className="browseContent">
                <span className="browseTitle2" id="browse">Latest Episodes</span>
                <div className="container">
                    <div class="row">
                        <div>
                            <div className="BrowseAnimeContainer">
                                <div className="alignBrowseAnime">
                                    {recentEp.map((seasonal) => (
                                            <VidCard id={seasonal.id} title={seasonal.title.slice(0,40)} coverImage={seasonal.image?seasonal.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"}/>
                                        ))
                                    }
                                </div>
                                <div className="pageBtnGrp">
                                    <button className="pageBtn" onClick={handlePrevPage}><KeyboardDoubleArrowLeftIcon/>Prev Page</button>
                                    <input class="quantity-input" type="text" value={page} disabled/>
                                    <button className="pageBtn" onClick={handleNextPage}>Next Page <KeyboardDoubleArrowRightIcon/></button>
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
    </>)
}

export default RecentEpisodes;