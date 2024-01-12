import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "./MangaInfo.css";
import Navbar from "../../Navbar/Navbar";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Footer from "../../Footer/Footer";
import AddIcon from '@mui/icons-material/Add';
import Preloader from "../../Preloader/Preloader";
import CharacterCard from "../../Video/VideoMain/characterCard";
import ReactPlayer from "react-player";

const MangaInfo = () => {
    const [mangaData, setMangaData] = useState([]);
    const {id} = useParams();

    
    const mangaDesc= [mangaData.description];
    const descEng = mangaDesc[0]?mangaDesc[0].en:"No Data";

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/mangadex/info/${id}`)
        .then((res) => setMangaData(res.data))
    },[])

    const chapters = [mangaData.chapters];
    const totalChapters = chapters?chapters[0]:"No Data";
    const readLatestBtn = totalChapters?totalChapters[0].id:"No Data";
    const readNewBtn = totalChapters?totalChapters.slice(-1)[0].id:"No Data";
    const chapterLength = chapters[0]?chapters[0].length:"No Data";

    return(<>
        <Preloader/>
        <Navbar />
        <div className="manga-info-container">
            <img src={mangaData?mangaData.image:"https://via.placeholder.com/150x190"} alt="Manga Cover Image" className="video-info-cover-image" id="animeImage"/>
            <div className="alignVidInfo col-8">
                <span className="MangaTitle">{mangaData.title}</span>
                <span className="MangaInfoTitle">Genres: <span className="AnimeInfo">{mangaData.genres?mangaData.genres.join(" ,"):"NoData"}</span> </span>
                <span className="MangaInfoTitle">Status: <span className="AnimeInfo">{mangaData.status}</span></span>
                <span className="MangaInfoTitle">Total Chapters: <span className="AnimeInfo">{chapterLength}</span></span>
                {/* <span className="AnimeInfoTitle">Rating: <span className="AnimeInfo">{mangaData?mangaData.rating:"No Data"}</span></span> */}
                {/* <span className="AnimeInfoTitle">Authors: <span className="AnimeInfo">{mangaData?mangaData.authors:"No Data"}</span></span> */}
                <div className="episodeBtnGrp2">
                    <Link exact to={`/manga/read/${id}/${readLatestBtn}`}><button className="watchButton">Read Latest Chapter</button></Link>
                    <Link exact to={`/manga/read/${id}/${readNewBtn}`}><button className="watchButton">Read First Chapter</button></Link>
                </div>
                <br/>
                <div className="MangaDescSection">
                    <span className="MangaDescTitle">Synopsis: </span>
                    <br/>   
                    <span className="MangaDesc">{descEng}</span>
                </div>
                <br/>
                <div>
                    <span className="MangaDescTitle">Chapters: </span>
                    <br/>
                    <div className="chapterBoxAlign">
                        <ul className="chapterBox">
                        {totalChapters?totalChapters.map((chapter) => {
                            return(<>
                                <Link exact to={`/manga/read/${id}/${chapter.id}`}>
                                    <li key={chapter.id}>
                                        <span style={{color:"var(--secondary-color)", paddingRight:"1rem"}}>{chapter.chapterNumber}</span> {chapter.title}
                                    </li>
                                </Link>
                            </>)
                        }):"No Data"}
                        </ul>
                    </div>
                </div>
                <br/><br/>
            </div>
        </div>
        <Footer />
        <ChatbotButton />
        <TopRedirect/>
    </>)
}

export default MangaInfo;