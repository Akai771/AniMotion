import React from "react";
import "./Browse.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import { Link } from "react-router-dom";
import Genres from "./Genres";

const Browse = () => {
    console.log(Genres);
    return(<>
        <div>
            <NavBar/>
            <div className="browseContent">
                <h1 className="browseTitle">Browse</h1>
                <div className="browseSearchBox">
                    <input type="text" className="browseSearchBar" placeholder="Search"/>
                    <button className="browseSearchButton">Search</button>
                </div>
                <div className="container browse2Section">
                    <div class="row">
                        <div className="col-8">
                            <span className="browseTitle">Anime</span>
                        </div>
                        <div className="verticalDivisionLine"/>
                        <div className="col">
                            <span className="genreTitle">Genres</span>
                            <div className="genreBtnGrp">
                                {Genres.map((genre) => {
                                    return(<>
                                        <button className="GenreBtn">{genre.genre}</button>
                                    </>)
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <Footer/>
            <ChatbotButton/>
            <TopRedirect location="#"/>
        </div>
    </>)
}

export default Browse;