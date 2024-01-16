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
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Preloader from "../Preloader/Preloader";

const Manga = () => {
    const [browse, setBrowse] = useState([]);
    const [browse2, setBrowse2] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("popular");
    const [selectedGenre, setSelectedGenre] = useState("All");
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

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/mangadex/${searchTerm}`)
        .then((res) => setBrowse(res.data.results))
    },[searchTerm, page])
    console.log(browse);

    return(<>
        <div>
            <Preloader/>
            <NavBar/>
            <div className="mangaContent">
                <h1 className="mangaTitle" id="browse">Browse Manga</h1>
                <form className="browseSearchBox" onSubmit={handleSubmit}>
                    <input type="text" className="SearchInput" placeholder="Search" onChange={handleChange}/>
                    <button className="search__btn" type="submit">
                        <SearchIcon style={{color:"white"}}/>
                    </button>
                </form>
                <div className="container Manga2Section">
                    <div class="row">
                        <div 
                        // className="col-8"
                        >
                            <div className="BrowseMangaContainer">
                                <span className="browseMangaTitle">Search results for : <span className="browseAnimeTitle2">{searchTerm}</span></span>
                                <div className="alignBrowseManga">
                                    {browse.map((seasonal) => (
                                            <MangaCard id={seasonal.id} title={seasonal.title.slice(0,40)} coverImage={seasonal.image?seasonal.image:"https://via.placeholder.com/150x190"}/>
                                        ))
                                    }
                                </div>
                                <div className="pageBtnGrp">
                                    <button className="pageBtn" onClick={handlePrevPage}><KeyboardDoubleArrowLeftIcon/>Prev Page</button>
                                    <button className="pageBtn" onClick={handleNextPage}>Next Page <KeyboardDoubleArrowRightIcon/></button>
                                </div>
                            </div>  
                        </div>
                        {/* <div className="verticalDivisionLine"/>
                        <div className="col">
                            <span className="genreTitle">Genres</span>
                            <div className="genreBtnGrp">
                                {Genres.map((genre) => {
                                    return(<>
                                        <button className="GenreBtn" value={genre.genre} onClick={handleDayChange}>{genre.genre}</button>
                                    </>)
                                }
                                )}
                            </div>
                        </div> */}
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