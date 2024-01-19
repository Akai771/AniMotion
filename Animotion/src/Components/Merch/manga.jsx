import React from "react";
import { useEffect, useState } from "react";
import "./manga.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import axios from "axios";
import MangaCard from "./MangaCard/MangaCard";
import SearchIcon from '@mui/icons-material/Search';
import Preloader from "../Preloader/Preloader";

const Manga = () => {
    const [browse, setBrowse] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("popular");

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(search);
    }

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/managreader/${searchTerm}`)
        .then((res) => setBrowse(res.data.results))
    },[searchTerm])

    return(<>
        <div>
            <Preloader/>
            <NavBar/>
            <div className="mangaContent">
                <h1 className="mangaTitle" id="browse">Browse Manga</h1>
                <form className="searchSection" onSubmit={handleSubmit}>
                    <div className="browseSearchBox">
                        <input type="text" className="SearchInput" placeholder="Search" onChange={handleChange}/>
                        <button className="search__btn" type="submit">
                            <SearchIcon style={{color:"white"}}/>
                        </button>
                    </div>
                </form>
                <div className="container Manga2Section">
                    <div class="row">
                        <div>
                            <div className="BrowseMangaContainer">
                                <span className="browseMangaTitle">Search results for : <span className="browseAnimeTitle2">{searchTerm}</span></span>
                                <div className="alignBrowseManga">
                                    {browse.map((seasonal) => (
                                            <MangaCard id={seasonal.id} title={seasonal.title.slice(0,40)} coverImage={seasonal.image?seasonal.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"}/>
                                        ))
                                    }
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

export default Manga;