import React, {useState, useEffect} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./MangaRead.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Preloader from "../../Preloader/Preloader";

const MangaRead = () => {
    const {chapId} = useParams();
    const {lang} = useParams();
    const {chap} = useParams();
    const navigate = useNavigate();
    const [mangaData, setMangaData] = useState([]);
    const [chapterData, setChapterData] = useState([]);

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/managreader/read?chapterId=${chapId}/${lang}/${chap}`)
        .then((res) => setChapterData(res.data))
    },[chapId])

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/managreader/info?id=${chapId}`)
        .then((res) => setMangaData(res.data))
    },[])

    const chapters = [mangaData.chapters];
    const totalChapters = chapters?chapters[0]:"No Data";

    return(<>
        <Preloader/>
        <NavBar />
        <div className="video-main-container">
            <div className="manga-page-info">
                <span className="manga-info-title1">{mangaData.title} :<span className="manga-info-title2"> {chap}</span></span>
            </div>
            <br/>
            <div className="mangaImageAlign">
                {chapterData.map((manga) => {
                    return(
                        <img src={manga.img} alt="Manga Cover Image" className="mangaPanels" id="animeImage"/>
                    )
                })}
            </div>
            <br/>
            <div className="MangaChapters">
                <div>
                    <span className="AnimeTitle">Chapters:</span>
                    <br/>
                    <div className="chapterBoxAlign">
                        <ul className="chapterBox">
                        {totalChapters?totalChapters.map((chapter) => {
                            const handleClick = () => {
                                navigate(`/manga/read/${chapter.id}`);
                                window.location.reload();
                            }         

                            return(<>
                                <Link onClick={handleClick}>
                                    <li key={chapter.id}>
                                        <span style={{color:"var(--secondary-color)", paddingRight:"1rem"}}>{chapter.chapterNumber}</span>{chapter.title}
                                    </li>
                                </Link>
                            </>)
                        }):"No Data"}
                        </ul>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
        <Footer />
        <ChatbotButton />
        <TopRedirect/>
    </>)
}

export default MangaRead;