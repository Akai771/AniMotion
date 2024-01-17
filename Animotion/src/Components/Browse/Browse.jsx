import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import axios from "axios";
import BrowseCard from "./BrowseCard/BrowseCard";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Preloader from "../Preloader/Preloader";
import "./Browse.css";

const Browse = () => {
    const [browse, setBrowse] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("popular");
    const [page, setPage] = useState(1);

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

    console.log(search);
    console.log(searchTerm);

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/${searchTerm}?page=${page}`)
        .then((res) => setBrowse(res.data.results))
    },[searchTerm, page])
    console.log(browse);

    return(<>
        <div>
            <Preloader/>
            <NavBar/>
            <div className="browseContent">
                <h1 className="browseTitle" id="browse">Browse Anime</h1>
                <form className="browseAnimeSearchBox" onSubmit={handleSubmit}>
                    <input type="text" className="SearchAnimeInput" placeholder="Search" onChange={handleChange}/>
                    <button className="searchAnime__btn" type="submit">
                        <SearchIcon style={{color:"white"}}/>
                    </button>
                </form>
                <div className="container browse2Section">
                    <div class="row">
                        <div>
                            <div className="BrowseAnimeContainer">
                                <span className="browseAnimeTitle">Search results for : <span className="browseAnimeTitle2">{searchTerm}</span></span>
                                <div className="alignBrowseAnime">
                                    {browse.map((seasonal) => (
                                            <BrowseCard key={seasonal.id} id={seasonal.id} title={seasonal.title} coverImage={seasonal.image}/>
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
            <TopRedirect/>
        </div>
    </>)
}

export default Browse;