import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "./MangaRead.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Preloader from "../../Preloader/Preloader";

const MangaRead = () => {
    const {id} = useParams();
    const {chapId} = useParams();

    const [mangaData, setMangaData] = useState([]);
    const [chapterData, setChapterData] = useState([]);
    const [server, setServer] = useState([])
    const [episode, setEpisode] = useState([])
    const [selectedOption, setSelectedOption] = useState(1);
    const [episodeId, setEpisodeId] = useState([0]);
    const [episodeNumber, setEpisodeNumber] = useState(1);
    const [addData, setAddData] = useState([])

    const handleOptionChange = (e) => {
        setEpisodeNumber(e.target.value);
        setEpisodeId(e.target.id);
        setSelectedOption(e.target.value);

      };

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/mangadex/read/${chapId}`)
        .then((res) => setChapterData(res.data))
    },[chapId])

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/manga/mangadex/info/${id}`)
        .then((res) => setMangaData(res.data))
    },[])

    const chapters = [mangaData.chapters];
    const totalChapters = chapters?chapters[0]:"No Data";
    console.log(totalChapters);

    return(<>
        <Preloader/>
        <NavBar />
        <div className="video-main-container">
            <div className="video-main">
            </div>
            <br/>
            <div className="mangaImageAlign">
                {chapterData.map((manga) => {
                    return(
                        <img src={manga.img} alt="Manga Cover Image" className="video-info-cover-image" id="animeImage"/>
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
                            return(<>
                                <Link exact to={`/manga/read/${id}/${chapter.id}`}>
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