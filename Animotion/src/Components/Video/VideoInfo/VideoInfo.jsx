import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "./VideoInfo.css";
import Navbar from "../../Navbar/Navbar";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Footer from "../../Footer/Footer";
import AddIcon from '@mui/icons-material/Add';
import Preloader from "../../Preloader/Preloader";

const VideoInfo = () => {
    const [animeData, setAnimeData] = useState([]);
    const [addData, setAddData] = useState([])
    const [episodes, setEpisodes] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://consumet-api-yncc.onrender.com/anime/gogoanime/info/${id}`)
        .then((res) => setAnimeData(res.data))
    },[])

    useEffect(()=>{
        axios.get(`https://consumet-api-yncc.onrender.com/anime/gogoanime/info/${id}`)
        .then((res) => setEpisodes(res.data.episodes))
    },[])

    useEffect(()=>{
        axios.get(`https://api.anify.tv/search/anime/${id}`)
        .then((res) => setAddData(res.data.results[0]))
    },[])
    console.log(addData);

    return(<>
        <Preloader/>
        <Navbar />
        <div className="video-info-container">
            <img src={animeData.image} alt="Anime Cover Image" className="video-info-cover-image" id="animeImage"/>
            <div className="alignVidInfo col-8">
                <span className="AnimeTitle">{animeData.title}</span>
                <span className="AnimeTags2"><span className="AnimeTags">{addData.format}</span> | <span className="AnimeTags">{addData.type}</span> | <span className="AnimeTags">{addData.duration}m</span></span>
                {/* <span className="AnimeAlternateTitle">Other Names: {addData.title}</span> */}
                <span className="AnimeInfoTitle">Genres: <span className="AnimeInfo">{animeData.genres}</span> </span>
                <span className="AnimeInfoTitle">Release Date: <span className="AnimeInfo">{animeData.releaseDate}</span></span>
                <span className="AnimeInfoTitle">Status: <span className="AnimeInfo">{animeData.status}</span></span>
                <span className="AnimeInfoTitle">Total Episodes: <span className="AnimeInfo">{animeData.totalEpisodes}</span></span>
                <span className="AnimeInfoTitle">Rating: <span className="AnimeInfo">{addData.averageRating}</span></span>
                <span className="AnimeInfoTitle">Season: <span className="AnimeInfo">{addData.season}</span></span>
                <div className="episodeBtnGrp2">
                    <Link exact to={`/watch/${id}`}><button className="watchButton">Watch Now</button></Link>
                    <button className="watchButton"><AddIcon style={{fontSize:"1rem"}}/> Add to List</button>
                </div>
                <br/>
                <div className="AnimeDescSection">
                    <span className="AnimeDescTitle">Synopsis: </span>
                    <br/>   
                    <span className="AnimeDesc">{animeData.description}</span>
                </div>
                <br/>
                <span className="AnimeTitle">Trailer:</span>
                <iframe width="560" height="315" src={addData.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br /><br />
            </div>
        </div>
        <Footer />
        <ChatbotButton />
        <TopRedirect location="#animeImage"/>
    </>)
}

export default VideoInfo;