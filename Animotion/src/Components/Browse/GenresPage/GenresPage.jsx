import React from "react";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import "./genres.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import axios from "axios";
import BrowseCard from "../BrowseCard/BrowseCard";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Preloader from "../../Preloader/Preloader";

const GenresPage = () => {
    const [browse, setBrowse] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("popular");
    const [page, setPage] = useState(1);
    const {genreId} = useParams();
    
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

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(search);
        setPage(1);
    }

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api-2.vercel.app/anime/gogoanime/genre/${genreId}?page=${page}`)
        .then((res) => setBrowse(res.data.results))
    },[searchTerm, page])

    return(<>
        <div>
            <Preloader/>
            <NavBar/>
            <div className="browseContent">
                <span className="browseTitle2" id="browse">{genreId.toUpperCase()} <span className="browseTitle">ANIME</span></span>
                <div className="container">
                    <div class="row">
                        <div>
                            <div className="BrowseAnimeContainer">
                                <div className="alignBrowseAnime">
                                    {browse.map((seasonal) => (
                                            <BrowseCard id={seasonal.id} title={seasonal.title.slice(0,40)} coverImage={seasonal.image?seasonal.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"}/>
                                        ))
                                    }
                                </div>
                                <div className="pageBtnGrp">
                                    <button className="pageBtn" onClick={handlePrevPage}><KeyboardDoubleArrowLeftIcon/>Prev Page</button>
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

export default GenresPage;